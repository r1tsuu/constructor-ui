import {
  arg,
  args,
  booleanArg,
  buttonArg,
  colorArg,
  inputArg,
  radioArg,
  sectionArgs,
  textArg,
} from "../../../utils";

import logo from "./logo.svg";

export const headerArgs = sectionArgs(
  {
    language: textArg({
      typography: "p1",
      color: "text-primary",
      name: "Мова",
    }),
    languageActiveColor: colorArg({
      defaultValue: "text-secondary",
      name: "Мова - колір активної",
    }),
    languageIconColor: colorArg({
      defaultValue: "accent",
      name: "Мова - колір іконки",
    }),
    email: textArg({
      defaultValue: "poshta.info@gmail.com",
      typography: "p1",
      color: "text-primary",
      name: "Email",
    }),
    emailIconColor: colorArg({
      defaultValue: "text-primary",
      name: "Email - колір іконки",
    }),
    phone: textArg({
      defaultValue: "+38 (000) 000-00-00",
      typography: "p1",
      color: "text-primary",
      name: "Телефон",
    }),
    phoneIconColor: colorArg({
      defaultValue: "text-primary",
      name: "Телефон - колір іконки",
    }),
    menu: textArg({
      typography: "p1",
      color: "text-primary",
      name: "Меню",
      defaultValue: "Меню",
    }),
    menuButtonBackground: colorArg({
      defaultValue: "accent",
      name: "Меню - фон кнопки",
    }),
    menuButtonBackgroundHover: colorArg({
      defaultValue: "accent-hover",
      name: "Меню - фон кнопки ховер",
    }),
    menuButtonBorderColor: colorArg({
      defaultValue: "accent",
      name: "Меню - колір обводки",
    }),
    menuButtonBorderColorHover: colorArg({
      defaultValue: "accent-hover",
      name: "Меню - колір обводки ховер",
    }),
    menuButtonIconColor: colorArg({
      defaultValue: "text-primary",
      name: "Меню - колір іконки",
    }),
    menuButtonBorderRadius: arg({
      defaultValue: "0px",
      name: "Меню - радіус обводки кнопки",
    }),
    menuPopupBackgroundColor: colorArg({
      defaultValue: "#9A9A9A",
      name: "Меню попап - колір фону",
    }),
    menuPopupBackgroundOpacity: arg({
      defaultValue: "0.9",
      name: "Меню попап - прозорість",
    }),
    menuPopupContentBackground: arg({
      defaultValue: "background",
      name: "Меню попап - колір фону контенту",
    }),
    menuPopupBackgroundImage: arg({
      defaultValue: "",
      name: "Меню попап - зображення фону",
    }),
    menuPopupBackgroundPosition: arg({
      defaultValue: "",
      name: "Меню попап - позиція фону",
    }),
    menuLink: textArg({
      typography: "h3",
      color: "text-primary",
      name: "Меню - посилання",
    }),
    menuLinkInner: textArg({
      typography: "h4",
      color: "text-secondary",
      name: "Меню - посилання внутрішнє",
    }),
    menuDropdownIconColor: colorArg({
      defaultValue: "text-primary",
      name: "Меню дропдаун mobile іконка колір",
    }),
    menuBorderColor: colorArg({
      defaultValue: "stroke",
      name: "Меню - колір обводки посилання",
    }),
    callbackButtonType: buttonArg({
      name: "Тип кнопка callback (Desktop, Laptop)",
    }),
    callbackButtonName: "Замовити дзвінок",
    cancelButtonName: "Відмінити",
    callbackPopupPhoneButtonType: buttonArg({
      name: "Мобільний callback popup - тип кнопки телефону",
    }),
    callbackPopupLinkButtonType: buttonArg({
      name: "Мобільний callback popup - тип кнопки замовити дзвінок",
    }),
    callbackPopupCancelButtonType: buttonArg({
      name: "Мобільний callback popup - тип кнопки відмінити",
    }),
    callbackButtonBackground: colorArg({
      defaultValue: "background",
      name: "Мобільна кнопка callback - колір фону",
    }),
    callbackButtonBackgroundHover: colorArg({
      defaultValue: "background",
      name: "Мобільна кнопка callback - колір фону hover",
    }),
    callbackButtonBorderColor: colorArg({
      defaultValue: "accent",
      name: "Мобільна кнопка callback - колір обводки",
    }),
    callbackButtonBorderColorHover: colorArg({
      defaultValue: "accent",
      name: "Мобільна кнопка callback - колір обводки hover",
    }),
    callbackButtonBorderRadius: colorArg({
      defaultValue: "0px",
      name: "Мобільна кнопка callback - радіус обводки",
    }),
    callbackPopupBackgroundColor: colorArg({
      defaultValue: "#343434",
      name: "Callback попап - колір фону",
    }),
    callbackPopupOpacity: arg({
      defaultValue: "0.9",
      name: "Callback поап - прозорість",
    }),

    logoSource: logo,
    callbackLink: "https://google.com",
    menuList: [
      {
        title: "Головна",
        link: "https://google.com",
        list: [],
      },
      {
        title: "Про нас",
        link: "https://google.com",
        list: [
          {
            title: "Каталог",
            link: "https://google.com",
          },
        ],
      },
    ],
  },
  true,
  {
    paddingTop: "20px 20px 20px 20px",
    paddingBottom: " 20px 20px 20px 20px",
  }
);
