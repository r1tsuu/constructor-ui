import React from "react";
import { COMPONENT_NAMES } from "../../../utils/constants";
import {
  argsWithBase,
  createSetting,
  parseArgs,
} from "../../../utils/stories-utils";

import { Typographies } from "./Typographies";

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

export default createSetting({
  name: COMPONENT_NAMES.SETTINGS.DEFAULT_UI_KIT_TYPOGRAPHIES,
  component: Typographies,
  args: {
    ...typographyArg("h2"),
    ...typographyArg("h3"),
    ...typographyArg("h4"),
    ...typographyArg("h5"),
    ...typographyArg("p1"),
    ...typographyArg("p2"),
  },
});

export const Default = (args) => <Typographies {...parseArgs(args)} />;
