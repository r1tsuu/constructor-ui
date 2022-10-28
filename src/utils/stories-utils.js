import { UiKitContainerDecorator } from "../stories-decorators/UiKitContainerDecorator";

import { snakeToTitleCase } from "./utils";
import { ComponentDecorator } from "../stories-decorators/ComponentDecorator";

const resoveTitle = (prefix, name) => {
  return `${prefix}/${snakeToTitleCase(
    name
      .replace("DEFAULT_BLOCK", "")
      .replace("DEFAULT_UI_KIT", "")
      .toLowerCase()
  )}`;
};

export const createSection = ({ name, args, component }) => {
  return {
    title: resoveTitle("Sections", name),
    decorators: [UiKitContainerDecorator, ComponentDecorator],
    ...args,
    component,
  };
};

export const createSetting = ({ name, args, component }) => {
  return {
    title: resoveTitle("UI KIT Settings", name),
    ...args,
    decorators: [ComponentDecorator],
    component,
  };
};
