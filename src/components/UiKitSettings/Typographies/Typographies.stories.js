import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { parseArgs } from "../../../utils";
import { createSetting } from "../../../utils/stories-utils";

import { Typographies } from "./Typographies";
import { typographiesArgs } from "./typographiesArgs";

export default createSetting({
  name: COMPONENT_KEYS.TYPOGRAPHIES,
  component: Typographies,
  args: typographiesArgs,
});

export const Default = (args) => <Typographies {...parseArgs(args)} />;
