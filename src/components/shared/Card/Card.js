import React from "react";
import { ColorsInjector } from "../../../containers";
import { mergeProps } from "../../../utils";

import styles from "./Card.module.scss";

export const Card = ({
  borderColor = "stroke",
  bg = "background",
  borderRadius,
  as: As = "div",
  children,
  ...props
}) => {
  return (
    <ColorsInjector background={bg} borderColor={borderColor}>
      <As
        {...mergeProps(props, {
          className: styles.style,
        })}
      >
        {children}
      </As>
    </ColorsInjector>
  );
};
