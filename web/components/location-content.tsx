export default function LocationContent() {
    return (
      <section className="py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column - Address & Info */}
            <div className="flex-1 space-y-8">
              {/* 도로명 주소 */}
              <div>
                <h2 className="text-[24px] font-bold text-black mb-2">
                  도로명 주소
                </h2>
                <p className="text-[18px] text-black">
                  경기도 의정부시 추동로 92번길 29 (11719)
                </p>
              </div>
  
              {/* 지번주소 */}
              <div>
                <h2 className="text-[24px] font-bold text-black mb-2">
                  지번주소
                </h2>
                <p className="text-[18px] text-black">
                  신곡동 112-13
                </p>
              </div>
  
              {/* 오시는 길 */}
              <div>
                <h2 className="text-[24px] font-bold text-black mb-4">
                  오시는 길
                </h2>
                <div className="space-y-3 text-[16px] text-black">
                  <p>
                    <span className="font-semibold">의정부 경전철(ULINE):</span> 새말역에서 도보로 약 10분
                  </p>
                  <p>
                    <span className="font-semibold">의정부 시내에서 오는 버스:</span> 1-1, 11, 72-1, 72-3, 202-1, 206
                  </p>
                  <p className="pl-4">
                    <span className="font-semibold">경기 버스:</span> G6000
                  </p>
                  <p className="pl-4 text-black">
                    (의정부 우체국에서 하차 후 도보로 약 3분)
                  </p>
                </div>
  
                <div className="mt-6 space-y-2 text-[16px]">
                  <p className="text-black">
                    <span className="font-semibold">자가용:</span> 의정부 우체국 약 100m 위쪽에 위치해 있습니다.
                  </p>
                  <p className="text-black pl-12">
                    주차장이 있어 주차도 가능합니다.
                  </p>
                </div>
              </div>
  
              {/* 문의전화 */}
              <div>
                <h2 className="text-[24px] font-bold text-black mb-2">
                  문의전화
                </h2>
                <p className="text-[18px] text-black">
                  T. 031-877-4333
                </p>
              </div>
            </div>
  
            {/* Right Column - Map Placeholder */}
            <div className="flex-1 min-h-[400px] lg:min-h-[500px]">
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center text-black">
                  <p className="text-lg mb-2">네이버 지도</p>
                  <p className="text-sm">API 연동 예정</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }