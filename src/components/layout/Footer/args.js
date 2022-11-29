import icon_1 from "./assets/inst.svg";
import icon_2 from "./assets/tel.svg";
import icon_3 from "./assets/f.svg";
import icon_4 from "./assets/v.svg";
import icon_5 from "./assets/y.svg";

import {
  buttonArg,
  colorArg,
  inputArg,
  sectionArgs,
  textArg,
  arg,
  booleanArg,
} from "../../../utils";

export const footerArgs = sectionArgs(
  {
    firstText_title: textArg({
      defaultValue: "офіс продажу",
      typography: "h5",
      color: "text-secondary",
      name: "Перший текст - Заголовок",
    }),
    firstText_description: textArg({
      defaultValue: "м. Київ, вул. Декабристів, 3Б",
      typography: "h4",
      color: "text-primary",
      name: "Перший текст - Опис",
    }),
    secondText_title: textArg({
      typography: "h5",
      color: "text-secondary",
      defaultValue: " звʼязок",
      name: "Другий текст - Заголовок",
    }),
    secondText_description: textArg({
      typography: "h4",
      color: "text-primary",
      defaultValue: "+38 (048) 708-33-33 poshta.info@gmail.com",
      name: "Другий текст - Опис",
    }),
    thirdText_title: textArg({
      typography: "h5",
      color: "text-secondary",
      name: "Третій текст - Заголовок",
      defaultValue: "Час роботи",
    }),
    thirdText_description: textArg({
      typography: "h4",
      color: "text-primary",
      name: "Третій текст - Опис",
      defaultValue: "пн-пт: 09:00-19:00 сб-нд: 10:00-16:00",
    }),
    socialsTitle: textArg({
      typography: "h5",
      color: "text-secondary",
      name: "Соціальні мережі - Заголовок",
      defaultValue: "соціальні мережі",
    }),
    buttonType: buttonArg({}),
    borderColor: colorArg({
      defaultValue: "stroke",
      name: "Колір обводки",
    }),
    downTextFirst: textArg({
      typography: "p1",
      color: "text-secondary",
      name: "Текст знизу - 1",
      defaultValue: "©2022. Companyname",
    }),
    downTextSecond: textArg({
      typography: "p1",
      color: "text-secondary",
      name: "Текст знизу - 2",
      defaultValue: "Privacy policy",
    }),
    downTextThird: textArg({
      typography: "p1",
      color: "text-secondary",
      name: "Текст знизу - 3",
      defaultValue: "Terms & Conditions",
    }),
    handcraftedText: textArg({
      typography: "p1",
      color: "text-secondary",
      name: "Текст знизу - Handcrafted",
      defaultValue: "Handcrafted by ",
    }),
    scrollUpText: textArg({
      typography: "p1",
      color: "text-secondary",
      name: "Текст Вгору",
      defaultValue: "Вгору",
    }),
    rosseryColor: colorArg({
      defaultValue: "text-primary",
      name: "Rossery Logo - color",
    }),
    toUpIconColor: colorArg({
      defaultValue: "accent",
      name: "Scroll to Top Icon Color",
    }),
    enableSubscribe: booleanArg({
      defaultValue: true,
      name: "Увімкнути / Вимкнути Subcribe",
    }),

    subscribe_backgroundColor: colorArg({
      defaultValue: "background",
      name: "Subscribe - Колір фону блоку форми",
    }),
    subscribe_title: textArg({
      color: "text-primary",
      typography: "h3",
      defaultValue: "Підписуйся на наш e-mail для отримання новин",
      name: "Subscribe - Заголовок форми",
    }),
    subscribe_inputType: inputArg({
      name: "Subscribe - тип input",
    }),
    subscribe_buttonType: buttonArg({
      name: "Subcribe - тип кнопки",
    }),
    subscribe_privacy_first: textArg({
      color: "text-secondary",
      typography: "p2",
      name: "Subcribe - Privacy текст - Перша частина",
    }),
    subscribe_privacy_second: textArg({
      color: "text-primary",
      typography: "p2",
      name: "Subcribe - Privacy текст - Друга частина",
    }),
    subscribe_submittedModal_errorMessage: arg({ defaultValue: "Error" }),
    subscribe_submittedModal_successMessage: arg({ defaultValue: "Success" }),
    subscribe_submittedModal_messageSettings: textArg({
      color: "text-primary",
      typography: "h3",
      name: "Thank you попап - Текст",
    }),
    subscribe_submittedModal_submittedMessageSettings: textArg({
      color: "text-primary",
      typography: "h3",
      name: "Subcribe - Thank you попап - Текст",
    }),
    subscribe_submittedModal_background: colorArg({
      defaultValue: "background",
      name: "Subcribe - Thank you попап - Колір фону блоку",
    }),
    subscribe_submittedModal_borderRadius: arg({
      defaultValue: "10px",
      name: "Subcribe - Thank you попап - радіус обводки блоку ",
    }),
    subscribe_submittedModal_borderColor: arg({
      defaultValue: "stroke",
      name: "Subcribe - Thank you попап - колір обводки блоку",
    }),
    socials: [
      {
        icon: icon_1,
        link: "https://google.com",
      },
      {
        icon: icon_2,
        link: "https://google.com",
      },
      {
        icon: icon_3,
        link: "https://google.com",
      },
      {
        icon: icon_4,
        link: "https://google.com",
      },
      {
        icon: icon_5,
        link: "https://google.com",
      },
    ],
    buttonName: "Замовити дзвінок",
    buttonLink: "https://google.com",
  },
  true,
  {
    paddingTop: "40px 50px 60px 60px",
    paddingBottom: "10px 10px 10px 10px",
  }
);
