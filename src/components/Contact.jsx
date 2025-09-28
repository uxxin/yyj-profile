import mailIcon from "../assets/images/mail.png";
import githubIcon from "../assets/images/github.png";
import velogIcon from "../assets/images/velog.png";

const Contact = () => {
  const contacts = [
    {
      icon: mailIcon,
      text: "dbwlsdid1114@naver.com",
      link: "mailto:dbwlsdid1114@naver.com",
    },
    {
      icon: githubIcon,
      text: "github.com/uxxin",
      link: "https://github.com/uxxin",
    },
    {
      icon: velogIcon,
      text: "velog.io/@uxxin2da/posts",
      link: "https://velog.io/@uxxin2da/posts",
    },
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
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {contacts.map((c) => (
          <a
            key={c.text}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#ffffff",
              padding: "1rem",
              borderRadius: "12px",
              width: "200px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.2s",
            }}
          >
            <img
              src={c.icon}
              alt={c.text}
              style={{ width: "40px", height: "40px", marginBottom: "0.5rem" }}
            />
            <span style={{ fontSize: "1rem" }}>{c.text}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
