import contactsData from "./contactData";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-container">
        {contactsData.map((c) => (
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
