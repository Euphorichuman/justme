import React from "react";
import "./Navbar.scss";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__title">Euphorichuman</div>
      <div className="navbar__options">
        <div className="navbar__option">About</div>
        <div className="navbar__option">Projects</div>
        <div className="navbar__option">Contact</div>
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
