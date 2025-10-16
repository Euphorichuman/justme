import React from "react";
import { PathCircleText } from "components/path-circle-text/PathCircleText";
import { Skills } from "pages/skills/Skills";
import "./About.scss";

interface IProps {
  refProp: React.RefObject<HTMLDivElement | null>;
}

export function About({ refProp }: IProps) {
  return (
    <section className="about" ref={refProp as React.RefObject<HTMLDivElement>}>
      <div className="about__content-wrapper">
        <PathCircleText />
        <div className="about__content">
          <div className="about__title">About</div>
          <div className="about__text">
            Hiii! I'm a FULL-STACK developer and computer systems engineer
            (ABET-accredited), bilingual, and passionate about building
            technology that works beautifully. I'm also into design—branding,
            UI/UX, and photography—and I've got a real love for motorcycles. I
            enjoy leading teams, solving problems, and creating software with
            tools like .NET (C#), Python, Node.js (NestJS), React, and
            TypeScript. Creativity, responsibility, and ethics drive everything
            I do.
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
}
