import React, { ComponentPropsWithRef } from "react";

import "./CarouselArrowButtons.scss";

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="outline-btn carousel__button"
      type="button"
      {...restProps}
    >
      &#60;/
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="outline-btn carousel__button"
      type="button"
      {...restProps}
    >
      /&#62;
      {children}
    </button>
  );
};
