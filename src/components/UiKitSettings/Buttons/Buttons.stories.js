import React from "react";
import { COMPONENT_NAMES } from "../../../utils/constants";
import {
  argsWithBase,
  createSetting,
  parseArgs,
} from "../../../utils/stories-utils";
import { Buttons } from "./Buttons";

const buttonArg = (type) => {
  const args = {
    borderRadius: "10px",
    bgColor: "#6c757d",
    textColor: "#17a2b8",
    borderColor: "#000",
    borderWidth: "1px",
    hoverBgColor: "#343a40",
    hoverTextColor: "#007bff",
    hoverBorderColor: "#fd7e14",
  };

  return argsWithBase({ args, base: type });
};

export default createSetting({
  name: COMPONENT_NAMES.SETTINGS.DEFAULT_UI_KIT_BUTTONS,
  component: Buttons,
  args: {
    ...buttonArg("primary"),
    ...buttonArg("secondary"),
    ...buttonArg("tertiary"),
  },
});

export const Default = (args) => <Buttons {...parseArgs(args)} />;
