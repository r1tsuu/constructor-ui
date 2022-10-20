import React from "react";
import { InStorybookProvider } from "../../src/contexts/InStorybookContext";

export const InStorybookDecorator = (Story) => {
  return (
    <InStorybookProvider>
      <Story />
    </InStorybookProvider>
  );
};
