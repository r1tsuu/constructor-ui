import React from "react";
import { UiKitContainer } from "../../src/containers";
import { testColors } from "../../src/utils/constants";

const createArrowCube = ({
  borderRadius = "10px",
  bgColor = testColors.gray,
  iconColor = testColors.cyan,
  borderColor = testColors.black,
  borderWidth = "1px",
  hoverBgColor = testColors.grayDark,
  hoverTextColor = testColors.blue,
  hoverBorderColor = testColors.orange,
}) => {
  return {
    borderRadius,
    bgColor,
    iconColor,
    borderColor,
    borderWidth,
    hoverBgColor,
    hoverTextColor,
    hoverBorderColor,
  };
};

const createArrowLong = ({ iconColor = testColors.green }) => {
  return {
    iconColor,
  };
};

const createButton = ({
  borderRadius = "10px",
  bgColor = testColors.gray,
  textColor = testColors.cyan,
  borderColor = testColors.black,
  borderWidth = "1px",
  hoverBgColor = testColors.grayDark,
  hoverTextColor = testColors.blue,
  hoverBorderColor = testColors.orange,
}) => {
  return {
    borderRadius,
    bgColor,
    textColor,
    borderColor,
    borderWidth,
    hoverBgColor,
    hoverTextColor,
    hoverBorderColor,
  };
};

const createTypography = ({
  lineHeight = "110%",
  fontFamily = "Arial",
  textTransform = "none",
  letterSpacing = "normal",
  fontSizeMobile = "16px",
  fontSizeTablet = "18px",
  fontSizeLaptop = "18px",
  fontSizeDesktop = "21px",
}) => {
  return {
    lineHeight,
    fontFamily,
    textTransform,
    letterSpacing,
    fontSizeMobile,
    fontSizeTablet,
    fontSizeLaptop,
    fontSizeDesktop,
  };
};

const buttons = {
  primary: createButton({}),
  secondary: createButton({
    borderRadius: "20px",
    bgColor: testColors.blue,
    textColor: testColors.black,
    hoverBgColor: testColors.orange,
  }),
  tertiary: createButton({
    borderRadius: "1000px",
    borderWidth: "0",
    bgColor: testColors.cyan,
    textColor: testColors.red,
    hoverBgColor: testColors.pink,
  }),
};

const typographies = {
  h2: createTypography({
    fontSizeMobile: "35px",
    fontSizeTablet: "45px",
    fontSizeLaptop: "45px",
    fontSizeDesktop: "55px",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
  }),
  h3: createTypography({
    fontSizeMobile: "24px",
    fontSizeTablet: "28px",
    fontSizeLaptop: "28px",
    fontSizeDesktop: "34px",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
  }),
  h4: createTypography({
    fontSizeMobile: "18px",
    fontSizeTablet: "18px",
    fontSizeLaptop: "18px",
    fontSizeDesktop: "21px",
    lineHeight: "120%",
  }),
  h5: createTypography({
    fontSizeMobile: "12px",
    fontSizeTablet: "12px",
    fontSizeLaptop: "12px",
    fontSizeDesktop: "14px",
    lineHeight: "100%",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  }),
  p1: createTypography({
    fontSizeMobile: "14px",
    fontSizeTablet: "14px",
    fontSizeLaptop: "14px",
    fontSizeDesktop: "16px",
    lineHeight: "140%",
  }),
  p2: createTypography({
    fontSizeMobile: "8px",
    fontSizeTablet: "9px",
    fontSizeLaptop: "9px",
    fontSizeDesktop: "11px",
  }),
};

const customColors = {
  accent: testColors.themeDark.accent,
  "accent-hover": testColors.themeDark.accentHover,
  background: testColors.themeDark.background,
  "text-primary": testColors.themeDark.textPrimary,
  stroke: testColors.themeDark.textSecondary,
  "text-secondary": testColors.themeDark.textSecondary,
  "extra-1": testColors.blue,
  "extra-2": testColors.cyan,
  "extra-3": testColors.grayDark,
  "extra-4": testColors.cyan,
};

const arrowsCube = {
  primary: createArrowCube({}),
  secondary: createArrowCube({
    bgColor: testColors.green,
    borderRadius: "0",
    iconColor: testColors.red,
  }),
  tertiary: createArrowCube({
    bgColor: testColors.orange,
    iconColor: testColors.pink,
    borderColor: testColors.blue,
    hoverBgColor: testColors.cyan,
  }),
};

const arrowLong = createArrowLong({});

export const uiKitContainerDecoratorProps = {
  customColors,
  buttons,
  typographies,
  arrowsCube,
  arrowLong,
};

export const UiKitContainerDecorator = (Story) => {
  return (
    <UiKitContainer {...uiKitContainerDecoratorProps}>{Story()}</UiKitContainer>
  );
};
