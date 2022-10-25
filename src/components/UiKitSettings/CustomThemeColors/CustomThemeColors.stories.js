import React from "react";
import { COMPONENT_NAMES, testColors } from "../../../utils/constants";
import { colorArg, createSetting } from "../../../utils/stories-utils";
import { CustomThemeColors } from "./CustomThemeColors";

export default createSetting({
  name: COMPONENT_NAMES.SETTINGS.DEFAULT_UI_KIT_CUSTOM_THEME_COLORS,
  component: CustomThemeColors,
  args: {
    accent: colorArg({
      defaultValue: testColors.themeDark.accent,
    }),
    "accent-hover": colorArg({
      defaultValue: testColors.themeDark.accentHover,
    }),
    background: colorArg({
      defaultValue: testColors.themeDark.background,
    }),
    "text-primary": colorArg({
      defaultValue: testColors.themeDark.textPrimary,
    }),

    stroke: colorArg({ defaultValue: testColors.themeDark.stroke }),
    "text-secondary": colorArg({
      defaultValue: testColors.themeDark.textSecondary,
    }),
    "extra-1": colorArg({ defaultValue: testColors.blue }),
    "extra-2": colorArg({ defaultValue: testColors.cyan }),
    "extra-3": colorArg({ defaultValue: testColors.grayDark }),
    "extra-4": colorArg({ defaultValue: testColors.cyan }),
  },
});

export const Default = (args) => <CustomThemeColors {...args} />;
