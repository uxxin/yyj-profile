import React from "react";
import { FaUsers, FaChartPie } from "react-icons/fa";
import "./Projects.css";

const ProjectModal = ({ project, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!project) return null;

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
              {parseInlineBold(description)}
            </li>
          );
        } else {
          listItems.push(<li key={index}>{parseInlineBold(content)}</li>);
        }
      } else if (trimmedLine) {
        flushList();
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

        <div className="modal-metadata">
          <div className="tech-icons-container">
            {project.icons.map((icon) => (
              <span key={icon} className="tech-icon">
                {icon}
              </span>
            ))}
          </div>
          <div className="project-info">
            {project.teamSize && (
              <span className="info-item">
                <FaUsers />
                <strong>인원:</strong> {project.teamSize}명
              </span>
            )}
            {project.contribution && (
              <span className="info-item">
                <FaChartPie />
                <strong>기여도:</strong> {project.contribution}
              </span>
            )}
          </div>
        </div>

        <div className="details-container">{renderDetails()}</div>

        <div className="modal-footer">
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
