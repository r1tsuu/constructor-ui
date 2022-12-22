import { arg, booleanArg, buttonArg, colorArg, sectionArgs, textArg } from "../../../utils";
import { assets } from "../../../assets";

const tabs = [
  {
    title: "Tab 1",
    items: Array(10).fill({
      photoSource: assets.imgPlaceholderHeight,
      photoSourceMobile: assets.imgPlaceholderHeight,
    }),
    table: {
      head: ["Nazva1", "Nazva1", "Nazva1", "Nazva1", "Nazva1", "Nazva1", "Nazva1"],
      body: [
        ["Текст колонки", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
      ],
    },
  },
  {
    title: "Tab 2",
    items: Array(1).fill({
      photoSource: assets.imgPlaceholderHeight,
      photoSourceMobile: assets.imgPlaceholderHeight,
    }),
    table: {
      head: ["Nazva2", "Nazva 2", "Nazva 2", "Nazva2", "Nazva2", "Nazva2", "Nazva2"],
      body: [
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
      ],
    },
  },
  {
    title: "Tab 3",
    items: Array(10).fill({
      photoSource: assets.imgPlaceholderHeight,
      photoSourceMobile: assets.imgPlaceholderHeight,
    }),
    table: {
      head: ["Nazva3", "Nazva3", "Nazva 3", "Nazva3", "Nazva3", "Nazva3", "Nazva3"],
      body: [
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
      ],
    },
  },
];

export const TableArgs = sectionArgs({
  subTitle: textArg({
    defaultValue: "Найсвіжіші новини",
    typography: "h5",
    color: "accent",
    name: "Підзаголовок",
  }),
  title: textArg({
    color: "text-primary",
    typography: "h2",
    defaultValue: `Таблиця характеристик`,
    name: "Заголовок",
  }),
  tabTitle: textArg({
    color: "text-secondary",
    typography: "h4",
    defaultValue: `tab`,
    name: "Заголовок табу",
  }),
  tableTitle: textArg({
    color: "text-primary",
    typography: "p",
    defaultValue: `Назва 2`,
    name: "Таблиця - заголовок колонки",
  }),
  tableBodyTitle: textArg({
    color: "text-secondary",
    typography: "p",
    defaultValue: `Текст колонки`,
    name: "Таблиця - текст колонки",
  }),
  activeTableRowColorTitle: colorArg({
    defaultValue: "text-primary",
    name: "Колонка активний колір",
  }),
  tabs,
  paginationBg: colorArg({
    defaultValue: "stroke",
    name: "Пагінація - фон",
  }),
  paginationActiveBg: colorArg({
    defaultValue: "accent",
    name: "Пагінація - фон активний",
  }),
  buttonLinkCall: "https://google.com",
  buttonLink: "https://google.com",
  callButtonType: buttonArg({
    name: "Таблиця - тип кнопки замовити дзвінок",
  }),
  linkButtonType: buttonArg({
    name: "Таблиця - тип кнопки посилання",
  }),
  buttonCallName: "Замовити дзвінок",
  buttonName: "Текст кнопки",
  tabProgressColor: colorArg({
    defaultValue: "stroke",
    name: "Таб - колір прогрессу",
  }),
  tabProgressColorActive: colorArg({
    defaultValue: "accent",
    name: "Таб - колір прогрессу активний ",
  }),
  contentBackground: colorArg({
    defaultValue: "#343434",
    name: "Контент - колір фону",
  }),
  contentBorderColor: colorArg({
    defaultValue: "stroke",
    name: "Контент - колір обводки",
  }),
  tableHeadBackground: colorArg({
    defaultValue: "background",
    name: "Таблиця - колір фону заголовка",
  }),
  contentBorderRadius: arg({
    defaultValue: "0px",
    name: "Контент - радіус обводки",
  }),
  tableBorderColor: colorArg({
    defaultValue: "stroke",
    name: "Контент - колір обводки",
  }),
  activeTableBorderColor: colorArg({
    defaultValue: "accent",
    name: "Контент - колір обводки",
  }),
});
