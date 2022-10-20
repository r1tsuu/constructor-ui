import React from "react";
import { parseArgs } from "../../src/utils/stories-utils";

export const SectionDecorator = (Story, context) => {
  const defaultStoryEl = Story();
  // const element = React.cloneElement(
  //   defaultStoryEl,
  //   parseArgs(defaultStoryEl.props)
  // );
  console.log(context);

  return defaultStoryEl;
};
