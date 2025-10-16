import { Fragment, useRef } from "react";
import { Home } from "pages/home/Home";
import { About } from "pages/about/About";
import { Contact } from "pages/contact/Contact";
import { Projects } from "pages/projects/Projects";
import { Navbar } from "components/navbar/Navbar";
import { Footer } from "components/footer/Footer";

export default function App() {
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);
  
  const scrollToSection = (el: string) => {
    if (el === "about") {
      aboutRef.current!.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (el === "projects") {
      projectsRef.current!.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (el === "contact") {
      contactRef.current!.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

  };

  return (
    <Fragment>
      <Navbar scrollToSectionAction={scrollToSection} />
      <Home />
      <About refProp={aboutRef} />
      <Projects refProp={projectsRef}/>
      <Contact refProp={contactRef} />
      <Footer />
    </Fragment>
  );
}
