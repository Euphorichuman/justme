import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./carousel-arrow-buttons";

import "./Carousel.scss";
import { Card } from "../card/Card";

interface IProps {
  items: {
    id: number;
    title: string;
    image: string;
    href: string;
  }[];
}

export function Carousel({ items }: IProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="carousel">
      <div className="carousel__controls">
        <div className="carousel__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="carousel__viewport" ref={emblaRef}>
        <div className="carousel__container">
          {items.map((item, index) => (
            <div className="carousel__slide" key={index}>
              <Card key={item.id} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
