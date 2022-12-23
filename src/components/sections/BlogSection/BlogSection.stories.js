import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { BlogSection } from "./BlogSection";
import { blogSectionArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.BLOG_SECTION,
  component: BlogSection,
  args: blogSectionArgs,
});

export const Default = (args) => <BlogSection {...parseArgs(args)} />;
