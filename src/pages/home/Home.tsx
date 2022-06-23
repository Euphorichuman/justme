import React, { Fragment } from "react";
import { Navbar } from "components/navbar/Navbar";
import "./Home.scss";

import { ReactComponent as StarSvg } from "../../../src/assets/shapes/star.svg";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <section className="home">
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
          <StarSvg />
        </div>
        <div className="home__shape home__shape-2">
          <StarSvg />
        </div>
      </section>
    </Fragment>
  );
}
