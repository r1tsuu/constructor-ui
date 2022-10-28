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

import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";
import { Technologies } from "./Technologies";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { technologiesArgs } from "./technologiesArgs";

export default createSection({
  name: COMPONENT_KEYS.TECHNOLOGIES,
  component: Technologies,
  args: technologiesArgs,
});

export const Default = (args) => <Technologies {...parseArgs(args)} />;

const _item = (title, subTitle, icon) => ({
  title,
  subTitle,
  icon,
});

Default.args = {
  subTitle: "ми зібрали усе найкраще",
  title: "Технології будівництва",
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
};
