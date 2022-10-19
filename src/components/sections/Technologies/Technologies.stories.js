import React from "react";

import { UiKitContainerDecorator } from "../../../../.storybook/decorators";

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
  baseArgs,
  baseArgTypes,
  colorType,
  radio,
  typographyType,
} from "../../../utils/stories-utils";
import { Technologies } from "./Technologies";

const createCard = ({ title, subTitle, icon }) => ({
  title,
  subTitle,
  icon,
});

const items = [
  createCard({
    title: "Кількість будинків",
    subTitle: "1 будинок, 7 секцій",
    icon: i_1,
  }),
  createCard({
    title: "Кількість поверхів",
    subTitle: "9 поверхів",
    icon: i_2,
  }),
  createCard({
    title: "Стіни",
    subTitle: "Стіни з червоної цегли",
    icon: i_3,
  }),
  createCard({
    title: "Вікна",
    subTitle: "Алюмінієві вікна",
    icon: i_4,
  }),
  createCard({
    title: "Конструкція",
    subTitle: "Монолітно-каркасна технологія будівництва",
    icon: i_5,
  }),
  createCard({
    title: "Ліфти",
    subTitle: "Ліфти кращих європейських виробників",
    icon: i_6,
  }),
  createCard({
    title: "Оздоблення",
    subTitle: "Оздоблення квартир під ремонт",
    icon: i_7,
  }),
  createCard({
    title: "Фасад",
    subTitle: "Навісний фасад, утеплення мінеральною ватою",
    icon: i_8,
  }),
  createCard({
    title: "Внутрішній простір",
    subTitle: "Закрита територія з ландшафтним дизайном",
    icon: i_9,
  }),
  createCard({
    title: "Опалення",
    subTitle: "Автономне опалення у будинку",
    icon: i_10,
  }),
  createCard({
    title: "Паркінг",
    subTitle: "Підземний та наземний паркінги",
    icon: i_11,
  }),
];

const argTypes = {
  ...baseArgTypes,
  subTitleTypography: typographyType(),
  subTitleColor: colorType(),
  titleTypography: typographyType(),
  titleColor: colorType(),
  gridCols: radio(["3", "4"]),
  cardTitleTypography: typographyType(),
  cardTitleColor: colorType(),
  cardSubTitleTypography: typographyType(),
  cardSubTitleColor: colorType(),
  cardBackground: colorType(),
  cardBorderColor: colorType(),
};

const args = {
  ...baseArgs,
  subTitle: "ми зібрали усе найкраще",
  subTitleTypography: "h5",
  subTitleColor: "accent",
  title: "Технології будівництва",
  titleTypography: "h2",
  titleColor: "primary",
  gridCols: "4",
  items,
  cardBackground: "background",
  cardBorderColor: "stroke",
  cardTitleTypography: "h4",
  cardTitleColor: "primary",
  cardSubTitleTypography: "p1",
  cardSubTitleColor: "secondary",
};

export default {
  title: "Sections/Technologies",
  component: Technologies,
  decorators: [UiKitContainerDecorator],
  argTypes,
  args,
};

export const Default = (args) => {
  const {
    backgroundColor,
    theme,
    subTitleTypography,
    subTitleColor,
    titleTypography,
    titleColor,
    cardBackground,
    cardBorderColor,
    cardTitleColor,
    cardTitleTypography,
    cardSubTitleColor,
    cardSubTitleTypography,
    gridCols,
    ...rest
  } = args;

  return (
    <Technologies
      {...rest}
      settings={{
        gridCols,
        section: {
          theme,
          bg: backgroundColor,
        },
        title: {
          type: titleTypography,
          color: titleColor,
        },
        subTitle: {
          type: subTitleTypography,
          color: subTitleColor,
        },
        card: {
          props: {
            borderColor: cardBorderColor,
            bg: cardBackground,
          },
          title: {
            type: cardTitleTypography,
            color: cardTitleColor,
          },
          subTitle: {
            type: cardSubTitleTypography,
            color: cardSubTitleColor,
          },
        },
      }}
    />
  );
};
