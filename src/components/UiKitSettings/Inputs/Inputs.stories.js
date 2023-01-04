import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { parseArgs } from "../../../utils";
import { createSetting } from "../../../utils/stories-utils";
import { Buttons } from "./Inputs";
import { buttonsArgs } from "./inputsArgs";

export default createSetting({
  name: COMPONENT_KEYS.INPUTS,
  component: Buttons,
  args: buttonsArgs,
});

export const Default = (args) => <Buttons {...parseArgs(args)} />;
