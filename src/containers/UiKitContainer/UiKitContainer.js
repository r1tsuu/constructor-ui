import { useEffect } from "react";

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

const getArrowCubeVars = (arrowCube, type) => {
  return {
    [`--arrow-cube-${type}-border-radius`]: arrowCube.borderRadius,
    [`--arrow-cube-${type}-bg-color`]: arrowCube.bgColor,
    [`--arrow-cube-${type}-icon-color`]: arrowCube.iconColor,
    [`--arrow-cube-${type}-border-color`]: arrowCube.borderColor,
    [`--arrow-cube-${type}-border-width`]: arrowCube.borderWidth,
    [`--arrow-cube-${type}-hover-bg-color`]: arrowCube.hoverBgColor,
    [`--arrow-cube-${type}-hover-border-color`]: arrowCube.hoverBorderColor,
  };
};

const getArrowLongVars = (arrowLong) => {
  return {
    [`--arrow-long-custom-icon-color`]: arrowLong.iconColor,
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

const insertVariables = (varsObj) => {
  // eslint-disable-next-line no-unused-vars
  for (const [varKey, varValue] of Object.entries(varsObj)) {
    document.documentElement.style.setProperty(varKey, varValue);
  }
};

export const UiKitContainer = ({
  buttons,
  typographies,
  customColors,
  arrowsCube,
  arrowLong,
  children,
}) => {
  const jsonVars = JSON.stringify({ buttons, typographies, customColors });
  useEffect(() => {
    insertVariables(
      Object.assign(
        resolveAllVars({
          components: buttons,
          getVars: getButtonVars,
        }),
        resolveAllVars({
          components: typographies,
          getVars: getTypographyVars,
        }),
        resolveAllVars({
          components: customColors,
          getVars: getCustomColorVar,
        }),
        resolveAllVars({
          components: arrowsCube,
          getVars: getArrowCubeVars,
        }),
        getArrowLongVars(arrowLong)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jsonVars]);

  return children;
};
