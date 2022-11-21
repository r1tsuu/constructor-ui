import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { Footer } from "./Footer";
import { footerArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.FOOTER,
  component: Footer,
  args: footerArgs,
});

export const Default = (args) => {
  return <Footer {...parseArgs(args)} />;
};
