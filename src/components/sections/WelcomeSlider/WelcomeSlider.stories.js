import React from "react";

import { welcomeSliderArgs } from "./args";

import { createSection } from "../../../utils/stories-utils";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { WelcomeSlider } from "./WelcomeSlider";
import { parseArgs } from "../../../utils";

export default createSection({
  name: COMPONENT_KEYS.WELCOME_SLIDER,
  args: welcomeSliderArgs,
  component: WelcomeSlider,
});

export const Default = (args) => <WelcomeSlider {...parseArgs(args)} />;
