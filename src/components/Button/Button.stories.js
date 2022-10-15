import React from "react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    "data-theme": {
      options: ["dark", "light", "custom"],
      control: {
        type: "radio",
      },
    },
    type: {
      options: ["default", "primary", "secondary", "tertiary"],
      control: {
        type: "radio",
      },
    },
    as: {
      table: { disable: true },
    },
  },
  args: {
    "data-theme": "dark",
    type: "default",
    children: "Текст кнопки",
  },
};

export const Default = (args) => <Button {...args} />;
