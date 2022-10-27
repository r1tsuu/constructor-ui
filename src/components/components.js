import React from "react";
import {
  useFieldsResolver,
  withResolvedProps,
} from "../hooks/useFieldsResolver";
import { PhotoTextButton } from "./sections";

import {
  Arrows,
  Buttons,
  CustomThemeColors,
  Typographies,
} from "./UiKitSettings";

function parseArgs(obj) {
  const result = {};

  // For each object path (property key) in the object
  for (const objectPath in obj) {
    const parts = objectPath.split("_");

    // Create sub-objects along path as needed
    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();
      target = target[part] = target[part] || {};
    }

    // Set value at end of path
    target[parts[0]] = obj[objectPath];
  }

  return result;
}

const types = {
  section: "section",
  ui_kit_setting: "ui_kit_setting",
};

export const COMPONENT_KEYS = {
  PHOTO_TEXT_BUTTON: "PHOTO_TEXT_BUTTON",
  ARROWS: "ARROWS",
  BUTTONS: "BUTTONS",
  CUSTOM_THEME_COLORS: "CUSTOM_THEME_COLORS",
  TYPOGRAPHIES: "TYPOGRAPHIES",
};

const sectionComponents = {
  PHOTO_TEXT_BUTTON: {
    name: "Photo Text Button",
    type: types.section,
    Component: withResolvedProps(PhotoTextButton, {
      subTitle: {
        type: "text",
      },
      title: {
        type: "text",
      },
      description: {
        type: "text",
      },
      buttonName: {
        type: "text",
      },
      photoSource: {
        type: "file",
      },
    }),
  },
};

const withParsedSettings = (Component) => {
  return ({ settings }) => <Component {...parseArgs(settings)} />;
};

const settingComponents = {
  [COMPONENT_KEYS.ARROWS]: {
    name: "Arrows",
    type: types.ui_kit_setting,

    Component: withParsedSettings(Arrows),
  },
  [COMPONENT_KEYS.BUTTONS]: {
    name: "Buttons",
    type: types.ui_kit_setting,
    Component: withParsedSettings(Buttons),
  },
  [COMPONENT_KEYS.CUSTOM_THEME_COLORS]: {
    name: "Custom Theme Colors",
    type: types.ui_kit_setting,
    component: withParsedSettings(CustomThemeColors),
  },
  [COMPONENT_KEYS.TYPOGRAPHIES]: {
    name: "Typographies",
    type: types.ui_kit_setting,
    component: withParsedSettings(Typographies),
  },
};

export const COMPONENTS = {
  ...settingComponents,
  ...sectionComponents,
};
