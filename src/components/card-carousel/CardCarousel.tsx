import React, { useRef, useState } from "react";
import { Card } from "../card/Card";

import "./CardCarousel.scss";

export function CardCarousel() {
  const items = [
    {
      id: 0,
      title: "Seolttang Shop (Brand identity)",
      image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/6e2fee113583173.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.png",
      href: "https://www.behance.net/gallery/113583173/Selttang-Shop-Identidad-de-marca"
    },
    {
      id: 1,
      title: "CRONUX",
      image: "https://github.com/Euphorichuman/Cronux/blob/main/docs/CRONUX-GUI.jpg?raw=true",
      href: "https://euphorichuman.github.io/Cronux/clock.html",
    },
    {
      id: 2,
      title: "Langton's ant (two-dimensional Turing machine)",
      image: "https://camo.githubusercontent.com/c77c772938f7964148356d9cc59a8ad527b2edaf525fa63a758d2a6ea07d66db/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3338362f302a4a41734f34784a7975316a597636686e2e",
      href: "https://github.com/Euphorichuman/Langtons-Ant",
    },
    {
      id: 3,
      title: "TODO REACT APP",
      image: "https://user-images.githubusercontent.com/55267781/179328669-34ce2936-18b4-440b-b7ea-1a18c342310e.png",
      href: "https://euphorichuman.github.io/ToDo-react-app/",
    },
    {
      id: 4,
      title: "Sergio Mantequilla (Just for fun)",
      image: "https://user-images.githubusercontent.com/55267781/179328789-981e1561-71e0-4e68-8568-50741adbb1bd.png",
      href: "https://euphorichuman.github.io/Sergio-Mantequilla/",
    },
    {
      id: 5,
      title: "Stars and constellations (Telegram bot)",
      image: "https://raw.githubusercontent.com/fuentesDeveloper/Telegram_Bot_Stars/develop/files/StarConstellationBot_Photo.png",
      href: "https://github.com/Euphorichuman/StarConstellationBot-TelgramBot",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [subItems, setSubItems] = useState(items.slice(0, 4));

  const prevBtn = useRef<HTMLButtonElement>(null);
  const nextBtn = useRef<HTMLButtonElement>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    action: number
  ) => {
    e.preventDefault();

    if (currentIndex + action < 0) {
      console.log("Start of list");

    } else if (currentIndex + action > items.length - 1) {
      console.log("End of list");

    } else {
      if (prevBtn.current && nextBtn.current) {
        prevBtn.current.disabled = false;
        prevBtn.current.classList.remove("disabled-btn");
        nextBtn.current.disabled = false;
        nextBtn.current.classList.remove("disabled-btn");
      }

      setCurrentIndex(currentIndex + action);
      setSubItems(
        items.slice(currentIndex + action, currentIndex + action + 4)
      );

      if (currentIndex + action === items.length - 1) {
        if (nextBtn.current) {
          nextBtn.current.disabled = true;
          nextBtn.current.classList.add("disabled-btn");
        }
      }

      if (currentIndex + action === 0) {
        if (prevBtn.current) {
          prevBtn.current.disabled = true;
          prevBtn.current.classList.add("disabled-btn");
        }
      }
    }
  };

  return (
    <div className="card-carousel">
      <div className="card-carousel__controls">
        <button
          onClick={(e) => handleClick(e, -1)}
          ref={prevBtn}
          className="outline-btn disabled-btn"
        >
          &#60;/
        </button>
        <button
          onClick={(e) => handleClick(e, 1)}
          ref={nextBtn}
          className="outline-btn"
        >
          /&#62;
        </button>
      </div>
      <div className="card-carousel__container">
        {subItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
