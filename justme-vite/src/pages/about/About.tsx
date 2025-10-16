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
            Computer and systems engineering student. With great skills in
            software development tools and programming languages such as .NET
            (with c#), Java, Python; web development: Typescript (with Angular),
            Javascript (with React), Html, CSS (and SASS). I have worked in
            various development teams (as lead and developer) solving problems
            and supporting various processes in the areas of technology as web
            development and mathematical systems, and proposing solutions to
            solve small and large scale problems. I also have freelance
            experience designing brand identities and some general design and UI/UX.
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
}
