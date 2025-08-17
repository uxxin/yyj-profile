const Skills = () => {
  const skillsData = [
    { title: "Languages", items: ["JavaScript", "TypeScript", "C++", "Java"] },
    { title: "Frontend", items: ["React", "TailwindCSS"] },
    { title: "Design", items: ["Figma"] },
  ];

  return (
    <section id="skills" style={{ padding: "4rem 2rem", background: "#fff" }}>
      <h2
        style={{ fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}
      >
        Skills
      </h2>
      <div
        style={{
          display: "flex",
          gap: "3rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {skillsData.map((skill) => (
          <div
            key={skill.title}
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: "150px",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              {skill.title}
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              {skill.items.map((item) => (
                <li
                  key={item}
                  style={{
                    background: "#e0e7ff",
                    padding: "0.3rem 0.6rem",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    textAlign: "center",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
