import Image from "next/image"

// 섬기는 분들 데이터 - 수정이 용이하도록 배열로 관리
const staffData = [
    {
      id: 1,
      name: "리규상 담임목사",
      image: "/Pastor.png",
      imageAlt: "리규상 담임목사",
      verse: [        '"주라 그리하면 너희에게 줄 것이니',
        '곤 후히 되어 누르고 흔들어 넘치도록 하여',
        '너희에게 안겨주리라',
        '너희가 헤아리는 그 헤아림으로',
        '너희도 헤아림을 도로 받을 것이니라"',
      ],
      verseRef: "누가복음 6장 38절",
    },
    {
      id: 2,
      name: "이경숙 심방전도사",
      image: "/Assistant-Pastor.jpg",
      imageAlt: "이경숙 심방전도사",
      verse: [] as string[],
      verseRef: "",
    },
  ]  
 
// 개별 스태프 카드 컴포넌트 - 사진이 회색 박스 밖으로 오버랩되는 레이아웃
function StaffCard({ staff }: { staff: typeof staffData[0] }) {
  return (
    <section className="relative">
      {/* 컨테이너 - 상하 여백으로 사진 오버랩 공간 확보 */}
      <div className="relative py-6 md:py-8">
        {/* 회색 배경 박스 - 전체 너비의 약 50% */}
        <div className="bg-gray-100 w-full md:w-[80%] min-h-[260px] md:min-h-[320px] p-6 md:p-10 flex flex-col justify-start">
          {/* 이름 */}
          <h2 className="text-[22px] md:text-[26px] font-bold text-gray-800 mb-2">
            {staff.name}
          </h2>
          
          {/* 주황색 밑줄 */}
          <div className="w-20 h-1 bg-[#fcaa4c] mb-6" />
          
          {/* 성경 구절 + 참조 (사진과 겹치지 않는 왼쪽 열) */}
          {staff.verse.length > 0 && (
            <div className="w-full md:max-w-[52%]">
              {staff.verse.map((line, idx) => (
                <p key={idx} className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                  {line}
                </p>
              ))}
              {staff.verseRef && (
                <p className="text-[15px] md:text-[17px] text-gray-700 font-medium mt-4 md:text-right">
                  {staff.verseRef}
                </p>
              )}
            </div>
          )}
        </div>

        {/* 사진 - 회색 박스 위로 오버랩 (명시적 높이로 fill 이미지 오류 방지) */}
        <div className="relative w-[352px] max-w-full h-[200px] md:absolute md:right-[5%] md:-top-10 md:w-[42%] md:h-[300px] mt-6 md:mt-0 mx-auto md:mx-0">
          {staff.image ? (
            <Image
              src={staff.image}
              alt={staff.imageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          ) : (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-400">
                <p className="text-lg mb-1">사진 영역</p>
                <p className="text-sm">(이미지 추가 예정)</p>
              </div>
            </div>
          )}
        </div>      </div>
    </section>
  )
}

export default function StaffContent() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col gap-16 md:gap-24">
          {staffData.map((staff) => (
            <StaffCard 
              key={staff.id} 
              staff={staff} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
