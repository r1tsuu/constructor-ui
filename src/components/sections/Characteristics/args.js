import { cardArg, radioArg, sectionArgs, textArg } from "../../../utils";

const _item = (title, subTitle) => ({
  title,
  subTitle,
});

export const characteristicsArgs = sectionArgs({
  subTitle: textArg({
    typography: "h5",
    color: "accent",
    defaultValue: "переваги комплексу",
    name: "Підзаголовок",
  }),
  title: textArg({
    typography: "h2",
    color: "text-primary",
    defaultValue: "про нас в цифрах",
    name: "Заголовок",
  }),
  items: [
    _item("208", "комфортних квартир"),
    _item("50", "апартаментів з патіо"),
    _item("104", "автомобільних паркомісць"),
    _item("3", "дитячих майданчика"),
    _item("18", "мото паркомісць"),
    _item("5", "житлових секцій"),
    _item("2,4", "гектара території"),
    _item("7", "будівель різної висоти"),
  ],

  gridColumns: radioArg({
    options: [3, 4],
    defaultValue: 4,
    name: "Кількість колонок",
  }),
  card: cardArg({
    name: "Картка",
  }),
  card_title: textArg({
    typography: "h2",
    color: "text-primary",
    name: "Картка - Заголовок",
  }),
  card_subTitle: textArg({
    typography: "p1",
    color: "text-secondary",
    name: "Картка - Підзаголовок",
  }),
});
