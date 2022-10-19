import React from "react";

import { UiKitContainerDecorator } from "../../../.storybook/decorators";
import { colorType, themeType } from "../../utils/stories-utils";

import { ColorsInjector } from "./ColorsInjector";

const argTypes = {
  textColor: colorType(),
  background: colorType(),
  borderColor: colorType(),
  theme: themeType(),
};

export default {
  title: "UI KIT/Colors Injector Container",
  component: ColorsInjector,
  argTypes,
  args: {
    textColor: "primary",
    background: "background",
    theme: "dark",
    borderColor: "stroke",
  },
  decorators: [UiKitContainerDecorator],
};

export const Default = (args) => {
  const { theme, ...restArgs } = args;

  return (
    <div
      data-theme={theme}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 100px",
        height: "500px",
      }}
    >
      <ColorsInjector {...restArgs}>
        <div
          className="testClass"
          style={{
            padding: "60px",
            borderWidth: "1px",
            borderStyle: "solid",
            fontSize: "45px",
          }}
        >
          Rendered In Div with injected colors
        </div>
      </ColorsInjector>
    </div>
  );
};
