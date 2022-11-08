import React from "react";
import { parseArgs } from "../../../utils";
import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";

import { Characteristics } from "./Characteristics";
import { characteristicsArgs } from "./characteristicsArgs";

export default createSection({
  name: COMPONENT_KEYS.CHARACTERISTICS,
  component: Characteristics,
  args: characteristicsArgs,
});

export const Default = (args) => <Characteristics {...parseArgs(args)} />;
