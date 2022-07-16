import React from "react";
import { CardCarousel } from "components/card-carousel/CardCarousel";

import "./Projects.scss";

interface IProps {
  refProp: React.RefObject<HTMLDivElement | null>;
}

export function Projects({ refProp }: IProps) {
  return (
    <section
      className="projects"
      ref={refProp as React.RefObject<HTMLDivElement>}
    >
      <div className="projects__wrapper">
        <div className="projects__title">WANNA SEE SOME OF MY WORK?</div>
        <div className="projects__content">
          <CardCarousel />
        </div>
      </div>
    </section>
  );
}
