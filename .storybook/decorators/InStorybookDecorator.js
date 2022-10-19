import React from "react";
import { InStorybookProvider } from "../../src/contexts/InStorybookContext";

export const InStorybookDecorator = (Story) => (
  <InStorybookProvider>
    <Story />
  </InStorybookProvider>
);
