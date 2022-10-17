import React from "react";
import clsx from "clsx";

import "./Typography.scss";

const resolveTypographyAttrs = ({
  themeColor,
  color,
  type,
  className,
  style,
  dange,
}) => {
  const getClassName = (colorClassName) =>
    clsx(`typography-${type}`, colorClassName, className);

  if (!color || color === "default") {
    return {
      className: getClassName(`typography-${themeColor}`),
      style,
    };
  }

  if (
    ["text-primary", "text-secondary", "accent", "primary, secondary"].includes(
      color
    ) ||
    color.startsWith("extra-")
  ) {
    return {
      className: getClassName(`typography-${color.replace("text-", "")}`),
      style,
    };
  }

  return {
    className: getClassName("typography-injected"),
    style: {
      "--injected-typography-color": color,
      ...style,
    },
  };
};

export const Typography = ({
  type = "h3",
  as: As = "p",
  themeColor = "primary",
  color = "default",
  children,
  className,
  isHTML = false,
  style,
  ...props
}) => {
  return (
    <As
      {...resolveTypographyAttrs({ themeColor, color, type, className })}
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
