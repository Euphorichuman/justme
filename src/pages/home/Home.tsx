import React, { Fragment, useRef } from "react";
import { About } from "pages/about/About";
import { Contact } from "pages/contact/Contact";
import { Navbar } from "components/navbar/Navbar";
import { Footer } from "components/footer/Footer";
import "./Home.scss";

import { ReactComponent as StarSvg } from "assets/shapes/star.svg";

export default function Home() {
  const contactRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);

  const scrollToContact = (el: string) => {
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
      <Navbar contactAction={scrollToContact} />
      <section className="home">
        <div className="home__content">
          <div className="home__large-text">
            <span className="row">
              <span className="fake-btn normal-text">
                Hi, my name is Martin Fuentes, I'm
              </span>
              <span className="text-primary">FULL-STACK</span>
            </span>
            WEB DEVELOPER, AND
            <br />
            <span className="text-primary">
              <span className="text-outline">DDDDD</span>ESIGNER
            </span>
          </div>

          <div className="home__shape home__shape-1">
            <StarSvg />
          </div>
          <div className="home__shape home__shape-2">
            <StarSvg />
          </div>
        </div>
      </section>
      <About refProp={aboutRef} />
      <Contact refProp={contactRef} />
      <Footer />
    </Fragment>
  );
}
