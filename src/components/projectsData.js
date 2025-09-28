import checkmoImg from "../assets/images/checkmo.webp";
import readmeImg from "../assets/images/readme!.webp";
import umcImg from "../assets/images/umcnetworking.webp";

const projectsData = [
  {
    id: 1,
    title: "Checkmo",
    duration: "2025.06 ~ 2025.08",
    description: "간단한 한 줄 설명",
    details:
      "Checkmo 프로젝트에 대한 상세 설명. 어떤 기술을 사용했는지, 역할, 성과 등을 작성",
    img: checkmoImg,
    icons: ["React", "TypeScript", "Figma"],
    github: "https://github.com/yourusername/checkmo",
  },
  {
    id: 2,
    title: "ReadMe!",
    duration: "2024.06 ~ 2024.08",
    description: `바쁜 운영진의 부담을 덜어주는 공지 확인 도구,
    READ ME!`,
    details: "ReadMe! 프로젝트 상세 내용",
    img: readmeImg,
    icons: ["React", "TypeScript", "Figma"],
    github: "https://github.com/yourusername/readme",
  },
  {
    id: 3,
    title: "UMC Networking",
    duration: "2023.12 ~ 2024.02",
    description: "간단 설명",
    details: "UMC Networking 프로젝트 상세 내용",
    img: umcImg,
    icons: ["React", "TypeScript", "Figma"],
    github: "https://github.com/yourusername/umcnetworking",
  },
  {
    id: 4,
    title: "다양한 영상열화를 개선하는 딥러닝 파운데이션 모델 개발",
    duration: "2024.07 ~ 2024.12",
    description: "간단 설명",
    details: "졸프 설명",
    img: null,
    icons: ["AI", "Python"],
    github: "https://github.com/yourusername/umcnetworking",
  },
];

export default projectsData;
