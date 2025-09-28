import "./Timeline.css";

const Timeline = () => {
  const history = [
    { date: "학력", content: "인하대학교 전자전기공학부 (정보통신공학전공)" },
    {
      date: "2022.6~2022.11",
      content: "대한체육회 스포츠 마케팅 서포터즈 1기",
    },
    { date: "2023.9~2024.2", content: "UMC 5th Design 파트" },
    { date: "2024.3~2024.8", content: "UMC 6th Web 파트" },
    { date: "2025.3~2025.8", content: "UMC 8th Web 파트" },
    { date: "2025.7.~", content: "우리 FISA 클라우드 서비스 개발" },
  ];

  return (
    <section id="timeline" className="timeline-section">
      <h2 className="timeline-title">History</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>

        {history.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="timeline-content">
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-text">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
