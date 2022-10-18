import React from "react";
import { UiKitContainerDecorator } from "../../../../.storybook/decorators";
import {
  buttonType,
  colorType,
  themeType,
  typographyType,
} from "../../../utils/stories-utils";

import { ImageTextButton } from "./ImageTextButton";

const argTypes = {
  buttonType: buttonType(),
  buttonPosition: {
    options: ["left", "center", "right"],
    control: {
      type: "radio",
    },
  },
  backgroundColor: colorType(),
  theme: themeType(),
  subTitleTypography: typographyType(),
  subTitleColor: colorType(),
  titleTypography: typographyType(),
  titleColor: colorType(),
  descriptionTypography: typographyType(),
  descriptionColor: colorType(),
};

export default {
  title: "Sections/Image Text Button",
  component: ImageTextButton,
  decorators: [UiKitContainerDecorator],
  argTypes,
  args: {
    theme: "dark",
    backgroundColor: "background",
    subTitle: "будуємо з любов’ю",
    subTitleTypography: "h5",
    subTitleColor: "accent",
    title: "Про комплекс",
    titleColor: "text-primary",
    titleTypography: "h2",
    description: `Тут ви маєте розмістити необхідне описання блокуНайсухіше місце на Землі знаходиться в Антарктиді. Хоч як дивно це звучить, але деякі ділянки антарктичної долини Мак-Мердо не бачили опадів уже 2 мільйона років.`,
    descriptionColor: "text-secondary",
    descriptionTypography: "p1",
    buttonName: "Текст кнопки",
    photoSource: "https://i.imgur.com/bspeBw0.png",
    isReverse: false,
    buttonType: "default",
    buttonPosition: "left",
    test: {},
  },
};

export const Default = ({
  subTitleTypography,
  subTitleColor,
  titleColor,
  titleTypography,
  descriptionColor,
  descriptionTypography,
  isReverse,
  buttonType,
  buttonPosition,
  theme,
  backgroundColor,
  ...rest
}) => {
  return (
    <ImageTextButton
      settings={{
        isReverse,
        buttonType,
        buttonPosition,
        theme,
        backgroundColor,
        subTitle: {
          type: subTitleTypography,
          color: subTitleColor,
        },
        title: {
          type: titleTypography,
          color: titleColor,
        },
        description: {
          type: descriptionTypography,
          color: descriptionColor,
        },
      }}
      {...rest}
    />
  );
};
