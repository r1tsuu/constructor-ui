import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { parseArgs } from "../../../utils";
import { createSetting } from "../../../utils/stories-utils";
import { Arrows } from "./Arrows";
import { arrowsArgs } from "./arrowsArgs";

export default createSetting({
  name: COMPONENT_KEYS.ARROWS,
  component: Arrows,
  args: arrowsArgs,
});

export const Default = (args) => {
  return <Arrows {...parseArgs(args)} />;
};
