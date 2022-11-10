import React from "react";
import { parseArgs } from "../../../utils";
import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";

import { AdvantagesSlider } from "./AdvantagesSlider";
import { advantagesSliderArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.ADVANTAGES_SLIDER,
  component: AdvantagesSlider,
  args: advantagesSliderArgs,
});

export const Default = (args) => {
  return <AdvantagesSlider {...parseArgs(args)} />;
};
