import React from "react";
import clsx from "clsx";

import styles from "./ContentContainer.module.scss";

const { style } = styles;

export const ContentContainer = ({
  className = "",
  as: As = "div",
  children,
  ...props
}) => {
  return (
    <div
      data-component="container"
      className={clsx(style, className)}
      {...props}
    >
      {children}
    </div>
  );
};
