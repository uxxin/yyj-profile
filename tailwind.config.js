/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // src 하위 모든 JS/TS/JSX/TSX 파일 스캔
  ],
  darkMode: "class", // 다크모드 사용
  theme: {
    extend: {}, // 필요 시 커스텀 스타일 확장
  },
  plugins: [], // 필요 시 플러그인 추가
};
