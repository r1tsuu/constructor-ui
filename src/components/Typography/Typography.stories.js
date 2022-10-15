import React from "react";

import { Typography } from "./Typography";

export default {
  title: "Typography",
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
    themeColor: {
      options: ["primary", "secondary", "accent"],
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
  },
  args: {
    "data-theme": "dark",
    children: "Текст типография",
    themeColor: "primary",
    type: "h2",
  },
};

export const Default = (args) => <Typography {...args} />;
