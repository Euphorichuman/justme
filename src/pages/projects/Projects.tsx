import React from "react";
import { CardCarousel } from "components/card-carousel/CardCarousel";

import "./Projects.scss";

interface IProps {
  refProp: React.RefObject<HTMLDivElement | null>;
}

export function Projects({ refProp }: IProps) {
  const projects = [
    {
      id: 0,
      title: "Seolttang Shop (Brand identity)",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/max_808/6e2fee113583173.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.png",
      href: "https://www.behance.net/gallery/113583173/Selttang-Shop-Identidad-de-marca",
    },
    {
      id: 0,
      title: "LUVLEY Makeup (Brand identity)",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/95da0c220632171.67c6bc02a8828.png",
      href: "https://www.behance.net/gallery/220632171/Branding-LUVLEY-Makeup",
    },
    {
      id: 2,
      title: "CRONUX",
      image:
        "https://github.com/Euphorichuman/Cronux/blob/main/docs/CRONUX-GUI.jpg?raw=true",
      href: "https://euphorichuman.github.io/Cronux/clock.html",
    },
    {
      id: 3,
      title: "Langton's ant (two-dimensional Turing machine)",
      image:
        "https://camo.githubusercontent.com/d9477be91161623e351133ecd95cdbe8863071f2dee4219e5fb559424da695aa/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3338362f302a4a41734f34784a7975316a597636686e2e",
      href: "https://github.com/Euphorichuman/Langtons-Ant",
    },
    {
      id: 4,
      title: "TODO REACT APP",
      image:
        "https://user-images.githubusercontent.com/55267781/179328669-34ce2936-18b4-440b-b7ea-1a18c342310e.png",
      href: "https://euphorichuman.github.io/ToDo-react-app/",
    },
    {
      id: 5,
      title: "Sergio Mantequilla (Just for fun)",
      image:
        "https://user-images.githubusercontent.com/55267781/179328789-981e1561-71e0-4e68-8568-50741adbb1bd.png",
      href: "https://euphorichuman.github.io/Sergio-Mantequilla/",
    },
    {
      id: 6,
      title: "Stars and constellations (Telegram bot)",
      image:
        "https://raw.githubusercontent.com/fuentesDeveloper/Telegram_Bot_Stars/develop/files/StarConstellationBot_Photo.png",
      href: "https://github.com/Euphorichuman/StarConstellationBot-TelgramBot",
    },
  ];

  return (
    <section
      className="projects"
      ref={refProp as React.RefObject<HTMLDivElement>}
    >
      <div className="projects__wrapper">
        <div className="projects__title">
          WANNA SEE SOME OF <span className="work">MY WORK</span>?
        </div>
        <div className="projects__content">
          <CardCarousel items={projects} />
        </div>
      </div>
    </section>
  );
}
