import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "포커스 스터디카페 | 집중이 필요한 순간",
  description: "24시간 운영, 1인실·그룹실·회의실 완비. 고속 와이파이, 무료 음료. 건대입구역 1분.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>{children}</body>
    </html>
  );
}
