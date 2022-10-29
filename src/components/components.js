import React from "react";
import {
  PhotoTextButton,
  photoTextButtonArgs,
  photoTextButtonPropsResolver,
} from "./sections/PhotoTextButton";

import { COMPONENT_KEYS } from "../utils/constants";
import { parseArgs } from "../utils";

const section = (Component, allArgs, propsResolver) => ({
  Component: (props) => <Component {...propsResolver(props)} />,
  defaultSettings: parseArgs(allArgs.args).settings,
  type: "section",
});

export const components = {
  [COMPONENT_KEYS.PHOTO_TEXT_BUTTON]: section(
    PhotoTextButton,
    photoTextButtonArgs,
    photoTextButtonPropsResolver
  ),
};
