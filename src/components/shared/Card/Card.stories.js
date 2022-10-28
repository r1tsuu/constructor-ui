import React from "react";
import { Section } from "..";
import { UiKitContainerDecorator } from "../../../stories-decorators/UiKitContainerDecorator";
import { colorType, themeType } from "../../../utils/stories-utils";

import { Card } from "./Card";

const argTypes = {
  borderColor: colorType(),
  bg: colorType(),
  "data-theme": themeType(),
};

export default {
  title: "UI KIT/Card",
  component: Card,
  argTypes,
  decorators: [UiKitContainerDecorator],
  args: {
    "data-theme": "dark",
    borderColor: "stroke",
    bg: "background",
  },
};

export const Default = (args) => (
  <Section
    theme={args["data-theme"]}
    style={{
      paddingTop: "50px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Card
      borderColor={args.borderColor}
      bg={args.bg}
      style={{
        padding: "55px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",
        color: "red",
      }}
    >
      Rendered In Card
    </Card>
  </Section>
);
