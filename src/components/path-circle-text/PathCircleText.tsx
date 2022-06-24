import React, { useEffect, useRef } from "react";
import "./PathCircleText.scss";

import { ReactComponent as PathTextSvg } from "assets/shapes/path-text.svg";

export function PathCircleText() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const svg = svgRef.current;
    if (svg) {
      svg.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    }
  };

  return (
    <div className="path-circle-text">
      <PathTextSvg ref={svgRef} />
    </div>
  );
}
