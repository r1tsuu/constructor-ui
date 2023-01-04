import React from "react";
import clsx from "clsx";

import styles from "./Typography.module.scss";

import { ColorsInjector } from "../../../containers";

const indexVarsMap = {
  0: "--font-size-injected-mobile",
  1: "--font-size-injected-tablet",
  2: "--font-size-injected-laptop",
  3: "--font-size-injected-desktop",
};

export const Typography = ({
  type,
  as: As = "div",
  fontSize = "",
  color,
  children,
  className,
  isHTML = true,
  style,
  editableInStorybook = true,
  selector,
  withAnimation = true,
  ...props
}) => {
  const fontSizes = fontSize.split(" ").reduce(
    (acc, value, index) => ({
      ...acc,
      [indexVarsMap[index]]: value,
    }),
    {}
  );

  return (
    <ColorsInjector textColor={color}>
      <As
        data-component="typography"
        className={clsx(styles.list, styles[type], styles.fontSize, className)}
        style={{
          ...fontSizes,
          ...style,
        }}
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
    </ColorsInjector>
  );
};
