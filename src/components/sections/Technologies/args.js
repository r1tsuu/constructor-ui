import { sectionArgs, textArg, radioArg, cardArg } from "../../../utils";

import i_1 from "./story-assets/1.svg";
import i_2 from "./story-assets/2.svg";
import i_3 from "./story-assets/3.svg";
import i_4 from "./story-assets/4.svg";
import i_5 from "./story-assets/5.svg";
import i_6 from "./story-assets/6.svg";
import i_7 from "./story-assets/7.svg";
import i_8 from "./story-assets/8.svg";
import i_9 from "./story-assets/9.svg";
import i_10 from "./story-assets/10.svg";
import i_11 from "./story-assets/11.svg";

const _item = (title, subTitle, icon) => ({
  title,
  subTitle,
  icon,
});

export const technologiesArgs = sectionArgs({
  subTitle: textArg({
    typography: "h5",
    color: "accent",
    defaultValue: "ми зібрали усе найкраще",
    name: "Підзаголовок",
  }),
  title: textArg({
    typography: "h2",
    color: "text-primary",
    defaultValue: "Технології будівництва",
    name: "Заголовок",
  }),
  items: [
    _item("Кількість будинків", "1 будинок, 7 секцій", i_1),
    _item("Кількість поверхів", "9 поверхів", i_2),
    _item("Стіни", "Стіни з червоної цегли", i_3),
    _item("Вікна", "Алюмінієві вікна", i_4),
    _item("Конструкція", "Монолітно-каркасна технологія будівництва", i_5),
    _item("Ліфти", "Ліфти кращих європейських виробників", i_6),
    _item("Оздоблення", "Оздоблення квартир під ремонт", i_7),
    _item("Фасад", "Навісний фасад, утеплення мінеральною ватою", i_8),
    _item(
      "Внутрішній простір",
      "Закрита територія з ландшафтним дизайном",
      i_9
    ),
    _item("Опалення", "Автономне опалення у будинку", i_10),
    _item("Паркінг", "Підземний та наземний паркінги", i_11),
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
    typography: "h4",
    color: "text-primary",
    name: "Картка - Заголовок",
  }),
  card_subTitle: textArg({
    typography: "p1",
    color: "text-secondary",
    name: "Картка - Підзаголовок",
  }),
});
