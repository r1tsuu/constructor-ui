import React from "react";
import { args, argsWithBase, parseArgs } from "../../../utils/stories-utils";
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

export default {
  title: "UI KIT Settings/Buttons",
  component: Buttons,
  ...args(
    {
      ...buttonArg("primary"),
      ...buttonArg("secondary"),
      ...buttonArg("tertiary"),
    },
    true
  ),
};

export const Default = (args) => <Buttons {...parseArgs(args)} />;
