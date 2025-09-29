import React from "react";
import "./Projects.css";

const ProjectModal = ({ project, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!project) return null;

  // 헬퍼 함수: 문자열 내부의 **...** 부분을 <strong> 태그로 변환
  const parseInlineBold = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g).filter(Boolean);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.substring(2, part.length - 2)}</strong>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );
  };

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
        const match = content.match(/^\*\*(.*?):\*\*(.*)/);

        if (match) {
          const title = match[1];
          const description = match[2];
          listItems.push(
            <li key={index}>
              <strong>{title}:</strong>
              {/* 설명 부분에도 헬퍼 함수 적용 */}
              {parseInlineBold(description)}
            </li>
          );
        } else {
          // 일반 리스트 항목에도 헬퍼 함수 적용
          listItems.push(<li key={index}>{parseInlineBold(content)}</li>);
        }
      } else if (trimmedLine) {
        flushList();
        // 일반 문단에도 헬퍼 함수 적용
        elements.push(
          <p key={index} className="details-paragraph">
            {parseInlineBold(trimmedLine)}
          </p>
        );
      }
    });

    flushList();
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
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {project.link.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
