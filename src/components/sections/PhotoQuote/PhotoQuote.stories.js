import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { PhotoQuote } from "./PhotoQuote";
import { photoQuoteArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.PHOTO_QUOTE,
  component: PhotoQuote,
  args: photoQuoteArgs,
});

export const Default = (args) => <PhotoQuote {...parseArgs(args)} />;
