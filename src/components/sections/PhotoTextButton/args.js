import { assets } from "../../../assets";
import {
  textArg,
  buttonArg,
  radioArg,
  sectionArgs,
  booleanArg,
  arg,
  colorArg,
} from "../../../utils";

export const photoTextButtonArgs = sectionArgs({
  leftWidth: arg({
    defaultValue: "50p",
    name: "Left Column Width",
  }),
  rightWidth: arg({
    defaultValue: "50p",
    name: "Right Column Width",
  }),
  gap: arg({
    defaultValue: "75px",
    name: "Column gap",
  }),
  subTitle: textArg({
    defaultValue: "AIzaSyD01Sevf9MJqWV2QZOZt91yxKg5",
    typography: "h5",
    color: "accent",
    name: "Підзаголовок",
  }),
  title: textArg({
    defaultValue: "Про комплекс",
    color: "text-primary",
    typography: "h2",
    name: "Заголовок",
  }),
  description: textArg({
    defaultValue: `Тут ви маєте розмістити необхідне описання блокуНайсухіше місце на Землі знаходиться в Антарктиді. Хоч як дивно це звучить, але деякі ділянки антарктичної долини Мак-Мердо не бачили опадів уже 2 мільйона років.`,
    color: "text-secondary",
    typography: "p1",
    name: "Опис",
  }),
  photoSource: assets.imgPlaceholder,
  photoSourceMobile: assets.imgPlaceholderHeight,
  isReverse: booleanArg({
    defaultValue: false,
    name: "Фото зліва / справа",
  }),
  buttonType: buttonArg({}),
  buttonName: "Текст кнопки",
  buttonLink: "https://google.com",
  buttonPosition: radioArg({
    options: ["left", "center", "right"],
    defaultValue: "left",
    name: "Позиція кнопки (зліва / центр / справа)",
  }),
  iconBorderColor: colorArg({
    defaultValue: "rgba(166, 175, 184, 0.5)",
    name: "Колір обводки іконки",
  }),
  iconBorder: booleanArg({
    defaultValue: true,
    name: "Увімкнути вимкнути бордер ікони",
  }),
  iconWidth: arg({
    defaultValue: "60px",
    name: "Ширина іконки",
  }),
  iconHeight: arg({
    defaultValue: "60px",
    name: "Висота іконки",
  }),
  iconPosition: radioArg({
    options: ["left", "center", "right"],
    defaultValue: "center",
    name: "Позиція іконки (зліва / центр / справа)",
  }),
});
