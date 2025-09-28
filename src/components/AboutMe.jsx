import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="aboutme" className="aboutme-section">
      <h2 className="aboutme-title">About Me</h2>
      <p className="aboutme-text">
        저는{" "}
        <strong>디자인과 개발의 경계를 탐험하는 기술 지향형 문제 해결자</strong>
        입니다.
        <br />
        다양한 프로젝트와 협업을 통해 효율적인 서비스 설계, 사용자 경험 개선,
        데이터 시각화 등을 경험했습니다.
        <br />
        끊임없는 호기심으로 새로운 기술을 배우고, 더 나은 솔루션을 만드는 데
        집중합니다.
      </p>
    </section>
  );
};

export default AboutMe;
