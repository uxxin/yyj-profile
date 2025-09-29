import checkmoImg from "../assets/images/checkmo.webp";
import readmeImg from "../assets/images/readme!.webp";
import umcImg from "../assets/images/umcnetworking.webp";
import graduateImg from "../assets/images/graduate.png";

const projectsData = [
  {
    id: 1,
    title: "영상 품질 개선 딥러닝 파운데이션 모델 개발",
    duration: "2024.07 ~ 2024.12",
    description:
      "저조도, 노이즈 등 다양한 영상 품질 저하 요인을 개선하는 딥러닝 모델 연구 (졸업 프로젝트)",
    details: `
기존 딥러닝 모델의 성능을 개선하여, 하나의 모델로 여러 종류의 영상 화질 저하 문제를 동시에 해결하는 파운데이션 모델을 개발하는 연구를 진행했습니다.

**🏆 주요 성과**
- 학부 졸업 프로젝트 우수상 수상

**담당 역할**
- Python 기반 딥러닝 모델 연구 및 데이터셋 구축

**주요 경험 및 배운 점**
- 대규모 데이터셋 구축: 수만 장의 이미지 데이터를 수집하고, 모델 학습에 적합하도록 전처리 및 증강(Augmentation)하는 파이프라인을 구축했습니다.
- 서버 환경 경험: 개인 PC가 아닌, CLI(Command Line Interface) 기반의 원격 Linux 서버에 접속하여 모델을 학습시키고 관리하는 능력을 길렀습니다.
- 인프라에 대한 이해: 웹 개발을 넘어, 서비스의 기반이 되는 서버 인프라와 데이터 처리 과정에 대한 시야를 넓힐 수 있었습니다.
`,
    img: graduateImg,
    icons: ["Python", "PyTorch", "Linux", "AI"],
    github: "https://github.com/yourusername/grad-project", // 실제 GitHub 주소로 변경해주세요.
  },
  {
    id: 2,
    title: "책모",
    duration: "2025.06 ~ 2025.08",
    description: "관심사 기반의 오프라인 독서모임 중개 및 관리 서비스",
    details: `
사용자 맞춤 독서모임을 추천하고, 모임의 출석과 과제를 편리하게 관리하는 웹 서비스를 개발했습니다.

**🏆 주요 성과**
- 교내 개발 동아리 프로젝트 경진대회 대상 수상

**담당 역할**
- React와 TypeScript를 사용한 프론트엔드 개발 총괄

**주요 경험 및 배운 점**
- TypeScript 도입: 정적 타이핑을 통해 런타임 에러를 사전에 방지하며 코드의 안정성과 예측 가능성을 크게 향상시켰습니다.
- 상태 관리 심화: 복잡한 모임 관리 로직을 위해 Recoil을 사용하여 전역 상태를 효율적으로 관리하고, 컴포넌트 간 데이터 흐름을 명확하게 설계했습니다.
- 소프트 스킬: 팀원 간의 심한 갈등 속에서, 기술적 역량만큼이나 명확한 커뮤니케이션과 상호 존중이 프로젝트 성공에 얼마나 중요한지 실감했습니다. 갈등을 중재하고 공동의 목표에 집중하며 프로젝트를 완수한 경험은 가장 값진 자산입니다.
`,
    img: checkmoImg,
    icons: ["React", "TypeScript", "Recoil", "Figma"],
    github: "https://github.com/yourusername/checkmo",
  },
  {
    id: 3,
    title: "ReadMe!",
    duration: "2024.06 ~ 2024.08",
    description:
      "반복적인 공지 업무를 자동화하여 동아리 운영진의 효율을 높여주는 서비스",
    details: `
Discord, Slack 등 여러 채널에 흩어진 공지를 한 번에 취합하고, 읽음 여부를 체크하여 구성원들의 참여도를 높이는 공지 확인 도구를 개발했습니다.

**담당 역할**
- React와 JavaScript를 활용한 프론트엔드 개발

**주요 경험 및 배운 점**
- React 첫 경험: 컴포넌트 기반 개발 방식과 SPA(Single Page Application)의 개념을 처음으로 체득했습니다.
- API 연동: 백엔드 서버와 통신하여 데이터를 주고받고, 비동기 처리를 통해 화면에 동적으로 정보를 렌더링하는 방법을 학습했습니다.
- 성장의 발판: 기능을 구현하는 데 급급하여 '왜 이렇게 동작하는가?'에 대한 깊은 이해가 부족했음을 깨달았습니다. 이 경험은 기술의 근본 원리를 파고들어야겠다는 다짐과 함께, TypeScript 학습의 강력한 동기가 되었습니다.
`,
    img: readmeImg,
    icons: ["React", "JavaScript", "Styled-Components"],
    github: "https://github.com/yourusername/readme",
  },
  {
    id: 4,
    title: "UMC Networking",
    duration: "2023.12 ~ 2024.02",
    description: "IT 연합 동아리 회원 간의 네트워킹과 정보 공유를 위한 플랫폼",
    details: `
동아리 회원들의 프로젝트와 스터디 참여 이력을 관리하고, 관심 기술 스택에 따라 자유롭게 소통할 수 있는 네트워킹 서비스를 기획하고 디자인했습니다.

**🏆 주요 성과**
- UMC AppJam 최우수상 수상

**담당 역할**
- Figma를 활용한 UI/UX 기획 및 디자인

**주요 경험 및 배운 점**
- 사용자 중심 설계: 동아리 회원들의 불편함을 인터뷰하고, 이를 바탕으로 사용자의 입장에서 가장 편리한 화면 흐름(User Flow)과 와이어프레임을 설계했습니다.
- 디자인과 개발의 연결: 디자인 시안을 개발자에게 효과적으로 전달하기 위한 방법을 고민하며, 개발 지식의 필요성을 절감했습니다.
- 새로운 도전의 시작: '내가 직접 이 디자인을 구현해보고 싶다'는 열망을 느끼고, 프론트엔드 개발자의 길을 진지하게 고민하게 된 계기가 된 프로젝트입니다.
`,
    img: umcImg,
    icons: ["Figma", "UI/UX Design"],
    github: "https://github.com/yourusername/umcnetworking",
  },
];

export default projectsData;
