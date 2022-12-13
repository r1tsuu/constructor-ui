import React from "react";

import { parseArgs } from "../../../utils";
import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";

import { TermsPhoto } from "./TermsPhoto";
import { termsPhotoArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.TERMS_PHOTO,
  component: TermsPhoto,
  args: termsPhotoArgs,
});

export const Default = (args) => <TermsPhoto {...parseArgs(args)} />;
