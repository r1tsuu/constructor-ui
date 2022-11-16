import defaultPhoto from "../../../assets/img-placeholder.png";
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
  photoSource: defaultPhoto,
  photoSourceMobile: defaultPhoto,
});

const description = `Період зимових свят — це час мріяти, будувати плани та приміряти нові образи. Тому напередодні Нового року бренд Anna Mi радий презентувати свою нову колекцію, яка об'єднала в собі головні тренди прийдешнього 2022-го року. Як створити свій особливий образ і на які деталі звернути особливу увагу — читайте в нашому блозі.
Період зимових свят — це час мріяти, будувати плани та приміряти нові образи. Тому напередодні Нового року бренд Anna Mi радий презентувати свою нову колекцію, яка об'єднала в собі головні тренди прийдешнього 2022-го року. Як створити свій особливий образ і на які деталі звернути особливу увагу — читайте в нашому блозі.
Період зимових свят — це час мріяти, будувати плани та приміряти нові образи. Тому напередодні Нового року бренд Anna Mi радий презентувати свою нову колекцію, яка об'єднала в собі головні тренди прийдешнього 2022-го року. Як створити свій особливий образ і на які деталі звернути особливу увагу — читайте в нашому блозі.
`;

const tabsPopup = [
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
    tabsPopup,
  },
  {
    title: "Якщо загаловок в 1 стрічку то так",
    description,
    price: "4 000 грн",
    tabsPopup,
  },
  {
    title: "Головний заголовок в 2 ряди, не більше, або в 1",
    description,
    price: "5 000 грн",
    tabsPopup,
  },
  {
    title: "Головний заголовок в 2 ряди, не більше, або в 1",
    description,
    price: "5 000 грн",
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
  tab: textArg({
    color: "text-secondary",
    typography: "h4",
    name: "Таб - назва",
  }),
  tabActiveColor: colorArg({
    defaultValue: "text-secondary",
    name: "Таб - колір назви активний",
  }),
  tabSeparatorColor: colorArg({
    defaultValue: "stroke",
    name: "Таб - колір сепаратору",
  }),
  tabActiveSeparatorColor: colorArg({
    defaultValue: "accent",
    name: "Таб - колір сепаратору активний ",
  }),
  cardsArrowType: arrowArg({
    name: "Тип стрілок слайдер карток",
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
});
