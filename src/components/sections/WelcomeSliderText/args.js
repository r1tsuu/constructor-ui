import defaultImage from "../../../assets/img-placeholder.png";
import defaultImageMobile from "../../../assets/img-placeholder-mobile.png";

import {
  arg,
  arrowArg,
  buttonArg,
  colorArg,
  radioArg,
  sectionArgs,
} from "../../../utils";

const _item = {
  title: "Lorem ipsum",
  description: "Lorem ipsum dolor sit amet, magna aliqua.",
  buttonLink: "https://google.com",
  photoSource: defaultImage,
  photoSourceMobile: defaultImage,
};

export const welcomeSliderArgs = sectionArgs({
  arrowType: arrowArg({}),
  items: Array(6).fill(_item),
  buttonName: "Детальніше",
  block_minHeight: arg({
    defaultValue: "225px",
    name: "Мінімальна висота блоку",
  }),
  block_backgroundColor: colorArg({
    defaultValue: "#343434",
    name: "Колір фону блоку",
  }),
  block_backgroundOpacity: colorArg({
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
