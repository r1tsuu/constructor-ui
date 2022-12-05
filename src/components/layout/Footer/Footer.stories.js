import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { Footer } from "./Footer";
import logo from "../Header/logo.svg";
import { footerArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.FOOTER,
  component: Footer,
  args: {
    args: {
      ...footerArgs.args,
      withLogo: false,
    },
    argTypes: {
      ...footerArgs.argTypes,
      withLogo: {
        control: "boolean",
      },
    },
  },
});

export const Default = (args) => {
  return <Footer logo={args.withLogo && logo} {...parseArgs(args)} />;
};
