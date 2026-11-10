import checkmoImg from "../assets/images/checkmo1.png";
import readmeImg from "../assets/images/readme!.webp";
import umcImg from "../assets/images/umcnetworking.webp";
import graphqlImg from "../assets/images/graphQL.png";
import graduateImg from "../assets/images/graduate.png";
import knowhowImg from "../assets/images/knowhow.png";

import thesisPdf from "/public/graduation-thesis.pdf?url";

const projectsData = [
  {
    id: 6,
    title: "KNOWWHOHOW (노후하우)",
    duration: "2025.10 ~ 2025.12",
    description:
      "금융 소외 계층(시니어)을 위한 자산 관리, 맞춤형 일자리 및 디지털 상속·포용 금융 플랫폼",
    details: `
은퇴를 앞두거나 은퇴한 시니어 사용자가 복잡한 금융 시스템에서 소외되지 않도록 돕는 **올인원 자산 관리 및 노후 대비 솔루션**입니다. 마이데이터 연동 기반 자산 진단, AI 금융 상품 추천 챗봇(RAG 기반), 법정상속분/유류분 비교 시뮬레이션 및 디지털 영상 편지, 위치 기반 시니어 맞춤 일자리 추천 기능을 제공합니다.

**담당 역할 (UI/UX Design, Front-end, Back-end)**
- **모바일 접근성 지침(MA 2.0) 기반 UI/UX 디자인 시스템 구축:** 고령층 사용자의 특성을 고려하여 가독성을 높인 타이포그래피, 명도 대비 가이드라인 준수, 충분한 터치 영역(컨트롤 크기/간격)을 반영한 Figma 디자인 시스템을 설계하고 PWA 반응형 컴포넌트로 체계화했습니다.
- **위치 기반 시니어 일자리 연동 및 Redis 3계층 캐싱 (FE & BE):** GeoCoding 및 카카오맵 API로 실시간 위치 기반(서울시 마포구 등) 및 고용 형태별 일자리 조회 로직을 개발했습니다. 공공데이터포털 노인 구인 정보 Open API 호출 시 **최대 10초 이상의 응답 지연 및 상세 데이터 누락 문제**를 해결하기 위해 목적별 **Redis 캐싱 전략(TTL 10분/1시간/24시간)**을 설계하여 API 응답 속도와 데이터 완전성을 획기적으로 개선했습니다.
- **AWS S3 Presigned URL & Multipart Upload 기반 영상 편지 시스템 (FE & BE):** 대용량 영상 파일 업로드 시 발생할 수 있는 서버 I/O 부하와 메모리 병목을 방지하기 위해 **AWS S3 Presigned URL 및 Multipart Upload** 알고리즘을 구축했습니다. 클라이언트에서 S3로 직접 분할 업로드하는 구조와 진행률(Progress Bar) UI를 구현했습니다.
- **Google SMTP & 일회성 접근 토큰 기반 비동기 영상 편지 예약 발송 (BE):** 수혜자에게 유언 형태의 영상을 안전하게 전달하기 위해 **Google SMTP** 연동 자동 발송 로직을 구축했습니다. 보안 강화를 위해 일회성 인증 토큰(Access Token) 검증 로직과 S3 버킷 CORS 정책(단일 출처 허용)을 적용하여 보안성을 극대화했습니다.

**주요 성과 및 배운 점**
- **외부 API 병목 해결 및 시스템 안정성 확보:** 응답 지연이 심한 공공 API에 Redis 캐싱 레이어를 적용하여 사용자 체감 응답 속도를 크게 향상시키고 백엔드 서버 부하를 완화했습니다.
- **대용량 미디어 파일 처리 최적화:** S3 Multipart Upload와 Presigned URL을 통합하여 백엔드 서버 부담을 제로화하는 파일 저장소 최적화 노하우를 체득했습니다.
- **시니어 친화적 웹 접근성 준수:** 모바일 애플리케이션 접근성 지침(MA 2.0)을 적용하며 유저 중심 인터페이스 디자인과 사용성 최적화의 중요성을 체득했습니다.
`,
    img: knowhowImg,
    icons: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Java",
      "Redis",
      "AWS S3",
      "MySQL",
      "Figma",
    ],
    teamSize: 5,
    contribution:
      "UI/UX 디자인 전반, 프론트엔드 핵심 UI 개발, 외부 API 캐싱(Redis) 및 파일 업로드/발송 백엔드 개발",
    link: {
      url: "https://github.com/내계정/KNOWWHOHOW",
      text: "GitHub 바로가기",
    },
  },
  {
    id: 1,
    title: "다양한 영상 열화를 개선하는 딥러닝 미니 파운데이션 모델 개발",
    duration: "2024.07 ~ 2024.12",
    description:
      "4가지 영상 열화(노이즈, 블러, 계단현상, 손상)를 단일 모델로 동시 복원하는 Transformer 기반 파운데이션 모델 연구",
    details: `
트랜스포머 기반의 Restormer를 베이스로 노이즈 제거(Denoising), 블러 제거(Deblurring), 앤티에일리어싱(Anti-aliasing), 인페인팅(Inpainting)을 통합 처리하는 파운데이션 모델을 설계했습니다. 각 열화에 특화된 데이터셋으로 개별 파인튜닝을 진행하고 성능을 비교 분석하며, 다중 복원 모델의 실용적 가능성을 탐구했습니다.

**🏆 주요 성과**
- 정보통신종합설계 우수설계상

**담당 역할 및 기술적 문제 해결**
- **Inpainting 특화 Mask-aware Attention 구조 설계:** 인페인팅 작업 시 손상된 영역에서 불필요한 정보를 학습하지 않도록, 마스크 정보를 입력받아 유효 영역에만 집중하는 Mask-aware Attention Mechanism을 별도로 구현하여 아키텍처를 개선했습니다.
- **멀티태스크 교차 학습(Cross-training) 전략 도입:** 특정 태스크에 과적합되거나 태스크 간 간섭이 발생하는 문제를 해결하기 위해, 250 Iteration 단위로 학습 태스크를 교대하는 교차 학습 전략을 설계하여 총 50,000 Iteration까지 균형 있게 학습을 진행했습니다.
- **대규모 맞춤형 데이터 파이프라인 구축:** SIDD, GOPRO, REDS 등 기존 데이터셋뿐만 아니라 CelebA, BSD500, ImageNet 이미지에 Gaussian/Poisson/Salt&Pepper 노이즈, 모션/가우시안 블러, 랜덤 스크래치 마스크(2~6px)를 직접 적용했습니다. 이를 통해 총 4,700장(Train 3,000 / Validation 1,700)의 고품질 커스텀 데이터셋을 구축했습니다.
- **성능 최적화 및 정량적/정성적 지표 분석:** 학습 데이터 크기(10~80)와 Iteration 횟수(100~800)를 변인으로 두고 개별 파인튜닝을 수행했습니다[cite: 116, 117]. Error Map 시각화와 PSNR/LPIPS 지표 분석을 통해 Denoising(최고 38.25dB) 및 Inpainting(최고 35.28dB) 등 각 태스크별 최적의 학습 범위를 도출하여 복원 품질을 극대화했습니다.

**주요 경험 및 배운 점**
- **원격 서버 환경 및 인프라 구축:** NVIDIA TITAN RTX GPU와 CUDA 환경에서 SSH 기반 원격 연구실 서버를 세팅하고, Conda 가상환경으로 팀 협업 인프라를 표준화했습니다.
- **연구 주도 및 검증 역량:** 단순히 기존 모델을 사용하는 것을 넘어, 아키텍처(Attention) 내부를 직접 수정하고 데이터 파이프라인부터 실험 변인 통제, 최종 지표(PSNR/LPIPS) 평가까지 AI 연구 개발의 A-to-Z를 주도했습니다.
`,
    img: graduateImg,
    icons: ["Python", "PyTorch", "CUDA", "Vision Transformer", "Linux", "AI"],
    teamSize: 2,
    contribution:
      "딥러닝 모델 아키텍처(Mask-aware) 수정 설계, 커스텀 데이터 파이프라인 구축, 교차 학습 전략 수립 및 파인튜닝 실험 주도 (50%)",
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
- **프론트엔드 개발 총괄:** Vite 기반의 초기 환경 설정부터 CI/CD 파이프라인 구축까지 개발 인프라를 설계하는 동시에, TypeScript를 기반으로 도서 검색, 모임 관리 등 핵심 기능의 컴포넌트를 직접 개발하며 프로젝트를 이끌었습니다.

**주요 경험 및 배운 점**
- **프로젝트 환경 설정 및 배포 자동화:** Vite 기반의 초기 개발 환경 설정과 코드 컨벤션(ESLint, Prettier) 도입을 주도했습니다. 또한, GitHub Actions를 활용한 CI/CD 파이프라인을 구축하여 main 브랜치 push 시 자동으로 빌드 및 배포가 이루어지도록 개발 프로세스를 효율화했습니다.
- **백엔드 협업 효율화 (DTO 도입):** 프로젝트 초기, 구두로 API를 공유하며 발생했던 데이터 형식 불일치 문제를 해결하기 위해 DTO(Data Transfer Object) 도입을 제안하고 설계했습니다. 프론트엔드와 백엔드 간의 요청/응답 데이터 구조를 명확히 정의함으로써, 불필요한 소통 비용을 줄이고 안정적인 API 통신 환경을 구축했습니다.
- **외부 API 연동 및 성능 최적화:** 도서 검색 기능의 안정성과 성능을 확보하기 위해 알라딘 Open API 통신 모듈을 설계했습니다. API의 요청 속도 제한(Rate Limiting)을 준수하고 불필요한 네트워크 트래픽을 줄이기 위해, 검색어 입력 시에는 디바운싱(Debouncing)을, 동일한 검색 결과에 대해서는 캐싱(Caching)을 적용하여 API 호출 횟수를 최소화하고 사용자 경험을 개선했습니다.
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
  {
    id: 5,
    title: "GraphQL을 활용한 API 서버 설계 및 구현",
    duration: "2025.09 ~ 2025.09",
    description:
      "프론트엔드 개발 경험에서 느낀 REST API의 비효율(Under-fetching 등)을 해결하기 위해 GraphQL API 서버를 직접 설계하고 구현한 개인 프로젝트",
    details: `
프론트엔드 프로젝트를 진행하며 겪었던 복잡한 End-point 관리 문제와 여러 번의 API 호출이 필요한 Under-fetching 문제를 해결하고자 API 서버 구현 기술을 학습했습니다. REST API의 대안으로 제시되는 GraphQL에 대한 깊은 이해를 목표로, 직접 스키마를 설계하고 Query, Mutation, Subscription을 포함한 실시간 도서 리뷰 시스템을 구현하며 그 과정과 결과를 부트캠프 기술 세미나에서 발표했습니다.

**🏆 주요 성과**
- 부트캠프 백엔드 기술 세미나에서 'GraphQL'을 주제로 발표
- Query, Mutation, Subscription을 포함한 GraphQL의 핵심 기능 구현 및 동작 검증 완료
- REST API 대비 GraphQL의 장단점을 실질적인 구현 경험을 통해 체득

**담당 역할 (1인 프로젝트)**
- **GraphQL 스키마 설계 및 서버 구축:** 도서 리뷰 시스템에 필요한 데이터 모델을 바탕으로 GraphQL 스키마(SDL)를 정의했습니다. Spring for GraphQL 의존성을 활용하여 스키마와 매핑되는 Resolver를 구현하고, 데이터베이스(MySQL)와 연동하여 기본적인 CRUD API를 완성했습니다.
- **실시간 통신(Subscription) 구현:** WebSocket 기반으로 실시간 리뷰 등록 알림 기능을 구현했습니다. 이를 통해 GraphQL Subscription의 동작 원리를 이해하고, 실시간 웹 애플리케이션에서의 활용 가능성을 탐구했습니다.
- **기술 세미나 발표:** GraphQL을 선택하게 된 배경, 핵심 개념, 구현 과정, 그리고 REST API와의 비교를 중심으로 세미나 발표 자료를 작성하고 시연과 함께 발표를 진행했습니다.

**주요 경험 및 배운 점**
- **API 설계 관점의 확장:** API를 사용하는 프론트엔드 개발자의 입장에서 벗어나, 서버에서 API를 어떻게 효율적으로 설계하고 제공해야 하는지에 대한 시야를 넓혔습니다.
- **선언적 데이터 페칭의 이해:** 클라이언트가 필요한 데이터의 구조를 직접 정의하고 요청할 수 있는 GraphQL의 특징을 구현하며, 네트워크 통신 비효율을 개선하는 원리를 체득했습니다.
- **GraphQL 생태계 및 주요 개념 습득:** Schema Definition Language(SDL), Resolver, N+1 문제 등 GraphQL 서버 개발에 필요한 핵심 개념과 기술 스택(Spring for GraphQL, JPA 등)에 대한 이해도를 높였습니다.
`,
    img: graphqlImg,
    icons: ["Java", "Spring Boot", "GraphQL", "JPA", "MySQL", "WebSocket"],
    teamSize: 1,
    contribution: "1인 프로젝트 (100%)",
    link: {
      url: "https://github.com/uxxin/woori_workspace/tree/master/be-seminar/GraphQL/src/main/java/dev/syntax",
      text: "GitHub 바로가기",
    },
  },
];

export default projectsData;
