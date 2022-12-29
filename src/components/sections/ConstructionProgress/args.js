import {
  arg,
  booleanArg,
  buttonArg,
  colorArg,
  hiddenArg,
  sectionArgs,
  textArg,
} from "../../../utils";
import { assets } from "../../../assets";

const cardImg = {
  createdAt: "2022-11-22T12:48:08.935Z",
  title: "Хід будівництва за липень 2022",
  categoryTitle: "Хід будівництва",
  categoryBackgroundColor: "#1A1325",
  categoryBorderColor: "#301C4D",
  categoryColor: "#9D5CF8",
  photoSource: assets.imgPlaceholder,
};

const cards = [
  {
    title: "Хід будівництва за липень 2022",
    buttonLink: "https://google.com",
    buttonName: "Детальніше",
  },
  {
    title: "Хід будівництва за липень 2022",
    buttonLink: "https://google.com",
    buttonName: "Детальніше",
  },
  {
    title: "Хід будівництва за липень 2022",
    buttonLink: "https://google.com",
    buttonName: "Детальніше",
  },
  {
    title: "Хід будівництва за липень 2022",
    buttonLink: "https://google.com",
    buttonName: "Детальніше",
  },
  {
    title: "Хід будівництва за липень 2022",
    buttonLink: "https://google.com",
    buttonName: "Детальніше",
  },
];

export const constructionProgressArgs = sectionArgs({
  subTitle: textArg({
    defaultValue: "Найсвіжіші новини",
    typography: "h5",
    color: "accent",
    name: "Підзаголовок",
  }),
  cardImg: hiddenArg({
    value: cardImg,
  }),
  cards: hiddenArg({
    value: cards,
  }),
  title: textArg({
    color: "text-primary",
    typography: "h2",
    defaultValue: `Хід будівництва`,
    name: "Заголовок",
  }),
  buttonLink: "https://google.com",

  linkButtonType: buttonArg({
    name: "Хід будівництва - тип кнопки посилання",
  }),
  buttonName: "Переглянути більше",

  contentBackground: colorArg({
    defaultValue: "#343434",
    name: "Контент - колір фону",
  }),
  contentBorderColor: colorArg({
    defaultValue: "stroke",
    name: "Контент - колір обводки",
  }),
  contentBorderRadius: arg({
    defaultValue: "0px",
    name: "Контент - радіус обводки",
  }),
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
  card_botBackground: colorArg({
    defaultValue: "background",
    name: "Картка - фон низ",
  }),
  card_borderColor: colorArg({
    defaultValue: "stroke",
    name: "Картка - колір обводки",
  }),
  borderBottomLinkColor: colorArg({
    defaultValue: "accent",
    name: "Посилання - колір підкреслювання ",
  }),
});
