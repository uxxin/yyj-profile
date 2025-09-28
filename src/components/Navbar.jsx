const Navbar = () => {
  const sections = ["home", "projects", "skills", "contact"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#fff",
        zIndex: 10,
        padding: "1rem 2rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        boxSizing: "border-box",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "2rem",
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
    </nav>
  );
};

export default Navbar;
