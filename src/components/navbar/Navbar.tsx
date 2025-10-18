import { useState } from "react";
import "./Navbar.scss";

import FlowerIcon from "assets/shapes/flower.svg?react";

interface IProps {
  scrollToSectionAction: (el: string) => void;
}

export function Navbar({ scrollToSectionAction }: IProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (section: string) => {
    scrollToSectionAction(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__shape">
        <FlowerIcon />
      </div>
      <div className="navbar__title" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        Euphorichuman
      </div>
      <div className={`navbar__menu ${isMenuOpen ? "is-active" : ""}`}>
        <div className="navbar__options">
          <div
            className="navbar__option hover-primary-color"
            onClick={() => handleLinkClick("about")}
          >
            About
          </div>
          <div
            className="navbar__option hover-primary-color"
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </div>
          <div
            className="navbar__option hover-primary-color"
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </div>
        </div>
        <div className="navbar__actions">
          <a
            className="outline-btn"
            href="mailto:fuentes.acosta.martin@gmail.com?subject=Contact&body=Message"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </nav>
  );
}
