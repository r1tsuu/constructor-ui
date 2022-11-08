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

import {
  Characteristics,
  characteristicsArgs,
  characteristicsContentResolver,
} from "./sections/Characteristics";

import { Terms, termsArgs, termsContentResolver } from "./sections/Terms";

import {
  Technologies,
  technologiesArgs,
  technologiesContentResolver,
} from "./sections/Technologies";

import {
  Documentation,
  documentationArgs,
  documentationContentResolver,
} from "./sections/Documentation";

import {
  PhotoQuote,
  photoQuoteArgs,
  photoQuoteContentResolver,
} from "./sections/PhotoQuote";

import { Video, videoArgs, videoContentResolver } from "./sections/Video";

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
  const defaultArgs = allArgs.args;
  return {
    defaultSettings: defaultArgs,
    Component({ settings, ...content }) {
      const env = useEnvironment();
      return (
        <Component
          settings={parseArgs(settings ?? defaultArgs).settings}
          {...contentResolver({
            ...content,
            env,
            defaultContent: defaultArgs,
          })}
        />
      );
    },
    type: "section",
  };
};

export const setting = (Component, allArgs) => {
  const defaultSettings = allArgs.args;
  return {
    defaultSettings,
    initSettings: (setSettings) => setSettings(defaultSettings),
    Component: ({ settings }) => (
      <Component {...parseArgs(settings ?? defaultSettings)} />
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
  [COMPONENT_KEYS.CHARACTERISTICS]: section(
    Characteristics,
    characteristicsArgs,
    characteristicsContentResolver
  ),
  [COMPONENT_KEYS.TERMS]: section(Terms, termsArgs, termsContentResolver),
  [COMPONENT_KEYS.TECHNOLOGIES]: section(
    Technologies,
    technologiesArgs,
    technologiesContentResolver
  ),
  [COMPONENT_KEYS.DOCUMENTATION]: section(
    Documentation,
    documentationArgs,
    documentationContentResolver
  ),
  [COMPONENT_KEYS.PHOTO_QUOTE]: section(
    PhotoQuote,
    photoQuoteArgs,
    photoQuoteContentResolver
  ),
  [COMPONENT_KEYS.VIDEO]: section(Video, videoArgs, videoContentResolver),
};
