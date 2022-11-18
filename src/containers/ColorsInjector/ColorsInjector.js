import clsx from "clsx";
import { cloneElement } from "react";

import styles from "./ColorsInjector.module.scss";

const themeColors = [
  "background",
  "text-primary",
  "text-secondary",
  "accent",
  "accent-hover",
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
  backgroundHover,
  beforeBackground,
  borderColor,
  borderHoverColor,
  fill,
  stroke,
  children,
  className,
  ...props
}) => {
  const isThemeText = isThemeColor(textColor);
  const isThemeBackground = isThemeColor(background);
  const isThemeBorderColor = isThemeColor(borderColor);
  const isThemeBeforeBackground = isThemeColor(beforeBackground);
  const isThemeFill = isThemeColor(fill);
  const isThemeStroke = isThemeColor(stroke);
  const isThemeBackgroundHover = isThemeColor(backgroundHover);
  const isThemeBorderHover = isThemeColor(borderHoverColor);

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
    ...(fill && {
      "data-fill-color": isThemeFill ? fill : "injected",
    }),
    ...(stroke && {
      "data-stroke-color": isThemeStroke ? stroke : "injected",
    }),
    ...(backgroundHover && {
      "data-background-hover-color": isThemeBackgroundHover
        ? backgroundHover
        : "injected",
    }),
    ...(borderHoverColor && {
      "data-border-hover-color": isThemeBorderColor
        ? borderHoverColor
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
    ...(!isThemeFill && {
      "--fill-color-injected": fill,
    }),
    ...(!isThemeStroke && {
      "--stroke-color-injected": stroke,
    }),
    ...(!isThemeBackgroundHover && {
      "--background-hover-color-injected": backgroundHover,
    }),
    ...(!isThemeBorderHover && {
      "--border-hover-color-injected": borderHoverColor,
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
