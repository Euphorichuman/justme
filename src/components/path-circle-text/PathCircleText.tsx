import { useEffect, useRef } from "react";
import "./PathCircleText.scss";

import PathTextIcon from "assets/shapes/path-text.svg?react";

export function PathCircleText() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const svg = svgRef.current;
      if (svg) {
        svg.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="path-circle-text">
      <PathTextIcon ref={svgRef} />
    </div>
  );
}
