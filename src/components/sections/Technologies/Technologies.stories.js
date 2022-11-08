import React from "react";

import i_1 from "./story-assets/1.svg";
import i_2 from "./story-assets/2.svg";
import i_3 from "./story-assets/3.svg";
import i_4 from "./story-assets/4.svg";
import i_5 from "./story-assets/5.svg";
import i_6 from "./story-assets/6.svg";
import i_7 from "./story-assets/7.svg";
import i_8 from "./story-assets/8.svg";
import i_9 from "./story-assets/9.svg";
import i_10 from "./story-assets/10.svg";
import i_11 from "./story-assets/11.svg";

import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";
import { Technologies } from "./Technologies";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { technologiesArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.TECHNOLOGIES,
  component: Technologies,
  args: technologiesArgs,
});

export const Default = (args) => <Technologies {...parseArgs(args)} />;
