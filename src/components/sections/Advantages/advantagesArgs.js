import { radioArg, sectionArgs, textArg } from "../../../utils";

const _card = (title, subTitle, icon) => ({
  title,
  subTitle,
  icon,
});

export const advantagesArgs = sectionArgs({
  subTitle: textArg({
    color: "accent",
    typography: "h5",
    name: "Підзаголовок",
    defaultValue: "все важливе - поряд",
  }),
  title: textArg({
    color: "text-primary",
    typography: "h2",
    name: "Заголовок",
    defaultValue: "наші цінності",
  }),
  gridColumns: radioArg({
    options: [3, 4],
    defaultValue: 3,
    name: "Кількість колонок",
  }),

  card_title: textArg({
    color: "text-primary",
    typography: "h4",
    name: "Картка - Заголовок",
  }),
  card_subTitle: textArg({
    color: "text-secondary",
    typography: "p1",
    name: "Картка - Підзаголовок",
  }),
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
});
