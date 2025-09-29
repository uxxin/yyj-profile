import React from "react";

const Navbar = () => {
  const sections = ["home", "projects", "skills", "contact"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "#fff",
        zIndex: 10,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1rem 2rem",
          boxSizing: "border-box",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "3rem",
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
