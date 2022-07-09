import React, { Fragment, useRef } from "react";
import { Home } from "pages/home/Home";
import { About } from "pages/about/About";
import { Contact } from "pages/contact/Contact";
import { Navbar } from "components/navbar/Navbar";
import { Footer } from "components/footer/Footer";

export default function App() {
  const contactRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  
  const scrollToSection = (el: string) => {
    if (el === "contact") {
      contactRef.current!.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (el === "about") {
      aboutRef.current!.scrollIntoView({
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
      <Contact refProp={contactRef} />
      <Footer />
    </Fragment>
  );
}
