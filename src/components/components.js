import React from "react";
import { Arrows, arrowsArgs } from "./UiKitSettings/Arrows";
import {
  PhotoTextButton,
  photoTextButtonArgs,
  photoTextButtonContentResolver,
} from "./sections/PhotoTextButton";

import {
  Advantages,
  advantagesArgs,
  advantagesContentResolver,
} from "./sections/Advantages";

import { useEnvironment } from "../contexts/EnvironmentContext";

import { COMPONENT_KEYS } from "../utils/constants";
import { parseArgs } from "../utils";
import { Buttons, buttonsArgs } from "./UiKitSettings/Buttons";
import {
  CustomThemeColors,
  customThemeColorsArgs,
} from "./UiKitSettings/CustomThemeColors";
import { Typographies, typographiesArgs } from "./UiKitSettings/Typographies";

const section = (Component, allArgs, contentResolver) => {
  const defaultSettings = parseArgs(allArgs.args).settings;
  return {
    defaultSettings,
    initSettings: (setSettings) => setSettings(defaultSettings),
    Component: ({ settings, ...content }) => {
      const env = useEnvironment();

      return (
        <Component
          settings={settings ?? defaultSettings}
          {...contentResolver({ ...content, env })}
        />
      );
    },
    type: "section",
  };
};

export const setting = (Component, allArgs) => {
  const defaultSettings = parseArgs(allArgs.args);
  return {
    defaultSettings,
    initSettings: (setSettings) => setSettings(defaultSettings),
    Component: ({ settings }) => (
      <Component {...(settings ?? defaultSettings)} />
    ),
    type: "setting",
  };
};

export const components = {
  [COMPONENT_KEYS.ARROWS]: setting(Arrows, arrowsArgs),
  [COMPONENT_KEYS.BUTTONS]: setting(Buttons, buttonsArgs),
  [COMPONENT_KEYS.CUSTOM_THEME_COLORS]: setting(
    CustomThemeColors,
    customThemeColorsArgs
  ),
  [COMPONENT_KEYS.TYPOGRAPHIES]: setting(Typographies, typographiesArgs),
  [COMPONENT_KEYS.PHOTO_TEXT_BUTTON]: section(
    PhotoTextButton,
    photoTextButtonArgs,
    photoTextButtonContentResolver
  ),
  [COMPONENT_KEYS.ADVANTAGES]: section(
    Advantages,
    advantagesArgs,
    advantagesContentResolver
  ),
};
