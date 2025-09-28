import React from "react";
import "./Projects.css";

const ProjectModal = ({ project, onClose }) => {
  // 모달 바깥 영역 클릭 시 닫기
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <img src={project.img} alt={project.title} className="modal-image" />
        <h3>{project.title}</h3>
        <p className="duration">{project.duration}</p>
        <p className="details">{project.details}</p>

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
  );
};

export default ProjectModal;
