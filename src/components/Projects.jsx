import { useState } from "react";
import projectsData from "./projectsData";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((p) => (
          <div
            key={p.id}
            className="project-card"
            onClick={() => setSelectedProject(p)}
          >
            <div className="project-card-image-wrapper">
              <img src={p.img} alt={p.title} className="project-card-image" />
            </div>
            <div className="project-card-content">
              {/* 상단 텍스트 영역을 div로 한번 감싸줍니다. */}
              <div>
                <h3>{p.title}</h3>
                <p className="duration">{p.duration}</p>
                <p className="description">{p.description}</p>
              </div>

              {/* ▼▼▼▼▼ 이 부분이 새로 추가되었습니다! ▼▼▼▼▼ */}
              <div className="project-card-icons">
                {p.icons.map((icon) => (
                  <span key={icon} className="project-card-icon">
                    {icon}
                  </span>
                ))}
              </div>
              {/* ▲▲▲▲▲ 여기까지 추가 ▲▲▲▲▲ */}
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
