import React from "react";

import { videoArgs } from "./args";

import { createSection } from "../../../utils/stories-utils";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { Video } from "./Video";
import { parseArgs } from "../../../utils";

export default createSection({
  name: COMPONENT_KEYS.VIDEO,
  args: videoArgs,
  component: Video,
});

export const Default = (args) => <Video {...parseArgs(args)} />;
