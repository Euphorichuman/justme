import React, { useRef, useState } from "react";
import { Card } from "../card/Card";

import "./CardCarousel.scss";

interface IProps {
  items: {
    id: number;
    title: string;
    image: string;
    href: string;
  }[];
}

export function CardCarousel({ items }: IProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subItems, setSubItems] = useState(items.slice(0, 4));
  const [isAnimating, setIsAnimating] = useState(false);

  const prevBtn = useRef<HTMLButtonElement>(null);
  const nextBtn = useRef<HTMLButtonElement>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    action: number
  ) => {
    e.preventDefault();

    if (isAnimating) return;

    if (currentIndex + action < 0) {
      console.log("Start of list");
    } else if (currentIndex + action > items.length - 1) {
      console.log("End of list");
    } else {
      setIsAnimating(true);

      if (prevBtn.current && nextBtn.current) {
        prevBtn.current.disabled = false;
        prevBtn.current.classList.remove("disabled-btn");
        nextBtn.current.disabled = false;
        nextBtn.current.classList.remove("disabled-btn");
      }

      const container = document.querySelector(".card-carousel__container");
      container?.classList.add(
        action > 0 ? "slide-out-left" : "slide-out-right"
      );

      setTimeout(() => {
        setCurrentIndex(currentIndex + action);
        setSubItems(
          items.slice(currentIndex + action, currentIndex + action + 4)
        );

        container?.classList.remove("slide-out-left", "slide-out-right");
        container?.classList.add(
          action > 0 ? "slide-in-right" : "slide-in-left"
        );

        setTimeout(() => {
          container?.classList.remove("slide-in-left", "slide-in-right");
          setIsAnimating(false);
        }, 400);
      }, 300);

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
