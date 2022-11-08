import {
  buttonArg,
  cardArg,
  radioArg,
  sectionArgs,
  textArg,
} from "../../../utils";
import defaultIcon from "./assets/default-icon.svg";

const _card = (
  title,
  fileSize = "1.7 мб",
  fileLink = "https://www.pdfdrive.com/download.pdf?id=10172273&h=84f0f3490acb0a861ce0cf97be914eed&u=cache&ext=pdf",
  icon = defaultIcon
) => ({
  title,
  fileSize,
  fileLink,
  icon,
});

export const documentationArgs = sectionArgs({
  subTitle: textArg({
    color: "accent",
    typography: "h5",
    defaultValue: "гарантія безпеки ваших інвестицій",
    name: "Підзаголовок",
  }),
  title: textArg({
    color: "text-primary",
    typography: "h2",
    defaultValue: "документація",
    name: "Заголовок",
  }),
  items: [
    _card("Договір оренди земельної ділянки від 12.06.2020р"),
    _card("Декларація про початок будівельних робіт у жк від 20.12.2018"),
    _card("Консолідована фінансова звітність щодо МСФЗ за 2021 р."),
    _card("Проект договору часткової участі в будуванні паркомісця"),
    _card("Генаральний договір страхування"),
    _card("Договір оренди земельної ділянки від 12.06.2020р"),
  ],
  gridColumns: radioArg({
    options: [2, 3, 4],
    defaultValue: 2,
    name: "Кількість колонок",
  }),
  paginationButtonName: "Показати більше",
  paginationButtonType: buttonArg({}),

  card: cardArg({
    name: "Картка",
  }),
  card_title: textArg({
    color: "text-primary",
    typography: "h4",
    name: "Картка - Заголовок",
  }),
  card_fileSize: textArg({
    color: "text-secondary",
    typography: "p1",
    name: "Картка - Розмір файлу",
  }),
});
