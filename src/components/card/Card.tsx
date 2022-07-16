import React from "react";

import "./Card.scss";

interface IProps {
  item: {
    id: number;
    title: string;
    image: string;
    href: string;
  }
}

export function Card({item}: IProps) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={item.image} alt="Card" />
      </div>
      <div className="card__content">
        <div className="card__title">{item.title}</div>
        <a
          className="card__action"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          View more
        </a>
      </div>
    </div>
  );
}
