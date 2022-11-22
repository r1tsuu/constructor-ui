import React from "react";
import defaultIcon from "./defaultIcon.svg";
import { welcomeSliderTextArgs } from "./args";

import { createSection } from "../../../utils/stories-utils";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { WelcomeSliderText } from "./WelcomeSliderText";
import { parseArgs } from "../../../utils";

export default createSection({
  name: COMPONENT_KEYS.WELCOME_SLIDER_TEXT,
  args: welcomeSliderTextArgs,
  component: WelcomeSliderText,
});

export const Default = (args) => <WelcomeSliderText {...parseArgs(args)} />;
