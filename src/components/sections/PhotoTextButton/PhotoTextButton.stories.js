import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { PhotoTextButton } from "./PhotoTextButton";
import { photoTextButtonArgs } from "./args";

import icon from "./icon.svg";

export default createSection({
  name: COMPONENT_KEYS.PHOTO_TEXT_BUTTON,
  component: PhotoTextButton,
  args: photoTextButtonArgs,
});

export const Default = (args) => (
  <PhotoTextButton icon={icon} {...parseArgs(args)} />
);
