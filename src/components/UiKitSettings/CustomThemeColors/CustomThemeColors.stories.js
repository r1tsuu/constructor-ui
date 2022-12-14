import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { createSetting } from "../../../utils/stories-utils";
import { CustomThemeColors } from "./CustomThemeColors";
import { customThemeColorsArgs } from "./customThemeColorsArgs";

export default createSetting({
  name: COMPONENT_KEYS.CUSTOM_THEME_COLORS,
  component: CustomThemeColors,
  args: customThemeColorsArgs,
});

export const Default = (args) => <CustomThemeColors {...args} />;
