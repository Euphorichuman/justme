import { useEffect, useRef } from "react";
import "./PathCircleText.scss";

import PathTextIcon from "assets/shapes/path-text.svg?react";

export function PathCircleText() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const svg = svgRef.current;
    if (svg) {
      svg.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
    }
  };

  return (
    <div className="path-circle-text">
      <PathTextIcon ref={svgRef} />
    </div>
  );
}
