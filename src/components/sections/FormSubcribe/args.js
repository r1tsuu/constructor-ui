import {
  buttonArg,
  colorArg,
  inputArg,
  sectionArgs,
  textArg,
  arg,
  radioArg,
} from "../../../utils";

export const formSubscribeArgs = sectionArgs({
  backgroundColor: colorArg({
    defaultValue: "background",
    name: "Колір фону блоку форми",
  }),
  title: textArg({
    color: "text-primary",
    typography: "h3",
    defaultValue: "Підписуйся на наш e-mail для отримання новин",
    name: "Заголовок",
  }),
  inputType: inputArg({}),
  buttonType: buttonArg({}),
  styleType: radioArg({
    options: [1, 2],
    defaultValue: 1,
    name: "Стиль",
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
  submittedModal_errorMessage: arg({ defaultValue: "Error" }),
  submittedModal_successMessage: arg({ defaultValue: "Success" }),
  submittedModal_messageSettings: textArg({
    color: "text-primary",
    typography: "h3",
    name: "Thank you попап - Текст",
  }),
  submittedModal_background: colorArg({
    defaultValue: "background",
    name: "Thank you попап - Колір фону блоку",
  }),
  submittedModal_borderRadius: arg({
    defaultValue: "10px",
    name: "Thank you попап - радіус обводки блоку ",
  }),
  submittedModal_borderColor: arg({
    defaultValue: "stroke",
    name: "Thank you попап - колір обводки блоку",
  }),
});
