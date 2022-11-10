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

const baseFormFeedbackArgs = {
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
  submittedMessage: textArg({
    color: "text-primary",
    typography: "h3",
    name: "Thank you текст",
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
};

export const formFeedbackSectionArgs = sectionArgs(baseFormFeedbackArgs);

export const formFeedbackModalArgs = sectionArgs(
  {
    modal_animationDurationEnter: arg({
      defaultValue: 200,
      name: "Modal animation duration (enter)",
    }),
    modal_animationDurationExit: arg({
      defaultValue: 100,
      name: "Modal animation duration (exit)",
    }),
    modal_backgroundColor: colorArg({
      defaultValue: "background",
      name: "Modal background color",
    }),
    modal_backgroundOpacity: arg({
      defaultValue: "0.9",
      name: "Modal opacity",
    }),
    ...baseFormFeedbackArgs,
  },
  false
);
