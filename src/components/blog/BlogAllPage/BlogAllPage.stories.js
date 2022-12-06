import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { BlogAllPage } from "./BlogAllPage";
import { blogAllPageArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.BLOG_ALL_PAGE,
  component: BlogAllPage,
  args: blogAllPageArgs,
});

export const Default = (args) => <BlogAllPage {...parseArgs(args)} />;
