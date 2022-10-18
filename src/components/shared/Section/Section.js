import clsx from "clsx";
import React from "react";

import styles from "./Section.module.scss";

const bgColors = [
  "background",
  "accent",
  "extra-1",
  "extra-2",
  "extra-3",
  "extra-4",
];

export const Section = ({
  theme = "dark",
  as: As = "section",
  bg = "background",
  className,
  children,
  style,
  ...props
}) => {
  const isThemeBgColor = bgColors.includes(bg);
  return (
    <As
      data-theme={theme}
      className={clsx(
        styles.section,
        isThemeBgColor ? styles[bg] : styles.injected,
        className
      )}
      style={
        !isThemeBgColor
          ? {
              "--injected-background-color": bg,

              ...style,
            }
          : style
      }
      {...props}
    >
      {children}
    </As>
  );
};
