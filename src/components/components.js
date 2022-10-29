import React from "react";
import {
  PhotoTextButton,
  photoTextButtonArgs,
  photoTextButtonContentResolver,
} from "./sections/PhotoTextButton";
import { useEnvironment } from "../contexts/EnvironmentContext";

import { COMPONENT_KEYS } from "../utils/constants";
import { parseArgs } from "../utils";

class X {
  d = 3;
}

const section = (Component, allArgs, contentResolver) => {
  const defaultSettings = parseArgs(allArgs.args).settings;
  return {
    initSettings: (onSettingsChange) => onSettingsChange(defaultSettings),
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

export const components = {
  [COMPONENT_KEYS.PHOTO_TEXT_BUTTON]: section(
    PhotoTextButton,
    photoTextButtonArgs,
    photoTextButtonContentResolver
  ),
};
