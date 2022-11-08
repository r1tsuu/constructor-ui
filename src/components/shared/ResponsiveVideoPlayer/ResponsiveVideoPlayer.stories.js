import React from "react";

import { UiKitContainerDecorator } from "../../../stories-decorators/UiKitContainerDecorator";
import image from "../../../assets/img-placeholder.png";

import { ResponsiveVideoPlayer } from "./ResponsiveVideoPlayer";

export default {
  title: "UI KIT/Responsive Video Player",
  component: ResponsiveVideoPlayer,
  decorators: [UiKitContainerDecorator],
  argTypes: {
    "data-theme": {
      options: ["dark", "light", "custom"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    src: "https://www.youtube.com/watch?v=JouMAHQXx-g",
    "data-theme": "dark",
    previewPhotoSrc: image,
  },
};

export const Default = (args) => <ResponsiveVideoPlayer {...args} />;
