import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { ConstructionProgress } from "./ConstructionProgress";
import { constructionProgressArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.CONSTRUCTION_PROGRESS,
  component: ConstructionProgress,
  args: constructionProgressArgs,
});

export const Default = (args) => <ConstructionProgress {...parseArgs(args)} />;
