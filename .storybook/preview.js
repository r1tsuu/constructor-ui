import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../src/styles/ui-kit-vars.scss";
import "@storybook/addon-console";
import { InStorybookDecorator } from "./decorators";

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    presetColors: [
      {
        color: "background",
        title: "theme background",
      },
      {
        color: "text-primary",
        title: "theme text-primary",
      },
      {
        color: "text-secondary",
        title: "theme text-secondary",
      },
      {
        color: "accent",
        title: "theme accent-color",
      },
      {
        color: "stroke",
        title: "theme stroke-color",
      },
      {
        color: "extra-1",
        title: "theme extra-1 color",
      },
      {
        color: "extra-2",
        title: "theme extra-2 color",
      },
      {
        color: "extra-3",
        title: "theme extra-3 color",
      },
      {
        color: "extra-4",
        title: "theme extra-4 color",
      },
    ],
  },
};

console.log(window);

export const decorators = [InStorybookDecorator];
