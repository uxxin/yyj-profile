import mailIcon from "../assets/images/mail.png";
import githubIcon from "../assets/images/github.png";
import velogIcon from "../assets/images/velog.png";
import "./Contact.css";

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
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-container">
        {contacts.map((c) => (
          <a
            key={c.text}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <img src={c.icon} alt={c.text} className="contact-icon" />
            <span className="contact-text">{c.text}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
