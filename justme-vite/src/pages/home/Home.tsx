import React from "react";

import "./Home.scss";

// import StarIcon from "@/assets/shapes/star.svg?react";

export function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <div className="home__large-text">
          <span className="row">
            <span className="fake-btn normal-text">
              Hi, my name is Martin Fuentes, I'm
            </span>
            <span className="text-primary">FULL-STACK</span>
          </span>
          WEB DEVELOPER, AND
          <br />
          <span className="text-primary">
            <span className="text-outline">DDDDD</span>ESIGNER
          </span>
        </div>

        <div className="home__shape home__shape-1">
          {/* <StarIcon /> */}
          <div>StarIcon</div>
        </div>
        <div className="home__shape home__shape-2">
          {/* <StarIcon /> */}
          <div>StarIcon</div>
        </div>
      </div>
    </section>
  );
}
