import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { BlogPage } from "./BlogPage";
import { blogPageArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.BLOG_PAGE,
  component: BlogPage,
  args: blogPageArgs,
});

export const Default = (args) => <BlogPage {...parseArgs(args)} />;
