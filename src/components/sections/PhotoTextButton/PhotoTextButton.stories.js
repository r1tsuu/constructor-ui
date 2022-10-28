import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { PhotoTextButton } from "./PhotoTextButton";
import { photoTextButtonArgs } from "./photoTextButtonArgs";

export default createSection({
  name: COMPONENT_KEYS.PHOTO_TEXT_BUTTON,
  component: PhotoTextButton,
  args: photoTextButtonArgs,
});

export const Default = (args) => <PhotoTextButton {...parseArgs(args)} />;

Default.args = {
  subTitle: "будуємо з любов’ю",
  title: "Про комплекс",
  description: `Тут ви маєте розмістити необхідне описання блокуНайсухіше місце на Землі знаходиться в Антарктиді. Хоч як дивно це звучить, але деякі ділянки антарктичної долини Мак-Мердо не бачили опадів уже 2 мільйона років.`,
  buttonName: "Текст кнопки",
};
