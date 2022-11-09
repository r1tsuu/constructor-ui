import {
  arg,
  booleanArg,
  buttonArg,
  cardArg,
  colorArg,
  inputArg,
  radioArg,
  sectionArgs,
  textArg,
} from "../../../utils";

export const formFeedbackArgs = sectionArgs({
  formBackground: colorArg({
    defaultValue: "background",
    name: "Колір фону форми",
  }),
  formBorderColor: colorArg({
    defaultValue: "stroke",
    name: "Колір обводки форми",
  }),
  formBorderRadius: arg({
    defaultValue: "0px",
    name: "Радіус обводки форми",
  }),
  title: textArg({
    color: "text-primary",
    defaultValue: "Залишились запитання?",
    typography: "h3",
    name: "Заголовок",
  }),
  privacy_first: textArg({
    color: "text-secondary",
    typography: "p2",
    name: "Privacy текст - Перша частина",
  }),
  privacy_second: textArg({
    color: "text-primary",
    typography: "p2",
    name: "Privacy текст - Друга частина",
  }),
  inputType: inputArg({}),
  buttonType: buttonArg({}),
  enableName: booleanArg({
    defaultValue: true,
    name: "Вимкнути/Увімкнути поле Name",
  }),
  enableEmail: booleanArg({
    defaultValue: true,
    name: "Вимкнути/Увімкнути поле Email",
  }),
  enableMessage: booleanArg({
    defaultValue: true,
    name: "Вимкнути/Увімкнути поле Message",
  }),
});
