import React from "react";
import clsx from "clsx";

import styles from "./Typography.module.scss";
import { useInStorybook } from "../../../contexts/InStorybookContext";

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
  type,
  as: As = "p",
  color,
  children,
  className,
  isHTML = true,
  style,
  editableInStorybook = true,
  ...props
}) => {
  const isInStorybook = useInStorybook();
  const isThemeColor = themeColors.includes(color);

  return (
    <As
      className={clsx(
        styles[type],
        isThemeColor ? styles[color.replace("text-", "")] : styles.injected,
        className
      )}
      // contentEditable={editableInStorybook && isInStorybook}
      style={
        !isThemeColor && color
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
