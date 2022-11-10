import clsx from "clsx";
import { cloneElement } from "react";

import styles from "./ColorsInjector.module.scss";

const themeColors = [
  "background",
  "text-primary",
  "text-secondary",
  "accent",
  "extra-1",
  "extra-2",
  "extra-3",
  "extra-4",
  "stroke",
];

const isThemeColor = (value) => themeColors.includes(value);

export const ColorsInjector = ({
  textColor,
  background,
  beforeBackground,
  borderColor,
  children,
  className,
  ...props
}) => {
  const isThemeText = isThemeColor(textColor);
  const isThemeBackground = isThemeColor(background);
  const isThemeBorderColor = isThemeColor(borderColor);
  const isThemeBeforeBackground = isThemeColor(beforeBackground);

  const dataAttributes = {
    ...(textColor && {
      "data-text-color": isThemeText ? textColor : "injected",
    }),
    ...(background && {
      "data-background-color": isThemeBackground ? background : "injected",
    }),
    ...(borderColor && {
      "data-border-color": isThemeBorderColor ? borderColor : "injected",
    }),
    ...(beforeBackground && {
      "data-before-background-color": isThemeBeforeBackground
        ? beforeBackground
        : "injected",
    }),
  };

  const style = {
    ...(!isThemeText && {
      "--text-color-injected": textColor,
    }),
    ...(!isThemeBackground && {
      "--background-color-injected": background,
    }),
    ...(!isThemeBorderColor && {
      "--border-color-injected": borderColor,
    }),
    ...(!isThemeBeforeBackground && {
      "--before-background-color-injected": beforeBackground,
    }),
  };

  const {
    props: { style: childStyle, className: childClassName, ...restProps },
  } = children;

  const styleMerged = {
    ...style,
    ...props.style,
    ...childStyle,
  };

  const classNameMerged = clsx(styles.colors, childClassName, className);

  return cloneElement(children, {
    style: styleMerged,
    className: classNameMerged,
    ...dataAttributes,
    ...restProps,
  });
};
