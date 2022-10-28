import { testColors } from "../../../utils/constants";
import { args, colorArg } from "../../../utils/stories-utils";

export const customThemeColorsArgs = args(
  {
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
  true
);
