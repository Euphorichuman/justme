import React from "react";
import "./Contact.scss";

import { ReactComponent as FlowerSvg } from "assets/shapes/flower.svg";

interface IProps {
  refProp: React.RefObject<HTMLDivElement | null>;
}

export function Contact({ refProp }: IProps) {
  return (
    <div className="contact" ref={refProp as React.RefObject<HTMLDivElement>}>
      <a
        className="contact__email"
        href="mailto:fuentes.acosta.martin@gmail.com?subject = Contact&body = Message"
      >
        euphorichuman@email.com <span>{"/>"}</span>
      </a>
      <div className="contact__social-medias">
        <a
          href="https://www.linkedin.com/in/martin-fuentes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Euphorichuman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.behance.net/euphorichuman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behance
        </a>
        <a
          href="https://www.instagram.com/euphorichuman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>

      <div className="contact__shape contact__shape-1">
        <FlowerSvg />
      </div>
    </div>
  );
}
