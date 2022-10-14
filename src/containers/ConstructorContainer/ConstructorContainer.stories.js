import React from "react";
import { ConstructorContainer } from "./ConstructorContainer";
import { testColors } from "../../utils/constants";

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
  secondary: createButton({ borderRadius: "0" }),
  tertiary: createButton({ borderRadius: "5px", borderWidth: "0" }),
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
  1: testColors.black,
  2: testColors.cyan,
  3: testColors.green,
  4: testColors.orange,
  5: testColors.pink,
  6: testColors.indigo,
  7: testColors.grayDark,
  8: testColors.yellow,
  9: testColors.purple,
  10: testColors.blue,
};

export default {
  title: "Constructor Container",
  component: ConstructorContainer,
  args: {
    buttons,
    typographies,
    customColors,
  },
};

const Story = (args) => {
  return <ConstructorContainer {...args} />;
};

export const Ui_Kit_Theme_Custom_Showcase = Story.bind({});

Ui_Kit_Theme_Custom_Showcase.args = {
  children: (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "20px",
        alignItems: "center",
      }}
    >
      <button className="button button-primary">Button Primary</button>
      <button className="button button-secondary">Button Secondary</button>
      <button className="button button-tertiary">Button Tertiary</button>
      <p className="text-accent typography-h2">Typography H2</p>
      <p className="typography-h3 text-custom-4">Typography H3</p>
      <p className="typography-h4">Typography H4</p>
      <p className="typography-h5">Typography H5</p>
      <p className="typography-p1">Typography P1</p>
      <p className="typography-p2">Typography P2</p>
    </div>
  ),
};
