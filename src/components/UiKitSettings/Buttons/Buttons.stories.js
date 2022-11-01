import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { parseArgs } from "../../../utils";
import { createSetting } from "../../../utils/stories-utils";
import { Buttons } from "./Buttons";
import { buttonsArgs } from "./buttonsArgs";

export default createSetting({
  name: COMPONENT_KEYS.BUTTONS,
  component: Buttons,
  args: buttonsArgs,
});

export const Default = (args) => <Buttons {...parseArgs(args)} />;
