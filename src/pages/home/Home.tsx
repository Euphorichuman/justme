import "./Home.scss";

import StarIcon from "assets/shapes/star.svg?react";

export function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <div className="home__large-text">
          <span className="row">
            <span className="fake-btn normal-text">
              Hi, my name is <span className="name">MARTIN FUENTES</span>, I'm
            </span>
            <span className="text-primary">FULL-STACK</span>
          </span>
          WEB DEVELOPER, AND
          <br />
          <span className="text-primary">
            <span className="text-outline">
              <span className="desktop-designer">DDDDDD</span>
              <span className="mobile-designer">DDD</span>
            </span>
            ESIGNER
          </span>
        </div>

        <div className="home__shape home__shape-1">
          <StarIcon />
        </div>
        <div className="home__shape home__shape-2">
          <StarIcon />
        </div>
      </div>
    </section>
  );
}
