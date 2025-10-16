import React, { Fragment } from "react";
import { Footer } from "components/footer/Footer";

import "./NotFound.scss";

export function NotFound() {
  return (
    <Fragment>
      <div className="not-found">
        <div className="not-found__content">
          <div className="not-found__extra-large-text text-primary">404</div>
          <div>Page not found :(</div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
