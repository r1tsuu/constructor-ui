import React from "react";
import { UiKitContainerDecorator } from "../../../stories-decorators/UiKitContainerDecorator";

import { Modal } from "./Modal";

export default {
  title: "UI KIT/Modal",
  component: Modal,
  decorators: [UiKitContainerDecorator],
  argTypes: {
    dataTheme: {
      options: ["dark", "light", "custom"],
      control: {
        type: "radio",
      },
    },
    backgroundColor: {
      control: {
        type: "color",
      },
    },
  },
  args: {
    dataTheme: "dark",
    isOpen: false,
    zIndex: 10,
    animationDurationEnter: 150,
    animationDurationExit: 75,
    backgroundColor: "background",
    backgroundOpacity: 0.9,
  },
};

export const Default = ({ dataTheme, ...args }) => (
  <Modal data-theme={dataTheme} {...args}>
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "60px",
        color: "red",
      }}
    >
      <h1>In modal</h1>
    </div>
  </Modal>
);
