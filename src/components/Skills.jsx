import React from "react";
import { FaJava, FaReact, FaFigma } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiCplusplus,
} from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      title: "Languages",
      items: [
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "Java", icon: <FaJava color="#007396" /> },
        { name: "C++", icon: <SiCplusplus color="#00599C" /> },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" /> },
      ],
    },
    {
      title: "Design",
      items: [{ name: "Figma", icon: <FaFigma color="#F24E1E" /> }],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill) => (
          <div key={skill.title} className="skill-card">
            <h3 className="skill-card-title">{skill.title}</h3>
            <ul className="skill-list">
              {skill.items.map((item) => (
                <li key={item.name} className="skill-item">
                  <span className="skill-icon">{item.icon}</span>
                  <span className="skill-name">{item.name}</span>
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
