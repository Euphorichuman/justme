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
            Hi! I’m a FULL-STACK developer and computer systems engineer
            (ABET-accredited), bilingual, and passionate about crafting
            technology that works beautifully. I love designing too—whether it’s
            branding, UI/UX, or photography. I enjoy leading teams, solving
            problems, and building software with tools like .NET (C#), Python,
            Node.js (NestJS), React, TypeScript, and more. Creativity,
            responsibility, and ethics guide everything I do.
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
}
