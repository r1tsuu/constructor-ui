import React from "react";
import { parseArgs } from "../../../utils";
import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";

import { Advantages } from "./Advantages";
import { advantagesArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.ADVANTAGES,
  component: Advantages,
  args: advantagesArgs,
});

export const Default = (args) => {
  return <Advantages {...parseArgs(args)} />;
};
