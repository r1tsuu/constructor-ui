import { args, argsWithBase } from "../../../utils/stories-utils";

const typographyArg = (type) => {
  const args = {
    lineHeight: "110%",
    fontFamily: "Arial",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    fontSizeMobile: "24px",
    fontSizeTablet: "28px",
    fontSizeLaptop: "28px",
    fontSizeDesktop: "34px",
  };

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
