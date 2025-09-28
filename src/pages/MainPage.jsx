import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <Introduction />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default MainPage;
