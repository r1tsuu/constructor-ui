import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { Location } from "./Location";
import { locationArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.LOCATION,
  component: Location,
  args: locationArgs,
});

export const Default = (args) => <Location {...parseArgs(args)} />;
