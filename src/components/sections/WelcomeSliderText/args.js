import { assets } from "../../../assets";
import defaultIcon from "./defaultIcon.svg";

import {
  arg,
  arrowArg,
  booleanArg,
  buttonArg,
  colorArg,
  hiddenArg,
  radioArg,
  sectionArgs,
  textArg,
} from "../../../utils";

const _item = {
  title: "Lorem ipsum",
  description: "Lorem ipsum dolor sit amet, magna aliqua.",
  buttonLink: "https://google.com",
  photoSource: assets.imgPlaceholder,
  photoSourceMobile: assets.imgPlaceholder,
};

export const welcomeSliderTextArgs = sectionArgs({
  arrowType: arrowArg({ arrowType: "long-default" }),
  items: Array(6).fill(_item),
  buttonName: hiddenArg({
    value: "Детальніше",
  }),
  iconSource: hiddenArg({
    value: defaultIcon,
  }),
  enableIcon: booleanArg({
    defaultValue: true,
    name: "Увімкнути / Вимкнути іконку",
  }),
  block_titleSettings: textArg({
    typography: "h2",
    color: "text-primary",
    name: "Блок - заголовок",
  }),
  block_descriptionSettings: textArg({
    typography: "p1",
    color: "text-secondary",
    name: "Блок - опис",
  }),
  block_minHeight: arg({
    defaultValue: "225px",
    name: "Мінімальна висота блоку",
  }),
  // block_maxWidth: arg({
  //   defaultValue: ""
  // })
  block_paddingY: arg({
    defaultValue: "40px",
    name: "Відступ блоку Top Bottom",
  }),
  block_paddingX: arg({
    defaultValue: "50px",
    name: "Відступ блоку Left Right",
  }),

  block_backgroundColor: colorArg({
    defaultValue: "#343434",
    name: "Колір фону блоку",
  }),
  block_backgroundOpacity: arg({
    defaultValue: "0.9",
    name: "Прозорість фону блоку",
  }),
  block_buttonTextColor: colorArg({
    defaultValue: "text-primary",
    name: "Колір кнопки посилання блоку",
  }),
  block_buttonTextTransform: radioArg({
    options: ["none", "uppercase"],
    defaultValue: "none",
    name: "Трансформація тексту кнопки посилання блоку",
  }),
  block_buttonFontSize: arg({
    defaultValue: "16px",
    name: "Розмір тексту кнопки посилання блоку",
  }),
});
