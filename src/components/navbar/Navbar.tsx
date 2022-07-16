import React from "react";
import "./Navbar.scss";

interface IProps {
  scrollToSectionAction: (el: string) => void;
}

export function Navbar({ scrollToSectionAction }: IProps) {
  return (
    <nav className="navbar">
      <div className="navbar__title">Euphorichuman</div>
      <div className="navbar__options">
        <div
          className="navbar__option hover-primary-color"
          onClick={() => scrollToSectionAction("about")}
        >
          About
        </div>
        <div
          className="navbar__option hover-primary-color"
          onClick={() => scrollToSectionAction("projects")}
        >
          Projects
        </div>
        <div
          className="navbar__option hover-primary-color"
          onClick={() => scrollToSectionAction("contact")}
        >
          Contact
        </div>
      </div>
      <div className="navbar__actions">
        <a
          className="outline-btn"
          href="mailto:fuentes.acosta.martin@gmail.com?subject = Contact&body = Message"
        >
          GET IN TOUCH
        </a>
      </div>
    </nav>
  );
}
