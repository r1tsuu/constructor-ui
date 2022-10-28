import React from "react";
import { UiKitContainerDecorator } from "../../../stories-decorators/UiKitContainerDecorator";
import { Arrow } from "./Arrow";

export default {
  title: "UI KIT/Arrow",
  component: Arrow,
  argTypes: {
    "data-theme": {
      options: ["dark", "light", "custom"],
      control: {
        type: "radio",
      },
    },
    type: {
      options: [
        "cube-default",
        "cube-primary",
        "cube-secondary",
        "cube-tertiary",
        "long-default",
        "long-custom",
      ],
      control: {
        type: "radio",
      },
    },
    as: {
      table: { disable: true },
    },
    isPrev: {
      control: "boolean",
    },
  },
  decorators: [UiKitContainerDecorator],
  args: {
    "data-theme": "dark",
    type: "cube-default",
    isPrev: false,
  },
};

export const Default = (args) => <Arrow {...args} />;
