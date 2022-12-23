import {
  arg,
  arrowArg,
  booleanArg,
  buttonArg,
  colorArg,
  hiddenArg,
  sectionArgs,
  textArg,
} from "../../../utils";
import { assets } from "../../../assets";

const cards = [
  {
    createdAt: "2022-11-22T12:48:08.935Z",
    title: "Хід будівництва6",
    categoryTitle: "Хід будівництва",
    categoryBackgroundColor: "#1A1325",
    categoryBorderColor: "#301C4D",
    categoryColor: "#9D5CF8",
    photoSource: assets.imgPlaceholder,
  },
  {
    createdAt: "2022-11-22T12:48:08.935Z",
    title: "Хід будівництва за липень 2021",
    categoryTitle: "Хід будівництва",
    categoryBackgroundColor: "#1A1325",
    categoryBorderColor: "#301C4D",
    categoryColor: "#9D5CF8",
    photoSource: assets.imgPlaceholder,
  },
  {
    createdAt: "2022-11-22T12:48:08.935Z",
    title: "Хід будівництва за липень 2022",
    categoryTitle: "Хід будівництва",
    categoryBackgroundColor: "blue",
    categoryBorderColor: "red",
    categoryColor: "#9D5CF8",
    photoSource: assets.imgPlaceholder,
  },
  {
    createdAt: "2022-11-22T12:48:08.935Z",
    title: "Хід будівництва за липень 2022",
    categoryTitle: "Хід будівництва",
    categoryBackgroundColor: "#1A1325",
    categoryBorderColor: "#301C4D",
    categoryColor: "#9D5CF8",
    photoSource: assets.imgPlaceholder,
  },
  {
    createdAt: "2022-11-22T12:48:08.935Z",
    title: "Хід будівництва за липень 2022",
    categoryTitle: "Хід будівництва",
    categoryBackgroundColor: "#1A1325",
    categoryBorderColor: "#301C4D",
    categoryColor: "#9D5CF8",
    photoSource: assets.imgPlaceholder,
  },
];

export const blogSectionArgs = sectionArgs({
  title: textArg({
    defaultValue: "Новини",
    typography: "h2",
    color: "text-primary",
    name: "Заголовок",
  }),

  cards: hiddenArg({
    value: cards,
  }),
  arrowType: arrowArg({}),
  title: textArg({
    color: "text-primary",
    typography: "h2",
    defaultValue: `Хід будівництва`,
    name: "Заголовок",
  }),
  buttonLink: "https://google.com",

  buttonType: buttonArg({
    name: "Тип кнопки",
  }),
  buttonName: "Переглянути більше",

  card_date: textArg({
    typography: "h5",
    color: "text-secondary",
    name: "Картка - дата створення",
  }),
  card_title: textArg({
    typography: "h4",
    color: "text-primary",
    name: "Картка - заголовок",
  }),
  card_link: textArg({
    typography: "p1",
    color: "text-primary",
    name: "Картка - посилання",
  }),
  card_borderColor: colorArg({
    defaultValue: "stroke",
    name: "Картка - колір обводки",
  }),
  paginationActiveColor: colorArg({
    defaultValue: "#A6AFB8",
    name: "Пагінація активний колір",
  }),
  paginationColor: colorArg({
    defaultValue: "#334150",
    name: "Пагінація колір",
  }),
});
