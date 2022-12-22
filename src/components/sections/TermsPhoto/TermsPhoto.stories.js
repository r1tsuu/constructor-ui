import React from "react";

import { parseArgs } from "../../../utils";
import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";

import { TermsPhoto } from "./TermsPhoto";
import { termsPhotoArgs } from "./args";

import icon from "./LL_icons_DIM.gif";

export default createSection({
  name: COMPONENT_KEYS.TERMS_PHOTO,
  component: TermsPhoto,
  args: termsPhotoArgs,
});

export const Default = (args) => (
  <TermsPhoto photo={icon} {...parseArgs(args)} />
);
