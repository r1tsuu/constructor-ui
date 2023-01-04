import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { Header } from "./Header";
import { headerArgs } from "./args";
import { assets } from "../../../assets";

export default createSection({
  name: COMPONENT_KEYS.HEADER,
  component: Header,
  args: headerArgs,
});

export const Default = (args) => {
  return (
    <Header
      languages={["ua", "en"]}
      onLanguageChange={() => {}}
      currentLanguage={"ua"}
      menuPhoto={assets.imgPlaceholderHeight}
      {...parseArgs(args)}
    />
  );
};
