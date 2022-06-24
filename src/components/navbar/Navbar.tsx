import React from "react";
import "./Navbar.scss";

interface IProps {
  contactAction: (el: string) => void;
}

export function Navbar({ contactAction }: IProps) {

  const notAvailable = () => {
    alert("This feature is not available yet");
  }

  return (
    <nav className="navbar">
      <div className="navbar__title">Euphorichuman</div>
      <div className="navbar__options">
        <div className="navbar__option hover-primary-color" onClick={() => contactAction('about')}>About</div>
        <div className="navbar__option hover-primary-color" onClick={notAvailable}>Projects</div>
        <div className="navbar__option hover-primary-color" onClick={() => contactAction('contact')}>
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
