import { args, argsWithBase } from "../../../utils";

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

const typographyArg = (type) => {
  const args = typographies[type];

  return argsWithBase({ args, base: type });
};

export const typographiesArgs = args(
  {
    ...typographyArg("h2"),
    ...typographyArg("h3"),
    ...typographyArg("h4"),
    ...typographyArg("h5"),
    ...typographyArg("p1"),
    ...typographyArg("p2"),
  },
  true
);
