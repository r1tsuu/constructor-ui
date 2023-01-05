import {
  arg,
  args,
  arrowArg,
  colorArg,
  hiddenArg,
  radioArg,
  textArg,
} from "../../../utils";
import { assets } from "../../../assets";

const _card = () => ({
  createdAt: "2022-11-22T12:48:08.935Z",
  title:
    "Встигніть здійснити бажання про власне житло! Продаж квартир у жк lavanda park відкрито!",
  categoryTitle: "Новина",
  categoryBackgroundColor: "#291321",
  categoryBorderColor: "#551C3B",
  categoryColor: "#CB2B83",
  photoSource: assets.imgPlaceholder,
});

export const blogAllPageArgs = args({
  backgroundColor: colorArg({
    defaultValue: "background",
    name: "Колір фону",
  }),
  theme: radioArg({
    defaultValue: "dark",
    name: "Тема",
    options: ["dark", "light", "custom"],
  }),
  title: textArg({
    defaultValue: "Блог",
    name: "Заголовок",
    typography: "h2",
    color: "text-primary",
  }),
  category: textArg({
    name: "Таб категорія",
    typography: "h4",
    color: "text-secondary",
  }),
  categoryActiveColor: colorArg({
    name: "Таб категорія активний колір",
    defaultValue: "text-primary",
  }),
  categoryProgress: colorArg({
    defaultValue: "stroke",
    name: "Таби категорії прогресс колір",
  }),
  categoryActiveProgress: colorArg({
    defaultValue: "accent",
    name: "Таби категорії прогресс колір активний",
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
  card_borderColor: colorArg({
    defaultValue: "stroke",
    name: "Картка - колір обводки",
  }),
  card_botBackground: colorArg({
    defaultValue: "background",
    name: "Картка - фон низ",
  }),
  paginationArrowType: arrowArg({
    name: "Тип стрілки пагінація",
  }),
  categories: hiddenArg({
    value: [
      {
        isActive: true,
        title: "Всі",
      },
      {
        isActive: false,
        title: "Новини",
      },
      {
        isActive: false,
        title: "Акції",
      },
    ],
  }),
  list: hiddenArg({
    value: [_card(), _card(), _card(), _card(), _card(), _card()],
  }),
  page: hiddenArg({
    value: 0,
  }),
  pageCount: hiddenArg({
    value: 10,
  }),
});
