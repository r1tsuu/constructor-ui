import React from "react";
import clsx from "clsx";

import styles from "./Typography.module.scss";

const themeColors = [
  "text-primary",
  "text-secondary",
  "primary",
  "secondary",
  "accent",
  "extra-1",
  "extra-2",
  "extra-3",
  "extra-4",
];

export const Typography = ({
  type = "h3",
  as: As = "p",
  color = "primary",
  children,
  className,
  isHTML = true,
  style,
  ...props
}) => {
  const isThemeColor = themeColors.includes(color);

  return (
    <As
      className={clsx(
        styles[type],
        isThemeColor ? styles[color.replace("text-", "")] : styles.injected,
        className
      )}
      style={
        !isThemeColor
          ? {
              "--injected-color": color,

              ...style,
            }
          : style
      }
      {...(isHTML
        ? {
            dangerouslySetInnerHTML: {
              __html: children,
            },
          }
        : {
            children,
          })}
      {...props}
    />
  );
};
