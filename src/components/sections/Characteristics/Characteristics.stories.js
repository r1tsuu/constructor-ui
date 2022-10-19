import React from "react";

import { UiKitContainerDecorator } from "../../../../.storybook/decorators";

import {
  baseArgs,
  baseArgTypes,
  colorType,
  radio,
  typographyType,
} from "../../../utils/stories-utils";

import { Characteristics } from "./Characteristics";

const createCard = ({ title = "208", subTitle = "комфортних квартир" }) => ({
  title,
  subTitle,
});

const items = [
  createCard({}),
  createCard({
    title: "50",
    subTitle: "апартаментів з патіо",
  }),
  createCard({
    title: "104",
    subTitle: "автомобільних паркомісць",
  }),
  createCard({
    title: "3",
    subTitle: "дитячих майданчика",
  }),
  createCard({
    title: "18",
    subTitle: "мото паркомісць",
  }),
  createCard({
    title: "5",
    subTitle: "житлових секцій",
  }),
  createCard({
    title: "2,4",
    subTitle: "гектара території",
  }),
  createCard({
    title: "7",
    subTitle: "будівель різної висоти",
  }),
];

const argTypes = {
  ...baseArgTypes,
  subTitleTypography: typographyType(),
  subTitleColor: colorType(),
  titleTypography: typographyType(),
  titleColor: colorType(),
  cardTitleTypography: typographyType(),
  cardTitleColor: colorType(),
  cardSubtitleTypography: typographyType(),
  cardSubtitleColor: colorType(),
  gridItems: radio(["3", "4"]),
  cardBorderColor: colorType(),
  cardBackground: colorType(),
};

export default {
  title: "Sections/Characteristics",
  component: Characteristics,
  decorators: [UiKitContainerDecorator],
  argTypes,
  args: {
    items,
    ...baseArgs,
    gridItems: "4",
    subTitle: "переваги комплексу",
    subTitleTypography: "h5",
    subTitleColor: "accent",
    title: "про нас в цифрах",
    titleTypography: "h2",
    titleColor: "primary",
    cardBorderColor: "stroke",
    cardBackground: "background",
    cardTitleTypography: "h2",
    cardTitleColor: "primary",
    cardSubtitleTypography: "p1",
    cardSubtitleColor: "secondary",
  },
};

export const Default = (args) => {
  const {
    theme,
    backgroundColor,
    gridItems,
    subTitleTypography,
    subTitleColor,
    titleTypography,
    titleColor,
    cardBorderColor,
    cardBackground,
    cardTitleTypography,
    cardTitleColor,
    cardSubtitleTypography,
    cardSubtitleColor,
    ...rest
  } = args;

  return (
    <Characteristics
      {...rest}
      settings={{
        gridItems,
        card: {
          title: {
            type: cardTitleTypography,
            color: cardTitleColor,
          },
          subTitle: {
            type: cardSubtitleTypography,
            color: cardSubtitleColor,
          },
          props: {
            borderColor: cardBorderColor,
            bg: cardBackground,
          },
        },
        section: {
          theme,
          bg: backgroundColor,
        },
        subTitle: {
          type: subTitleTypography,
          color: subTitleColor,
        },
        title: {
          type: titleTypography,
          color: titleColor,
        },
      }}
    />
  );
};
