import React from "react";

import {
  createSection,
  parseArgs,
  radioArg,
  textArg,
} from "../../../utils/stories-utils";

import { Advantages } from "./Advantages";

const createCard = (title, subTitle, icon) => ({
  title,
  subTitle,
  icon,
});

const items = [
  createCard(
    "Надійність",
    "Повна відсутність недобудов за 18 років роботи. Власні ресурси фінансування для забезпечення стабільної роботи компанії."
  ),
  createCard(
    "Комфорт",
    "Використання сучасних технологій та матеріалів будівництва. Гарантія якості робіт від забудовника."
  ),
  createCard(
    "Швидкість",
    "Високі темпи будівництва та вчасна реалізація проєктів компанії."
  ),
  createCard(
    "Ремонт “під ключ”",
    "Сучасні дизайнерські ремонти від забудовника. Можливість заселення одразу в готову оздоблену та мебльовану квартиру."
  ),
  createCard(
    "Trade-in",
    "Зручна послуга від забудовника: можливість придбати нову квартиру за рахунок продажу старої квартири."
  ),
];

export default createSection({
  name: "Advantages",
  component: Advantages,
  args: {
    subTitle: textArg({
      color: "accent",
      typography: "h5",
      defaultValue: "все важливе - поряд",
    }),
    title: textArg({
      color: "text-primary",
      typography: "h2",
      defaultValue: "наші цінності",
    }),
    gridColumns: radioArg({
      options: [3, 4],
      defaultValue: 3,
    }),
    items,
    "card.title": textArg({
      color: "text-primary",
      typography: "h4",
    }),
    "card.subTitle": textArg({
      color: "text-secondary",
      typography: "p1",
    }),
  },
});

export const Default = (args) => <Advantages {...parseArgs(args)} />;
