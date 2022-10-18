import React from "react";
import clsx from "clsx";

import styles from "./ContentContainer.module.scss";

export const ContentContainer = ({
  className = "",
  as: As = "div",
  children,
  ...props
}) => {
  return (
    <div className={clsx(styles.contentContainer, className)} {...props}>
      {children}
    </div>
  );
};
