import React from "react";
import { COMPONENT_NAMES } from "../../../utils/constants";
import {
  createSection,
  textArg,
  buttonArg,
  radioArg,
  parseArgs,
} from "../../../utils/stories-utils";

import { PhotoTextButton } from "./PhotoTextButton";

export default createSection({
  name: COMPONENT_NAMES.SECTIONS.DEFAULT_BLOCK_PHOTO_TEXT_BUTTON,
  component: PhotoTextButton,
  args: {
    subTitle: textArg({
      defaultValue: "будуємо з любов’ю",
      typography: "h5",
      color: "accent",
    }),
    title: textArg({
      defaultValue: "Про комплекс",
      color: "primary",
      typography: "h2",
    }),
    description: textArg({
      defaultValue: `Тут ви маєте розмістити необхідне описання блокуНайсухіше місце на Землі знаходиться в Антарктиді. Хоч як дивно це звучить, але деякі ділянки антарктичної долини Мак-Мердо не бачили опадів уже 2 мільйона років.`,
      color: "text-secondary",
      typography: "p1",
    }),
    isReverse: false,
    buttonType: buttonArg({}),
    buttonName: "Текст кнопки",
    buttonPosition: radioArg({
      options: ["left", "center", "right"],
      defaultValue: "left",
    }),
  },
});

export const Default = (args) => <PhotoTextButton {...parseArgs(args)} />;
