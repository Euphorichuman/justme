import React from "react";
// import { PathCircleText } from "components/path-circle-text/PathCircleText";
import "./Contact.scss";

// import FlowerIcon from "@/assets/shapes/flower.svg";

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
          className="hover-primary-color"
          href="https://www.linkedin.com/in/martin-fuentes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="hover-primary-color"
          href="https://github.com/Euphorichuman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="hover-primary-color"
          href="https://www.behance.net/euphorichuman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behance
        </a>
        <a
          className="hover-primary-color"
          href="https://www.instagram.com/euphorichuman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>

      <div className="contact__shape contact__shape-1">
        {/* <FlowerIcon /> */}
        <div>FlowerIcon</div>
      </div>
    </div>
  );
}
