export default function Home() {
  return (
    <>
      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="text-lg font-black" style={{ color: "var(--navy)" }}>
            FOCUS<span style={{ color: "var(--blue)" }}>.</span>
          </a>
          <div className="hidden sm:flex gap-6 text-sm font-medium text-gray-500">
            <a href="#seats" className="hover:text-gray-900">좌석 안내</a>
            <a href="#pricing" className="hover:text-gray-900">요금</a>
            <a href="#facility" className="hover:text-gray-900">시설</a>
            <a href="#location" className="hover:text-gray-900">오시는 길</a>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "var(--sky)", color: "var(--blue)" }}>
            24시간 운영
          </span>
        </div>
      </nav>

      {/* 히어로 */}
      <section
        className="relative h-screen flex items-center justify-center text-white text-center"
        style={{
          background: "linear-gradient(rgba(15,23,42,0.6), rgba(15,23,42,0.7)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80') center/cover",
        }}
      >
        <div className="px-4">
          <div className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-6" style={{ background: "var(--blue)" }}>
            건대입구역 1번 출구 도보 1분
          </div>
          <h1 className="text-4xl sm:text-6xl font-black mb-4">집중이 필요한 순간</h1>
          <p className="text-lg font-light mb-8 opacity-80">24시간 스터디카페 FOCUS</p>
          <a href="#pricing" className="btn-blue inline-block">요금 확인하기</a>
        </div>
      </section>

      {/* 좌석 안내 */}
      <section id="seats" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">좌석 안내</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "오픈석",
                desc: "넓은 책상과 개인 조명, 콘센트 완비. 자유롭게 이용하는 기본 좌석.",
                count: "48석",
                img: "photo-1497366811353-6870744d04b2",
              },
              {
                title: "1인 집중실",
                desc: "완전 독립된 개인 공간. 방음 처리로 최고의 집중 환경.",
                count: "12실",
                img: "photo-1527192491265-7e15c55b1ed2",
              },
              {
                title: "그룹실 / 회의실",
                desc: "4~8인용 그룹 스터디·회의 공간. 화이트보드, 모니터 완비.",
                count: "4실",
                img: "photo-1517502884422-41eaead166d4",
              },
            ].map((seat) => (
              <div key={seat.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div
                  className="h-48 bg-gray-200"
                  style={{ background: `url('https://images.unsplash.com/${seat.img}?w=600&q=80') center/cover` }}
                />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{seat.title}</h3>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "var(--sky)", color: "var(--blue)" }}>
                      {seat.count}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{seat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 요금 */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">이용 요금</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 오픈석 */}
            <div className="p-6 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-lg mb-4">오픈석</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["1시간", "2,000원"],
                  ["3시간", "5,000원"],
                  ["6시간", "8,000원"],
                  ["12시간", "12,000원"],
                  ["종일권 (24시간)", "15,000원"],
                  ["정기권 (30일)", "150,000원"],
                ].map(([time, price]) => (
                  <li key={time} className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-700">{time}</span>
                    <span className="font-bold" style={{ color: "var(--blue)" }}>{price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 1인실 / 그룹실 */}
            <div className="p-6 rounded-2xl border-2" style={{ borderColor: "var(--blue)" }}>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-lg">1인 집중실</h3>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-500 text-white">BEST</span>
              </div>
              <ul className="space-y-3 text-sm mb-6">
                {[
                  ["1시간", "3,000원"],
                  ["3시간", "7,500원"],
                  ["6시간", "12,000원"],
                  ["종일권 (24시간)", "20,000원"],
                  ["정기권 (30일)", "200,000원"],
                ].map(([time, price]) => (
                  <li key={time} className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-700">{time}</span>
                    <span className="font-bold" style={{ color: "var(--blue)" }}>{price}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-lg mb-3">그룹실 / 회의실</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["1시간 (4인 기준)", "8,000원"],
                  ["3시간 (4인 기준)", "20,000원"],
                ].map(([time, price]) => (
                  <li key={time} className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-700">{time}</span>
                    <span className="font-bold" style={{ color: "var(--blue)" }}>{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 시설 */}
      <section id="facility" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">시설 안내</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { icon: "&#128246;", title: "고속 Wi-Fi", desc: "1Gbps" },
              { icon: "&#9749;", title: "무료 음료", desc: "커피·차 무한" },
              { icon: "&#128424;", title: "복합기", desc: "출력·스캔·복사" },
              { icon: "&#128274;", title: "개인 사물함", desc: "무료 제공" },
              { icon: "&#128161;", title: "개인 조명", desc: "밝기 조절" },
              { icon: "&#128268;", title: "콘센트", desc: "좌석별 2구" },
              { icon: "&#127942;", title: "방음 처리", desc: "집중실 전실" },
              { icon: "&#128247;", title: "CCTV", desc: "24시간 보안" },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="text-3xl mb-2" dangerouslySetInnerHTML={{ __html: f.icon }} />
                <h3 className="font-bold text-sm">{f.title}</h3>
                <p className="text-xs text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section id="location" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">오시는 길</h2>
          <div className="rounded-2xl overflow-hidden h-64 bg-gray-200 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163!2d127.07!3d37.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sko!2skr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="포커스 스터디카페 위치"
            />
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p className="font-bold text-gray-800">서울 광진구 아차산로 234, 2층</p>
            <p>건대입구역 1번 출구 도보 1분</p>
            <p>24시간 운영 | 연중무휴</p>
            <p className="mt-4">
              <a href="tel:02-5555-6666" className="font-bold" style={{ color: "var(--blue)" }}>02-5555-6666</a>
            </p>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-8 px-4 text-center text-sm" style={{ background: "var(--dark)" }}>
        <p className="text-white/50">&copy; 2026 포커스 스터디카페 (FOCUS). All rights reserved.</p>
        <p className="text-white/30 mt-1 text-xs">사업자등록번호 456-78-90123</p>
      </footer>
    </>
  );
}
