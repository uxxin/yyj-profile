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
              <h3>{p.title}</h3>
              <p className="duration">{p.duration}</p>
              <p className="description">{p.description}</p>
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
