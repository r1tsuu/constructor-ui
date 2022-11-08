import React from "react";

import { parseArgs } from "../../../utils";
import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";

import { Terms } from "./Terms";
import { termsArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.TERMS,
  component: Terms,
  args: termsArgs,
});

export const Default = (args) => <Terms {...parseArgs(args)} />;
