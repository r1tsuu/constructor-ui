import React from "react";
import { COMPONENT_NAMES } from "../../../utils/constants";

import {
  arrowArg,
  buttonArg,
  cardArg,
  createSection,
  parseArgs,
  textArg,
} from "../../../utils/stories-utils";

import { Terms } from "./Terms";

const createCard = ({
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

const items = [
  createCard({
    title: "100%",
    subTitle: "повна оплата",
    description:
      "Придбавши квартиру за умови повної оплати, ви отримуєте вигідні індивідуальні умови придбання.",
    advantage: "Знижка Х %",
  }),
  createCard({
    title: "x м",
    subTitle: "розстрочка",
    description:
      "Придбати квартиру в розстрочку до вводу в експлуатацію – ідеальний варіант, коли є потреба в оплаті частинами.",
    advantage: "перший внесок xx %",
  }),
  createCard({
    subTitle: "кредит",
    description:
      "Скористайтесь програмами кредитування від наших банків-партнерів. ",
    advantage: "під xx % річних",
  }),
  createCard({
    subTitle: "іпотека",
    description:
      "Розрахунок має приблизний характер. Звяжіться з нашим відділом продажів, щоб підібрати оптимальний план оплати. ",
    advantage: "від x % компенсаційна ставка",
  }),
  createCard({
    title: "x м",
    subTitle: "розстрочка",
    description:
      "Придбати квартиру в розстрочку до вводу в експлуатацію – ідеальний варіант, коли є потреба в оплаті частинами.",
    advantage: "перший внесок xx %",
  }),
  createCard({
    subTitle: "кредит",
    description:
      "Скористайтесь програмами кредитування від наших банків-партнерів. ",
    advantage: "під xx % річних",
  }),
];

export default createSection({
  name: COMPONENT_NAMES.SECTIONS.DEFAULT_BLOCK_TERMS,
  component: Terms,
  args: {
    subTitle: textArg({
      defaultValue: "КУПУВАТИ -ВИГІДНО",
      typography: "h5",
      color: "accent",
    }),
    title: textArg({
      defaultValue: "УМОВИ ПРИДБАННЯ",
      typography: "h2",
      color: "text-primary",
    }),
    arrowType: arrowArg({}),
    buttonType: buttonArg({}),
    items,
    card: cardArg({}),
    card_title: textArg({
      typography: "h2",
      color: "text-primary",
    }),
    card_subTitle: textArg({
      typography: "h5",
      color: "accent",
    }),
    card_description: textArg({
      typography: "p1",
      color: "text-secondary",
    }),
    card_advantage: textArg({
      typography: "h5",
      color: "text-primary",
    }),
    card_buttonName: "Текст кнопки",
    card_buttonLink: "https://google.com",
  },
});

export const Default = (args) => <Terms {...parseArgs(args)} />;
