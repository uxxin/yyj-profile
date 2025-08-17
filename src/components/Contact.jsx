const Contact = () => {
  const contacts = [
    { icon: "📧", text: "Email: yourmail@example.com" },
    { icon: "💻", text: "GitHub: github.com/username" },
    { icon: "📝", text: "Blog: blog.example.com" },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "4rem 2rem",
        background: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Contact</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {contacts.map((c) => (
          <div
            key={c.text}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#ffffff",
              padding: "0.5rem 1.2rem",
              borderRadius: "8px",
              minWidth: "250px",
              justifyContent: "center",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>{c.icon}</span>
            <span style={{ fontSize: "1rem" }}>{c.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
