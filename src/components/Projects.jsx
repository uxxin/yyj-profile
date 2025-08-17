import { useState } from "react";
import projectsData from "./projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      style={{ padding: "4rem 2rem", background: "#f9f9f9" }}
    >
      <h2>Projects</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projectsData.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelectedProject(p)}
            style={{
              cursor: "pointer",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              src={p.img}
              alt={p.title}
              style={{ width: "100%", height: 150, objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3>{p.title}</h3>
              <p>{p.duration}</p>
              <p style={{ whiteSpace: "pre-line" }}>{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "2rem",
              borderRadius: "8px",
              maxWidth: 500,
              width: "100%",
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{ position: "absolute", top: 10, right: 10 }}
            >
              ✕
            </button>
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                marginBottom: "1rem",
              }}
            />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.duration}</p>
            <p>{selectedProject.details}</p>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                margin: "1rem 0",
              }}
            >
              {selectedProject.icons.map((icon) => (
                <span
                  key={icon}
                  style={{
                    background: "#eee",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                  }}
                >
                  {icon}
                </span>
              ))}
            </div>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#007bff",
                color: "#fff",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
              }}
            >
              GitHub 바로가기
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
