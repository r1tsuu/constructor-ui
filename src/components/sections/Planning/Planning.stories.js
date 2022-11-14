import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { PlanningStaticContainer } from "./Planning";
import { planningArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.PLANNING,
  component: PlanningStaticContainer,
  args: planningArgs,
});

export const Default = (args) => (
  <PlanningStaticContainer {...parseArgs(args)} />
);
