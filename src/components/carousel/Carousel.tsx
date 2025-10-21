import { useRef } from "react";
import Slider from "react-slick";

import { Card } from "../card/Card";
import {
  PrevButton,
  NextButton,
} from "./carousel-arrow-buttons/CarouselArrowButtons";
import "./Carousel.scss";

interface IProps {
  items: {
    id: number;
    title: string;
    image: string;
    href: string;
  }[];
}

export function Carousel({ items }: IProps) {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="carousel">
      <div className="carousel__controls">
        <div className="carousel__buttons">
          <PrevButton onClick={previous} />
          <NextButton onClick={next} />
        </div>
      </div>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {items.map((item, index) => (
            <div className="carousel__slide" key={index}>
              <Card key={item.id} item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
