import React from "react";
import { UiKitContainerDecorator } from "../../../stories-decorators/UiKitContainerDecorator";
import { Section } from "../Section";

import { Input } from "./Input";
// const Input = () => <div />;

export default {
  title: "UI KIT/Input",
  component: Input,
  argTypes: {
    dataTheme: {
      options: ["dark", "light", "custom"],
      control: {
        type: "radio",
      },
    },
    type: {
      options: ["default-1", "default-2", "primary", "secondary", "tertiary"],
      control: {
        type: "radio",
      },
    },
  },
  args: {
    dataTheme: "dark",
    type: "default-1",
    placeholder: "Placeholder",
    errorMessage: "",
    isRequired: true,
    isTextarea: false,
  },

  decorators: [UiKitContainerDecorator],
};

export const Default = ({ dataTheme, ...args }) => (
  <div
    data-theme={dataTheme}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "500px",
      padding: "0 200px",
      backgroundColor: "var(--color-background)",
    }}
  >
    <Input {...args} />
  </div>
);
