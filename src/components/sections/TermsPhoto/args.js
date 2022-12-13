import {
  sectionArgs,
  textArg,
  arrowArg,
  buttonArg,
  cardArg,
} from "../../../utils";

import icon from "./LL_icons_DIM.gif";

const _card = ({
  title = "xx",
  subTitle = null,
  description,
  advantage = null,
  buttonName = "Текст кнопки",
  buttonLink = "https://google.com",
}) => ({
  title,
  subTitle,
  description,
  advantage,
  buttonName,
  buttonLink,
});

export const termsPhotoArgs = sectionArgs({
  subTitle: textArg({
    defaultValue: "КУПУВАТИ -ВИГІДНО",
    typography: "h5",
    color: "accent",
    name: "Підзаголовок",
  }),
  title: textArg({
    defaultValue: "УМОВИ ПРИДБАННЯ",
    typography: "h2",
    name: "Заголовок",
  }),
  photo: icon,
  items: [
    _card({
      title: "100%",
      subTitle: "повна оплата",
      description:
        "Придбавши квартиру за умови повної оплати, ви отримуєте вигідні індивідуальні умови придбання.",
      advantage: "Знижка Х %",
    }),
    _card({
      title: "x м",
      subTitle: "розстрочка",
      description:
        "Придбати квартиру в розстрочку до вводу в експлуатацію – ідеальний варіант, коли є потреба в оплаті частинами.",
      advantage: "перший внесок xx %",
    }),
    _card({
      subTitle: "кредит",
      description:
        "Скористайтесь програмами кредитування від наших банків-партнерів. ",
      advantage: "під xx % річних",
    }),
    _card({
      subTitle: "іпотека",
      description:
        "Розрахунок має приблизний характер. Звяжіться з нашим відділом продажів, щоб підібрати оптимальний план оплати. ",
      advantage: "від x % компенсаційна ставка",
    }),
    _card({
      title: "x м",
      subTitle: "розстрочка",
      description:
        "Придбати квартиру в розстрочку до вводу в експлуатацію – ідеальний варіант, коли є потреба в оплаті частинами.",
      advantage: "перший внесок xx %",
    }),
    _card({
      subTitle: "кредит",
      description:
        "Скористайтесь програмами кредитування від наших банків-партнерів. ",
      advantage: "під xx % річних",
    }),
  ],
  arrowType: arrowArg({}),
  buttonType: buttonArg({}),

  card: cardArg({
    name: "Картка",
  }),
  card_title: textArg({
    typography: "h2",
    color: "text-primary",
    name: "Картка - Заголовок",
  }),
  card_subTitle: textArg({
    typography: "h5",
    color: "accent",
    name: "Картка - Підзаголовок",
  }),
  card_description: textArg({
    typography: "p1",
    color: "text-secondary",
    name: "Картка - Опис",
  }),
  card_advantage: textArg({
    typography: "h5",
    color: "text-primary",
    name: "Картка - перевага",
  }),
});
