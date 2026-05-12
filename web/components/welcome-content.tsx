export default function WelcomeContent() {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-[1100px] mx-auto">
          {/* Bible Verse Quote */}
          <div className="flex items-start justify-center gap-4 mb-2">
            {/* Left Quote Mark */}
            <span className="text-[#fcaa4c] text-[80px] leading-none font-serif select-none">"</span>
            
            <p className="text-center text-[22px] sm:text-[26px] text-gray-700 leading-relaxed font-bold pt-6 max-w-[700px]">
              수고하고 무거운 짐 진 자들아 다 내게로 오라 <br />
              내가 너희를 쉬게 하리라
            </p>
            
            {/* Right Quote Mark */}
            <span className="text-[#fcaa4c] text-[80px] leading-none font-serif select-none">"</span>
          </div>
          
          {/* Bible Reference */}
          <p className="text-center text-[#fcaa4c] text-[18px] mb-16">
            마태복음 11:28
          </p>
  
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Column - Welcome Text */}
            <div className="flex-1">
              {/* Welcome Title with Corner Brackets */}
              <div className="relative mb-8 ml-1">
                {/* Top Left Corner */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-gray-400" />
                {/* Bottom Right Corner */}
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-gray-400" />
                
                <div className="py-6 px-4">
                  <h2 className="text-[28px] sm:text-[32px] font-bold text-gray-800 leading-snug">
                    부활교회 홈페이지에<br />
                    방문해 주신<br />
                    여러분을 환영합니다!
                  </h2>
                </div>
              </div>
  
              {/* Church Introduction Box */}
              <div className="border-l-4 border-[#fcaa4c] pl-6 py-4 bg-white">
                <p className="text-[17px] sm:text-[19px] text-gray-700 leading-relaxed">
                  경기도 의정부시 신곡2동에<br />
                  위치해 있는 부활교회는<br />
                  2007년에 처음 개척하여<br />
                  <span className="text-[#3bb4e5] font-semibold">하나님의 크고 놀라우신 사랑과</span><br />
                  <span className="text-[#3bb4e5] font-semibold">예수님의 십자가의 복음</span>을 전하고<br />
                  지역사회의 이웃들을 사랑으로 섬기는<br />
                  기독교대한감리회 소속의 교회입니다.
                </p>
              </div>
            </div>
  
            {/* Right Column - Church Photo */}
            <div className="flex-1 w-full">
              {/* Placeholder for church building photo */}
              <div className="w-full aspect-[4/5] bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-lg mb-1">교회 건물 사진</p>
                  <p className="text-sm">이미지를 추가해주세요</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }