import React from "react";
import { UiKitContainerDecorator } from "../../../stories-decorators/UiKitContainerDecorator";

import { Typography } from "./Typography";

export default {
  title: "UI KIT/Typography",
  component: Typography,
  argTypes: {
    "data-theme": {
      options: ["dark", "light", "custom"],
      control: {
        type: "select",
      },
    },
    type: {
      options: ["h2", "h3", "h4", "h5", "p1", "p2"],
      control: {
        type: "select",
      },
    },
    color: {
      control: "color",
    },
    as: {
      table: { disable: true },
    },
    isHTML: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [UiKitContainerDecorator],
  args: {
    "data-theme": "dark",
    children: "Текст типография",
    color: "primary",
    type: "h2",
  },
};

export const Default = ({ color, ...args }) => (
  <Typography color={color.replace("text-", "")} {...args} />
);
