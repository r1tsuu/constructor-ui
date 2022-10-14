import React from "react";

import "./ConstructorContainer.scss";

const getButtonVars = (button, type) => {
  return {
    [`--button-${type}-border-radius`]: button.borderRadius,
    [`--button-${type}-bg-color`]: button.bgColor,
    [`--button-${type}-text-color`]: button.textColor,
    [`--button-${type}-border-color`]: button.borderColor,
    [`--button-${type}-border-width`]: button.borderWidth,
    [`--button-${type}-hover-bg-color`]: button.hoverBgColor,
    [`--button-${type}-hover-text-color`]: button.hoverTextColor,
    [`--button-${type}-hover-border-color`]: button.hoverBorderColor,
  };
};

const getTypographyVars = (typography, type) => {
  return {
    [`--typography-${type}-line-height`]: typography.lineHeight,
    [`--typography-${type}-letter-spacing`]: typography.letterSpacing,
    [`--typography-${type}-font-family`]: typography.fontFamily,
    [`--typography-${type}-text-transform`]: typography.textTransform,
    [`--typography-${type}-font-size-mobile`]: typography.fontSizeMobile,
    [`--typography-${type}-font-size-tablet`]: typography.fontSizeTablet,
    [`--typography-${type}-font-size-laptop`]: typography.fontSizeLaptop,
    [`--typography-${type}-font-size-desktop`]: typography.fontSizeDesktop,
  };
};

const getCustomColorVar = (color, type) => {
  return {
    [`--custom-theme-color-${type}`]: color,
  };
};

const resolveAllVars = ({ components, getVars }) => {
  return Object.keys(components).reduce(
    (acc, type) => ({
      ...acc,
      ...getVars(components[type], type),
    }),
    {}
  );
};

export const ConstructorContainer = ({
  buttons,
  typographies,
  customColors,
  children,
}) => {
  return (
    <constructor-container
      style={{
        ...resolveAllVars({
          components: buttons,
          getVars: getButtonVars,
        }),
        ...resolveAllVars({
          components: typographies,
          getVars: getTypographyVars,
        }),
        ...resolveAllVars({
          components: customColors,
          getVars: getCustomColorVar,
        }),
      }}
    >
      {children}
    </constructor-container>
  );
};
