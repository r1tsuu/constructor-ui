import React from "react";
import { UiKitContainerDecorator } from "../../../../.storybook/decorators";

import { Section } from "./Section";

export default {
  title: "UI KIT/Section",
  component: Section,
  argTypes: {
    "data-theme": {
      options: ["dark", "light", "custom"],
      control: {
        type: "radio",
      },
    },
    bg: {
      control: "color",
    },
  },
  args: {
    bg: "background",
    "data-theme": "dark",
  },
  decorators: [UiKitContainerDecorator],
};

export const Default = (args) => (
  <Section
    style={{
      display: "flex",
      width: "100%",
      height: "500px",
      justifyContent: "center",
      alignItems: "center",
      color: "red",
      fontSize: "35px",
    }}
    {...args}
  >
    Rendered In Section
  </Section>
);
