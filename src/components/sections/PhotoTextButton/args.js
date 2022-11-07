import defaultImage from "../../../assets/img-placeholder.png";
import defaultImageMobile from "../../../assets/img-placeholder-mobile.png";
import {
  textArg,
  buttonArg,
  radioArg,
  sectionArgs,
  booleanArg,
} from "../../../utils";

export const photoTextButtonArgs = sectionArgs({
  subTitle: textArg({
    defaultValue: "будуємо з любов’ю",
    typography: "h5",
    color: "accent",
    name: "Підзаголовок",
  }),
  title: textArg({
    defaultValue: "Про комплекс",
    color: "primary",
    typography: "h2",
    name: "Заголовок",
  }),
  description: textArg({
    defaultValue: `Тут ви маєте розмістити необхідне описання блокуНайсухіше місце на Землі знаходиться в Антарктиді. Хоч як дивно це звучить, але деякі ділянки антарктичної долини Мак-Мердо не бачили опадів уже 2 мільйона років.`,
    color: "text-secondary",
    typography: "p1",
    name: "Опис",
  }),
  photoSource: defaultImage,
  photoSourceMobile: defaultImageMobile,
  isReverse: booleanArg({
    defaultValue: false,
    name: "Фото зліва / справа",
  }),
  buttonType: buttonArg({}),
  buttonName: "Текст кнопки",
  buttonPosition: radioArg({
    options: ["left", "center", "right"],
    defaultValue: "left",
    name: "Позиція кнопки (зліва / центр / справа)",
  }),
});
