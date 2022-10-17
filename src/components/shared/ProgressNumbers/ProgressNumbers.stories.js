import React from "react";
import { UiKitContainerDecorator } from "../../../../.storybook/decorators";

import { ProgressNumbers } from "./ProgressNumbers";

export default {
  title: "UI KIT/Progress Numbers",
  component: ProgressNumbers,
  argTypes: {
    "data-theme": {
      options: ["dark", "light", "custom"],
      control: {
        type: "radio",
      },
    },
  },
  args: {
    value: 1,
    maxValue: 9,
    "data-theme": "dark",
  },
  decorators: [UiKitContainerDecorator],
};

export const Default = (args) => <ProgressNumbers {...args} />;
