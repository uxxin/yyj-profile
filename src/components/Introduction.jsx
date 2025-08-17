import profileImage from "../assets/images/profile.webp";

const Introduction = () => {
  return (
    <section
      id="home"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "6rem 6rem",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          안녕하세요,
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
          사용자의 입장에서 출발해, 개발자의 시선으로 완성하는{" "}
          <strong>양유진</strong>입니다.
        </p>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          Front-end Developer & UI/UX Designer
        </p>
      </div>
      <img
        src={profileImage}
        alt="profile"
        style={{ width: 200, borderRadius: "50%" }}
      />
    </section>
  );
};

export default Introduction;
