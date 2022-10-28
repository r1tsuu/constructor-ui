import React from "react";
import { parseArgs } from "../../../utils";
import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";

import { Advantages } from "./Advantages";
import { advantagesArgs } from "./advantagesArgs";

export default createSection({
  name: COMPONENT_KEYS.ADVANTAGES,
  component: Advantages,
  args: advantagesArgs,
});

export const Default = (args) => {
  console.log(args);
  return <Advantages asd={"asd"} {...parseArgs(args)} />;
};

const _card = (title, subTitle, icon) => ({
  title,
  subTitle,
  icon,
});

Default.args = {
  items: [
    _card(
      "Надійність",
      "Повна відсутність недобудов за 18 років роботи. Власні ресурси фінансування для забезпечення стабільної роботи компанії."
    ),
    _card(
      "Комфорт",
      "Використання сучасних технологій та матеріалів будівництва. Гарантія якості робіт від забудовника."
    ),
    _card(
      "Швидкість",
      "Високі темпи будівництва та вчасна реалізація проєктів компанії."
    ),
    _card(
      "Ремонт “під ключ”",
      "Сучасні дизайнерські ремонти від забудовника. Можливість заселення одразу в готову оздоблену та мебльовану квартиру."
    ),
    _card(
      "Trade-in",
      "Зручна послуга від забудовника: можливість придбати нову квартиру за рахунок продажу старої квартири."
    ),
  ],
  subTitle: "все важливе - поряд",
  title: "наші цінності",
};
