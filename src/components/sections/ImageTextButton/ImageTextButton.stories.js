import React from "react";
import {
  createSection,
  textArg,
  buttonArg,
  radioArg,
  parseArgs,
} from "../../../utils/stories-utils";

import { ImageTextButton } from "./ImageTextButton";

export default createSection({
  name: "Image Text Button",
  component: ImageTextButton,
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

export const Default = (args) => <ImageTextButton {...parseArgs(args)} />;
