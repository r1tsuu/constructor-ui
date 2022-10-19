import React from "react";

import { UiKitContainerDecorator } from "../../../../.storybook/decorators";
import {
  arrowType,
  baseArgs,
  baseArgTypes,
  buttonType,
  colorType,
  typographyType,
} from "../../../utils/stories-utils";

import { Terms } from "./Terms";

const createCard = ({
  title = "до xx років",
  subTitle = null,
  description,
  advantage = null,
  buttonName = "Текст кнопки",
  buttonLink = "https://https://www.google.com",
}) => ({
  title,
  subTitle,
  description,
  advantage,
  buttonName,
  buttonLink,
});

const items = [
  createCard({
    title: "100%",
    subTitle: "повна оплата",
    description:
      "Придбавши квартиру за умови повної оплати, ви отримуєте вигідні індивідуальні умови придбання.",
    advantage: "Знижка Х %",
  }),
  createCard({
    title: "до xx місяців",
    subTitle: "розстрочка",
    description:
      "Придбати квартиру в розстрочку до вводу в експлуатацію – ідеальний варіант, коли є потреба в оплаті частинами.",
    advantage: "перший внесок xx %",
  }),
  createCard({
    subTitle: "кредит",
    description:
      "Скористайтесь програмами кредитування від наших банків-партнерів. ",
    advantage: "під xx % річних",
  }),
  createCard({
    subTitle: "іпотека",
    description:
      "Розрахунок має приблизний характер. Звяжіться з нашим відділом продажів, щоб підібрати оптимальний план оплати. ",
    advantage: "від x % компенсаційна ставка",
  }),
];

const argTypes = {
  ...baseArgTypes,
  subTitleTypography: typographyType(),
  subTitleColor: colorType(),
  titleTypography: typographyType(),
  titleColor: colorType(),
  arrowType: arrowType(),
  buttonType: buttonType(),
  cardBackground: colorType(),
  cardBorderColor: colorType(),
  cardTitleTypography: typographyType(),
  cardTitleColor: colorType(),
  cardSubTitleTypography: typographyType(),
  cardSubTitleColor: colorType(),
  cardDescriptionTypography: typographyType(),
  cardDescriptionColor: typographyType(),
  cardAdvantageTypography: typographyType(),
  cardAdvantageColor: typographyType(),
};

const args = {
  ...baseArgs,
  subTitle: "КУПУВАТИ -ВИГІДНО",
  subTitleTypography: "h5",
  subTitleColor: "accent",
  title: "УМОВИ ПРИДБАННЯ",
  titleTypography: "h2",
  titleColor: "primary",
  arrowType: "cube-default",
  buttonType: "default",
  items,
  cardBackground: "background",
  cardBorderColor: "stroke",
  cardTitleTypography: "h2",
  cardTitleColor: "primary",
  cardSubTitleTypography: "h5",
  cardSubTitleColor: "accent",
  cardDescriptionTypography: "p1",
  cardDescriptionColor: "stroke",
  cardAdvantageTypography: "h4",
  cardAdvantageColor: "primary",
};

export default {
  title: "Sections/Terms",
  component: Terms,
  decorators: [UiKitContainerDecorator],
  args,
  argTypes,
};

export const Default = (args) => {
  const {
    backgroundColor,
    theme,
    subTitleTypography,
    subTitleColor,
    titleTypography,
    titleColor,
    arrowType,
    buttonType,
    cardBackground,
    cardBorderColor,
    cardTitleTypography,
    cardTitleColor,
    cardSubTitleTypography,
    cardSubTitleColor,
    cardDescriptionTypography,
    cardDescriptionColor,
    cardAdvantageTypography,
    cardAdvantageColor,
    ...restArgs
  } = args;

  return (
    <Terms
      {...restArgs}
      settings={{
        arrowType,
        buttonType,
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
          description: {
            type: cardDescriptionTypography,
            color: cardDescriptionColor,
          },
          advantage: {
            type: cardAdvantageTypography,
            color: cardAdvantageColor,
          },
        },
      }}
    />
  );
};
