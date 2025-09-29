import checkmoImg from "../assets/images/checkmo1.png";
import readmeImg from "../assets/images/readme!.webp";
import umcImg from "../assets/images/umcnetworking.webp";
import graduateImg from "../assets/images/graduate.png";

import thesisPdf from "/public/graduation-thesis.pdf?url";

const projectsData = [
  {
    id: 1,
    title: "다양한 영상 열화를 개선하는 딥러닝 미니 파운데이션 모델 개발",
    duration: "2024.07 ~ 2024.12",
    description:
      "4가지 영상 열화를 동시에 복원하는 Transformer 기반 파운데이션 모델 연구",
    details: `
트랜스포머 기반 모델을 확장하여, 영상의 노이즈 제거(Denoising), 블러 제거(Deblurring), 앤티에일리어싱(Anti-aliasing), 인페인팅(Inpainting)을 **단일 모델로 동시에 수행하는 파운데이션 모델**을 개발했습니다. 각 열화에 특화된 데이터셋으로 개별 파인튜닝을 진행하고 성능을 비교 분석하며, 다중 복원 모델의 실용적 가능성을 탐구했습니다.

**🏆 주요 성과**
- 정보통신종합설계 우수설계상

**담당 역할**
- **딥러닝 모델 설계 및 개선:** 이미지 전역의 복잡한 패턴 학습에 강점이 있는 Transformer 아키텍처를 분석하여, 확장성이 뛰어난 Restormer를 베이스 모델로 선정했습니다. 이를 기반으로 Denoising, Deblurring 등 4가지 열화 유형에 모두 대응할 수 있도록 모델 구조를 개선하는 연구를 주도했습니다.
- **데이터 파이프라인 설계 및 구축:** 모델의 강건한 성능 확보를 위해, 각 열화에 최적화된 데이터 파이프라인을 설계했습니다. GOPRO와 같은 현실적인 데이터셋을 활용함과 동시에, CelebA, ImageNet 등의 표준 데이터셋에 직접 노이즈, 블러, 스크래치 등의 열화를 적용하여 총 4,700여 장의 학습 및 검증 데이터를 능동적으로 구축했습니다.

**주요 경험 및 배운 점**
- **원격 서버 환경 구축:** 팀의 GPU 장비 부족 문제를 해결하기 위해 연구실 서버를 활용했습니다. SSH로 원격 서버에 접속하고 CLI 명령어로 작업을 처리하는 과정에 익숙해졌으며, Conda로 표준화된 가상환경을 구축하여 팀의 협업 효율을 높였습니다.
- **대규모 데이터셋 관리:** 모델 학습에 필요한 수만 장의 데이터를 수집, 전처리, 증강(Augmentation)하는 데이터 파이프라인의 전체 과정을 경험했습니다.
- **인프라에 대한 이해:** 단순히 애플리케이션 코드를 작성하는 것을 넘어, 그 코드가 실행되는 서버와 인프라 환경에 대한 실질적인 이해와 운영 능력을 습득하며 시야를 넓힐 수 있었습니다.
`,
    img: graduateImg,
    icons: ["Python", "PyTorch", "Linux", "AI"],
    teamSize: 2,
    contribution: "2인 프로젝트로, 전 과정에 동등하게 기여 (50%)",
    link: {
      url: thesisPdf,
      text: "논문 바로가기",
    },
  },
  {
    id: 2,
    title: "책모",
    duration: "2025.06 ~ 2025.08",
    description:
      "독서모임의 시작부터 관리, 기록까지 모든 과정을 함께하는 올인원(All-in-one) 플랫폼",
    details: `
기존 독서 모임이 카카오톡, 노션 등 여러 툴에 걸쳐 파편적으로 운영되는 문제점에 주목했습니다. '책모'는 이러한 불편함을 해결하기 위해, 도서 검색 기능으로 모임 준비를 돕고, 발제 작성부터 조별 토론까지 효율적인 관리 기능으로 원활한 진행을 지원하며, 독후 활동 기록 공간으로 모임의 경험을 보존하는 등 독서모임의 전 과정을 **하나의 플랫폼**에 담아냈습니다.

**🏆 주요 성과**
- IT 연합 동아리 UMC 데모데이 우수상

**담당 역할**
- **프론트엔드 개발 총괄:**  Vite 기반의 초기 환경 설정부터 CI/CD 파이프라인 구축까지 개발 인프라를 설계하는 동시에, TypeScript를 기반으로 도서 검색, 모임 관리 등 핵심 기능의 컴포넌트를 직접 개발하며 프로젝트를 이끌었습니다.

**주요 경험 및 배운 점**
- **프로젝트 환경 설정 및 배포 자동화:** Vite 기반의 초기 개발 환경 설정과 코드 컨벤션(ESLint, Prettier) 도입을 주도했습니다. 또한, GitHub Actions를 활용한 CI/CD 파이프라인을 구축하여 main 브랜치 push 시 자동으로 빌드 및 배포가 이루어지도록 개발 프로세스를 효율화했습니다.
- **백엔드 협업 효율화 (DTO 도입):** 프로젝트 초기, 구두로 API를 공유하며 발생했던 데이터 형식 불일치 문제를 해결하기 위해 DTO(Data Transfer Object) 도입을 제안하고 설계했습니다. 프론트엔드와 백엔드 간의 요청/응답 데이터 구조를 명확히 정의함으로써, 불필요한 소통 비용을 줄이고 안정적인 API 통신 환경을 구축했습니다.
- **외부 API 연동 전략 수립 및 구현:** 여러 도서 DB API(카카오, 네이버 등)를 비교 분석한 결과, 서비스의 핵심인 '풍부한 도서 정보' 제공에 가장 적합한 알라딘 Open API를 최종 선택했습니다. 공식 문서를 기반으로 API Key를 발급받고, 요청 속도 제한(Rate Limiting)을 준수하기 위해 검색어 입력 시 디바운싱(Debouncing)을 적용하고 한 번 가져온 데이터는 캐싱하여 불필요한 API 호출을 최소화하는 비동기 통신 모듈을 설계했습니다. 이를 통해 \`async/await\`를 활용한 API 호출부터 데이터 가공까지의 전 과정을 경험하며 실무적인 외부 서비스 연동 능력을 길렀습니다.
- **기술 공유 및 동료 성장 기여:** 경험이 적은 팀원들을 위해 페어 프로그래밍과 코드 리뷰를 주도하며 React의 핵심 개념과 올바른 컴포넌트 설계 방법에 대한 지식을 적극적으로 공유했습니다. 이 과정을 통해 팀의 전반적인 기술 수준을 높였을 뿐만 아니라, 제 자신의 기술적 이해도 또한 한층 더 깊어지는 계기가 되었습니다.
`,
    img: checkmoImg,
    icons: ["React", "TypeScript", "Aladin API", "GitHub Actions"],
    teamSize: 11,
    contribution: "프론트엔드 리드 및 개발 (총 5인)",
    link: {
      url: "https://github.com/uxxin/CHECKMO-FE",
      text: "GitHub 바로가기",
    },
  },
  {
    id: 3,
    title: "Read.Me!",
    duration: "2024.06 ~ 2024.08",
    description:
      "반복적인 공지 업무를 자동화하여 동아리 운영진의 효율을 높여주는 서비스",
    details: `
Discord, Slack 등 여러 채널에 흩어진 공지를 한 번에 취합하고, 읽음 여부를 체크하여 구성원들의 참여도를 높이는 공지 확인 도구를 개발했습니다.

**담당 역할**
- React와 JavaScript를 활용한 프론트엔드 개발

**주요 경험 및 배운 점**
- **React 첫 경험:** 컴포넌트 기반 개발 방식과 SPA(Single Page Application)의 개념을 처음으로 체득했습니다.
- **첫 API 연동 경험:** 백엔드 서버와 통신하여 데이터를 주고받고, 비동기 처리를 통해 화면에 동적으로 정보를 렌더링하는 방법을 학습했습니다.
- **성장의 발판:** 기능을 구현하는 데 급급하여 '왜 이렇게 동작하는가?'에 대한 깊은 이해가 부족했음을 깨달았습니다. 이 경험은 기술의 근본 원리를 파고들어야겠다는 다짐과 함께, TypeScript 학습의 강력한 동기가 되었습니다.
`,
    img: readmeImg,
    icons: ["React", "JavaScript", "Styled-Components"],
    teamSize: 11,
    contribution: "프론트엔드 팀 개발 (4인 중 1인)",
    link: {
      url: "https://github.com/uxxin/README-FE",
      text: "GitHub 바로가기",
    },
  },
  {
    id: 4,
    title: "UMC Networking",
    duration: "2023.12 ~ 2024.02",
    description: "IT 연합 동아리 회원 간의 네트워킹과 정보 공유를 위한 플랫폼",
    details: `
동아리 회원들의 프로젝트와 스터디 참여 이력을 관리하고, 관심 기술 스택에 따라 자유롭게 소통할 수 있는 네트워킹 서비스를 기획하고 디자인했습니다.

**🏆 주요 성과**
- IT 연합 동아리 UMC 데모데이 대상

**담당 역할**
- Figma를 활용한 UI/UX 기획 및 디자인

**주요 경험 및 배운 점**
- **사용자 중심 설계 (UX):** 동아리 회원들의 불편함을 인터뷰하고, 이를 바탕으로 사용자의 입장에서 가장 편리한 화면 흐름(User Flow)과 와이어프레임을 설계했습니다.
- **개발자와의 협업:** 디자인 시안을 개발자에게 효과적으로 전달하기 위한 방법을 고민하며, 개발 지식의 필요성을 절감했습니다.
- **새로운 도전의 시작:** '내가 직접 이 디자인을 구현해보고 싶다'는 열망을 느끼고, 프론트엔드 개발자의 길을 진지하게 고민하게 된 계기가 된 프로젝트입니다.
`,
    img: umcImg,
    icons: ["Figma", "UI/UX Design"],
    teamSize: 16,
    contribution: "웹 파트 UI/UX 디자인 총괄 (100%)",
    link: {
      url: "https://www.figma.com/design/hLtUacJAaOXAyPVQGsJjiT/umc-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9-%EC%84%9C%EB%B9%84%EC%8A%A4?node-id=0-1&t=Can6kiiadTuLyZHD-1",
      text: "Figma 바로가기",
    },
  },
];

export default projectsData;
