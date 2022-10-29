import React from "react";
import {
  PhotoTextButton,
  photoTextButtonArgs,
  photoTextButtonPropsResolver,
} from "./sections/PhotoTextButton";

import { COMPONENT_KEYS } from "../utils/constants";
import { parseArgs } from "../utils";

const withPropsResolver = (Component, propsResolver) => {
  return (props) => {
    return <Component {...propsResolver(props)} />;
  };
};

const section = (Component, allArgs, propResolver) => ({
  Component: withPropsResolver(Component, propResolver),
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
