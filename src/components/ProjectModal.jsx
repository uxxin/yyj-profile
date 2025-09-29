import React from "react";
import "./Projects.css";

const ProjectModal = ({ project, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!project) return null;

  // details 문자열을 파싱하여 JSX로 변환하는 함수
  const renderDetails = () => {
    if (!project.details || typeof project.details !== "string") {
      return null;
    }

    const lines = project.details.trim().split("\n");
    const elements = [];
    let listItems = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="details-list">
            {listItems}
          </ul>
        );
        listItems = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith("**") && trimmedLine.endsWith("**")) {
        flushList();
        const title = trimmedLine.substring(2, trimmedLine.length - 2);
        elements.push(
          <h4 key={index} className="details-subtitle">
            {title}
          </h4>
        );
      } else if (trimmedLine.startsWith("🏆")) {
        flushList();
        elements.push(
          <h4 key={index} className="details-subtitle achievement">
            {trimmedLine}
          </h4>
        );
      } else if (trimmedLine.startsWith("- ")) {
        const content = trimmedLine.substring(2);
        listItems.push(<li key={index}>{content}</li>);
      } else if (trimmedLine) {
        flushList();
        elements.push(
          <p key={index} className="details-paragraph">
            {trimmedLine}
          </p>
        );
      }
    });

    flushList(); // 마지막에 남은 리스트 아이템 처리
    return elements;
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <img src={project.img} alt={project.title} className="modal-image" />
        <h3>{project.title}</h3>
        <p className="duration">{project.duration}</p>

        <div className="details-container">{renderDetails()}</div>

        <div className="modal-footer">
          <div className="tech-icons-container">
            {project.icons.map((icon) => (
              <span key={icon} className="tech-icon">
                {icon}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            GitHub 바로가기
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
