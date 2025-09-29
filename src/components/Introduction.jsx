import profileImage from "../assets/images/profile.webp";
import contactsData from "./contactData";
import "./Introduction.css";

const Introduction = () => {
  return (
    <section id="home" className="introduction-section">
      <div className="introduction-text">
        <h1>
          <span className="highlight">
            하나의 질문에서
            <br />
            다음 스텝으로 나아가는 개발자,
          </span>{" "}
          <br />
          양유진입니다.
        </h1>
        <p className="intro-detail">
          <br />
          저에게 호기심은 <strong>질문</strong>에서 시작해{" "}
          <strong>'실행'</strong>으로 증명해내는 과정입니다.
          <br />
          <br />
          하나의 문을 열면 다음 문 너머의 세상이 궁금해지듯,
          <br />
          사용자에게 서비스가 닿기까지의 전 과정을 아우르는 개발자가 되고자
          <br />
          디자인부터 프론트엔드, 백엔드까지 경험하며 시야를 넓혀가고 있습니다.
        </p>
      </div>
      <div className="introduction-image-container">
        <img src={profileImage} alt="profile" className="introduction-image" />
        <div className="intro-contact-icons">
          {contactsData.map((contact) => (
            <a
              key={contact.link}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contact.text}
            >
              <img src={contact.icon} alt={contact.text} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
