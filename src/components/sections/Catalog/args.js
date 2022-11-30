import { assets } from "../../../assets";
import {
  arrowArg,
  buttonArg,
  buttonType,
  colorArg,
  radioArg,
  sectionArgs,
  textArg,
} from "../../../utils";

const _item = (title, description) => ({
  title,
  description,
  photoSource: assets.imgPlaceholderHeight,
  photoSourceMobile: assets.imgPlaceholderHeight,
});

const photos = [
  assets.imgPlaceholder,
  assets.imgPlaceholder,
  assets.imgPlaceholder,
  assets.imgPlaceholder,
];

const description = `Період зимових свят — це час мріяти, будувати плани та приміряти нові образи. Тому напередодні Нового року бренд Anna Mi радий презентувати свою нову колекцію, яка об'єднала в собі головні тренди прийдешнього 2022-го року. Як створити свій особливий образ і на які деталі звернути особливу увагу — читайте в нашому блозі.
Період зимових свят — це час мріяти, будувати плани та приміряти нові образи. Тому напередодні Нового року бренд Anna Mi радий презентувати свою нову колекцію, яка об'єднала в собі головні тренди прийдешнього 2022-го року. Як створити свій особливий образ і на які деталі звернути особливу увагу — читайте в нашому блозі.
Період зимових свят — це час мріяти, будувати плани та приміряти нові образи. Тому напередодні Нового року бренд Anna Mi радий презентувати свою нову колекцію, яка об'єднала в собі головні тренди прийдешнього 2022-го року. Як створити свій особливий образ і на які деталі звернути особливу увагу — читайте в нашому блозі.
`;

const tabsPopup = [
  {
    title: "Опис",
    description: "Descriptionasdasdsadsadasdasdsadsa",
  },
  {
    title: "Технічні характеристики",
    description: "characteristics",
  },
  {
    title: "documents",
    description: "Documents!!",
  },
];

const tabItems = [
  {
    title: "Головний заголовок в 2 ряди, не більше, або в 1",
    description,
    price: "5 000 грн",
    photos,
    tabsPopup,
  },
  {
    title: "Якщо загаловок в 1 стрічку то так",
    description,
    price: "4 000 грн",
    photos,
    tabsPopup,
  },
  {
    title: "Головний заголовок в 2 ряди, не більше, або в 1",
    description,
    price: "5 000 грн",
    photos,
    tabsPopup,
  },
  {
    title: "Головний заголовок в 2 ряди, не більше, або в 1",
    description,
    price: "5 000 грн",
    photos,
    tabsPopup,
  },
  {
    title: "Головний заголовок в 2 ряди, не більше, або в 1",
    description,
    price: "5 000 грн",
    photos,
    tabsPopup,
  },
  {
    title: "Головний заголовок в 2 ряди, не більше, або в 1",
    description,
    price: "5 000 грн",
    photos: [assets.imgPlaceholderHeight],
    tabsPopup,
  },
];

export const catalogArgs = sectionArgs({
  title: textArg({
    defaultValue: "Каталог",
    color: "text-primary",
    typography: "h2",
    name: "Заголовок",
  }),
  buttonLink: "https://google.com",
  tab: textArg({
    color: "text-secondary",
    typography: "h4",
    name: "Таб - назва",
  }),
  tabActiveColor: colorArg({
    defaultValue: "text-secondary",
    name: "Таб - колір назви активний",
  }),
  tabProgressColor: colorArg({
    defaultValue: "stroke",
    name: "Таб - колір прогрессу",
  }),
  tabProgressColorActive: colorArg({
    defaultValue: "accent",
    name: "Таб - колір прогрессу активний ",
  }),
  cardsArrowType: arrowArg({
    name: "Тип стрілок",
  }),
  cardBackground: colorArg({
    defaultValue: "background",
    name: "Картка - колір фону",
  }),
  cardBorderColor: colorArg({
    defaultValue: "stroke",
    name: "Картка - колір обводки",
  }),
  cardTitle: textArg({
    color: "text-primary",
    typography: "h4",
    name: "Картка - заголовок",
  }),
  cardDescription: textArg({
    color: "text-secondary",
    typography: "p1",
    name: "Картка - опис",
  }),
  cardPrice: textArg({
    color: "text-primary",
    typography: "h4",
    name: "Картка - ціна",
  }),
  cardPopupButtonType: buttonArg({
    name: "Картка - тип кнопки Детальніше",
  }),
  cardLinkButtonType: buttonArg({
    name: "Картка - тип кнопки посилання",
  }),
  cardLinkButtonBg: colorArg({
    defaultValue: "transparent",
    name: "Картка - фон кнопки посилання",
  }),
  cardLinkButtonTextColor: colorArg({
    defaultValue: "text-primary",
    name: "Картка - колір тексту кнопки посилання",
  }),
  list: [
    {
      title: "Металопластикові",
      tabItems,
    },
    {
      title: "Алюмінієві",
      tabItems,
    },
    {
      title: "Дерев’яні",
      tabItems,
    },
  ],
  cardPopupBackgroundColor: colorArg({
    defaultValue: "#2D2D2D",
    name: "Попап - колір фону",
  }),
  cardPopupTitle: textArg({
    typography: "h2",
    color: "text-primary",
    name: "Попап - заголовок",
  }),
  cardPopupTabTitle: textArg({
    typography: "h4",
    color: "text-secondary",
    name: "Попап - назва табу",
  }),
  cardPopupDescription: textArg({
    typography: "p1",
    color: "text-secondary",
    name: "Попап - опис",
  }),
  cardPopupLinkButtoType: buttonArg({
    name: "Попап - тип кнопки посилання",
  }),
  cardPopupPrice: textArg({
    typography: "h2",
    color: "text-primary",
    name: "Попап - ціна",
  }),

  paginationBg: colorArg({
    defaultValue: "stroke",
    name: "Пагінація - фон",
  }),
  paginationActiveBg: colorArg({
    defaultValue: "accent",
    name: "Пагінація - фон активний",
  }),
});
