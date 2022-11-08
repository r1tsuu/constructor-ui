import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { Documentation } from "./Documentation";
import { documentationArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.DOCUMENTATION,
  component: Documentation,
  args: documentationArgs,
});

export const Default = (args) => <Documentation {...parseArgs(args)} />;
