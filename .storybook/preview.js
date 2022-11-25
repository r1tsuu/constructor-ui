import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../src/styles/index.scss";
import "../src/styles/reset.css";
import { InStorybookDecorator } from "./decorators";

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  layout: "fullscreen",
  sidebar: {
    disable: "true",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    presetColors: [
      {
        color: "transparent",
        title: "Transparent",
      },
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

export const decorators = [InStorybookDecorator];
