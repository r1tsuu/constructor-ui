import React from "react";

import { UiKitContainerDecorator } from "../../../../.storybook/decorators";
import {
  arrowArg,
  arrowType,
  baseArgs,
  baseArgTypes,
  buttonArg,
  buttonType,
  cardArg,
  colorType,
  createSection,
  parseArgs,
  textArg,
  typographyType,
} from "../../../utils/stories-utils";

import { Terms } from "./Terms";

const createCard = ({
  title = "до xx років",
  subTitle = null,
  description,
  advantage = null,
  buttonName = "Текст кнопки",
  buttonLink = "https://https://www.google.com",
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
    title: "до xx місяців",
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
];

export default createSection({
  name: "Terms",
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
    "card.title": textArg({
      typography: "h2",
      color: "text-primary",
    }),
    "card.subTitle": textArg({
      typography: "h5",
      color: "accent",
    }),
    "card.description": textArg({
      typography: "p1",
      color: "stroke",
    }),
    "card.advantage": textArg({
      typography: "h4",
      color: "text-primary",
    }),
  },
});

export const Default = (args) => <Terms {...parseArgs(args)} />;
