import Image from "next/image"

export default function AboutContent() {
    const values = [
      { number: 1, text: "꿈이 있는 긍정적인 신앙" },
      { number: 2, text: "어린아이 같은 순수한 기도" },
      { number: 3, text: "고난을 극복하는 불굴의 의지" },
      { number: 4, text: "성령의 결정적인 체험" },
    ]
  
    // 그라데이션 색상 (파랑 -> 초록)
    const getGradient = (index: number) => {
      const gradients = [
        "from-[#4a9fd4] to-[#5bb5e0]", // 파란색
        "from-[#5bb5a0] to-[#6bc5a8]", // 청록색
        "from-[#7cc478] to-[#8cd488]", // 연두색
        "from-[#9cd46a] to-[#aae47a]", // 초록색
      ]
      return gradients[index] || gradients[0]
    }
  
    return (
      <div className="bg-white">
        {/* 표어 섹션 */}
        <section className="py-8 px-4">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* 왼쪽: 표어 텍스트 */}
              <div className="md:w-[280px] ml-3 flex-shrink-0">
                <div className="border-t-4 border-[#fcaa4c] w-16 mb-4" />
                <p className="text-[18px] text-gray-700 mb-2">2026년도 부활교회 표어</p>
                <h2 className="text-[28px] md:text-[28px] font-bold text-[#fcaa4c] leading-tight">
                  영광이 더욱 충만한 교회
                </h2>
                <p className="text-[20px] md:text-[24px] font-bold text-[#fcaa4c] mt-1">
                  학 2:7
                </p>
              </div>
  
              {/* 오른쪽: 표어 이미지 */}
              <div className="w-full flex justify-center md:justify-end md:flex-1">
                {/* 표어 이미지 표시 영역(최대): 500px(가로) x 350px(세로)
                    - 모바일/작은 화면에서는 가로가 화면폭에 맞춰 더 작아질 수 있어요.
                    - fill + object-cover라서 영역을 꽉 채우되 가장자리가 일부 잘릴 수 있어요. */}
                <div className="relative w-full max-w-[500px] h-[350px] rounded-lg overflow-hidden">
                  <Image
                    src="/표어.png"
                    alt="2026년도 부활교회 표어"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* 네가지 영적가치 섹션 */}
        <section className="py-12 px-4">
          <div className="max-w-[900px] mx-auto">
            {/* 섹션 제목 */}
            <h2 className="text-[22px] md:text-[26px] font-bold text-gray-800 mb-2">
              부활교회 성도의 네가지 영적가치
            </h2>
            <div className="w-full h-px bg-gray-300 mb-10" />
  
            {/* 가치 리스트 */}
            <div className="flex flex-col gap-4">
              {values.map((value, index) => (
                <div key={value.number} className="flex items-center">
                  {/* 번호 원 */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-[24px] md:text-[28px] font-bold text-gray-700">
                      {value.number}
                    </span>
                  </div>
  
                  {/* 그라데이션 바 */}
                  <div 
                    className={`flex-1 h-12 md:h-14 bg-gradient-to-r ${getGradient(index)} -ml-7 rounded-r-full flex items-center pl-10 md:pl-12`}
                  >
                    <span className="text-[16px] md:text-[20px] font-bold text-white">
                      {value.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }