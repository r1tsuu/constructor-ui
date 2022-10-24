import React from "react";

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

import {
  cardArg,
  createSection,
  parseArgs,
  radioArg,
  textArg,
} from "../../../utils/stories-utils";
import { Technologies } from "./Technologies";

const item = (title, subTitle, icon) => ({
  title,
  subTitle,
  icon,
});

const items = [
  item("Кількість будинків", "1 будинок, 7 секцій", i_1),
  item("Кількість поверхів", "9 поверхів", i_2),
  item("Стіни", "Стіни з червоної цегли", i_3),
  item("Вікна", "Алюмінієві вікна", i_4),
  item("Конструкція", "Монолітно-каркасна технологія будівництва", i_5),
  item("Ліфти", "Ліфти кращих європейських виробників", i_6),
  item("Оздоблення", "Оздоблення квартир під ремонт", i_7),
  item("Фасад", "Навісний фасад, утеплення мінеральною ватою", i_8),
  item("Внутрішній простір", "Закрита територія з ландшафтним дизайном", i_9),
  item("Опалення", "Автономне опалення у будинку", i_10),
  item("Паркінг", "Підземний та наземний паркінги", i_11),
];

export default createSection({
  name: "Technologies",
  component: Technologies,
  args: {
    subTitle: textArg({
      defaultValue: "ми зібрали усе найкраще",
      typography: "h5",
      color: "accent",
    }),
    title: textArg({
      defaultValue: "Технології будівництва",
      typography: "h2",
      color: "text-primary",
    }),
    gridColumns: radioArg({
      options: [3, 4],
      defaultValue: 4,
    }),
    items,
    card: cardArg({}),
    card_title: textArg({
      typography: "h4",
      color: "text-primary",
    }),
    card_subTitle: textArg({
      typography: "p1",
      color: "text-secondary",
    }),
  },
});

export const Default = (args) => <Technologies {...parseArgs(args)} />;
