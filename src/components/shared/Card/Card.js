import clsx from "clsx";
import React from "react";
import { ColorsInjector } from "../../../containers";
import { mergeProps } from "../../../utils";

import styles from "./Card.module.scss";

export const Card = ({
  borderColor = "stroke",
  bg = "background",
  borderRadius,
  as: As = "div",
  selector,
  children,
  ...props
}) => {
  return (
    <ColorsInjector background={bg} borderColor={borderColor}>
      <As
        data-component="card"
        {...mergeProps(props, {
          className: styles.style,
          style: {
            borderRadius,
          },
        })}
      >
        {children}
      </As>
    </ColorsInjector>
  );
};
