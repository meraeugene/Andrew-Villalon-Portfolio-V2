import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./sections/Services";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import AboutMe from "./sections/AboutMe";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Projects />
        <AboutMe />
        <Services />
        <Certifications />
        <Contact />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
