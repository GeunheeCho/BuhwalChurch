import { Metadata } from "next"
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronLeft } from "lucide-react"

interface PageProps {
  params: Promise<{
    title: string
  }>
}

// Static Params 생성을 위해 전체 목록 수집하는 헬퍼 함수
async function getPraiseTitles(): Promise<string[]> {
  const region = process.env.AWS_REGION || "ap-northeast-2"
  const bucket = process.env.AWS_S3_BUCKET
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

  if (!bucket || !accessKeyId || !secretAccessKey) return []

  try {
    const client = new S3Client({
      region,
      credentials: { accessKeyId, secretAccessKey },
    })

    const command = new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: "praise-images/",
      Delimiter: "/",
    })

    const response = await client.send(command)
    const titles: string[] = []

    // 1. 단일 파일 제목 추출
    const files = response.Contents?.filter(item => {
      const key = item.Key || ""
      const lowerKey = key.toLowerCase()
      return (
        key !== "praise-images/" &&
        (lowerKey.endsWith(".jpg") ||
          lowerKey.endsWith(".jpeg") ||
          lowerKey.endsWith(".png") ||
          lowerKey.endsWith(".webp"))
      )
    }) || []
    
    for (const file of files) {
      const key = file.Key || ""
      const title = key.replace("praise-images/", "").replace(/\.[^/.]+$/, "")
      if (title) titles.push(title)
    }

    // 2. 폴더 제목 추출
    const folders = response.CommonPrefixes || []
    for (const folder of folders) {
      const folderPrefix = folder.Prefix || ""
      const title = folderPrefix.replace("praise-images/", "").replace("/", "")
      if (title) titles.push(title)
    }

    return titles
  } catch (err) {
    console.error("Static params S3 fetch failed for praise:", err)
    return []
  }
}

// Next.js 정적 빌드 대응을 위한 파라미터 생성
export async function generateStaticParams() {
  const titles = await getPraiseTitles()
  if (titles.length === 0) {
    // S3에 찬양 데이터가 전혀 없을 때 빌드가 깨지는 현상을 방지하기 위한 임시 폴백 값
    return [{ title: "empty" }]
  }
  return titles.map((title) => ({
    title: title,
  }))
}

// 특정 찬양의 상세 이미지들을 가져오는 함수 (하이브리드 대응)
async function getPraiseImages(decodedTitle: string): Promise<string[]> {
  if (decodedTitle === "empty") return []
  
  const region = process.env.AWS_REGION || "ap-northeast-2"
  const bucket = process.env.AWS_S3_BUCKET
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
  const cfDomain = process.env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN || process.env.CLOUDFRONT_DOMAIN

  if (!bucket || !accessKeyId || !secretAccessKey) return []

  const client = new S3Client({
    region,
    credentials: { accessKeyId, secretAccessKey },
  })

  // 1단계: 단일 파일 방식인지 먼저 확인 (praise-images/제목.확장자 가 있는지 체크)
  const imageExtensions = [".jpg", ".jpeg", ".png", ".webp"]
  for (const ext of imageExtensions) {
    const singleFileKey = `praise-images/${decodedTitle}${ext}`
    
    // 객체 존재 여부 확인용 ListObjects 호출 (또는 HeadObject를 쓸 수도 있으나 권한 이슈 대비 List가 가장 안전)
    const checkCommand = new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: singleFileKey,
      MaxKeys: 1,
    })
    
    const checkResponse = await client.send(checkCommand)
    const exists = checkResponse.Contents?.some(item => item.Key === singleFileKey)

    if (exists) {
      let url = ""
      if (cfDomain) {
        url = `https://${cfDomain.replace(/\/$/, "")}/${singleFileKey}`
      } else {
        url = `https://${bucket}.s3.${region}.amazonaws.com/${singleFileKey}`
      }
      return [url] // 한 장짜리 이미지 배열 반환
    }
  }

  // 2단계: 단일 파일이 없으면 폴더 방식으로 조회 (praise-images/제목/ 하위 이미지들)
  try {
    const folderPrefix = `praise-images/${decodedTitle}/`
    const command = new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: folderPrefix,
    })

    const response = await client.send(command)
    const imageUrls = response.Contents?.map(item => item.Key || "")
      .filter(key => {
        const lowerKey = key.toLowerCase()
        return (
          lowerKey.endsWith(".jpg") ||
          lowerKey.endsWith(".jpeg") ||
          lowerKey.endsWith(".png") ||
          lowerKey.endsWith(".webp")
        )
      })
      .map(key => {
        if (cfDomain) {
          return `https://${cfDomain.replace(/\/$/, "")}/${key.replace(/^\//, "")}`
        }
        return `https://${bucket}.s3.${region}.amazonaws.com/${key}`
      }) || []

    // 1.jpg, 2.jpg 등 파일명 자연 정렬
    return imageUrls.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  } catch (err) {
    console.error(`S3 images load failed for praise ${decodedTitle}:`, err)
    return []
  }
}

// 메타데이터 동적 생성
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { title } = await params
  const decodedTitle = decodeURIComponent(title)
  const metaTitle = decodedTitle === "empty" ? "준비중인 찬양" : decodedTitle
  return {
    title: `${metaTitle} 찬양 - 부활교회`,
    description: `부활교회 찬양 - ${metaTitle}`,
  }
}

export default async function PraiseDetailPage({ params }: PageProps) {
  const { title } = await params
  const decodedTitle = decodeURIComponent(title)
  const imageUrls = await getPraiseImages(decodedTitle)

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header />
      <main className="flex-1 max-w-[900px] w-full mx-auto px-4 py-8">
        {/* 상단 네비게이션 */}
        <div className="mb-6">
          <Link href="/praise" className="inline-flex items-center gap-1 text-gray-600 hover:text-amber-600 transition-colors text-[14px]">
            <ChevronLeft className="w-4 h-4" />
            찬양 목록으로 돌아가기
          </Link>
        </div>

        {/* 찬양 카드 뷰어 */}
        <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 border-b pb-4 mb-6 text-center">
            {decodedTitle === "empty" ? "찬양 준비중" : decodedTitle}
          </h2>

          <div className="flex flex-col gap-6 items-center">
            {decodedTitle === "empty" ? (
              <div className="py-24 text-center">
                <p className="text-gray-500 mb-2">등록된 찬양이 없습니다.</p>
                <p className="text-[13px] text-gray-400">S3 버킷의 `praise-images/` 폴더 내부에 찬양 파일을 올려주세요.</p>
              </div>
            ) : imageUrls.length > 0 ? (
              imageUrls.map((url, i) => (
                <div key={i} className="w-full border border-gray-100 shadow-sm rounded overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={url}
                    alt={`${decodedTitle} - 이미지 ${i + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))
            ) : (
              <div className="py-24 text-center">
                <p className="text-gray-500 mb-2">등록된 찬양 이미지가 없거나 S3 연동에 실패했습니다.</p>
                <p className="text-[13px] text-gray-400">
                  S3 버킷의 `praise-images/{decodedTitle}.jpg` 파일이 있거나 `praise-images/{decodedTitle}/` 폴더 내부에 이미지 파일이 있는지 확인해 주세요.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 하단 네비게이션 */}
        <div className="mt-8 text-center">
          <Link href="/praise" className="inline-flex items-center justify-center px-6 py-2.5 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:text-amber-600 transition-colors text-[14px] font-medium shadow-sm">
            목록보기
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
