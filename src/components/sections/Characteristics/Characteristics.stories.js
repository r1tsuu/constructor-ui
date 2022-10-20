import React from "react";

import {
  createSection,
  textArg,
  radioArg,
  cardArg,
  parseArgs,
} from "../../../utils/stories-utils";

import { Characteristics } from "./Characteristics";

const item = (title, subTitle) => ({
  title,
  subTitle,
});

const items = [
  item("208", "комфортних квартир"),
  item("50", "апартаментів з патіо"),
  item("104", "автомобільних паркомісць"),
  item("3", "дитячих майданчика"),
  item("18", "мото паркомісць"),
  item("5", "житлових секцій"),
  item("2,4", "гектара території"),
  item("7", "будівель різної висоти"),
];

export default createSection({
  name: "Characteristics",
  component: Characteristics,
  args: {
    items,
    subTitle: textArg({
      defaultValue: "переваги комплексу",
      typography: "h5",
      color: "accent",
    }),
    title: textArg({
      defaultValue: "про нас в цифрах",
      typography: "h2",
      color: "text-primary",
    }),
    gridColumns: radioArg({
      options: [3, 4],
      defaultValue: 4,
    }),
    card: cardArg({}),
    "card.title": textArg({
      typography: "h2",
      color: "text-primary",
    }),
    "card.subTitle": textArg({
      typography: "p1",
      color: "text-secondary",
    }),
  },
});

export const Default = (args) => <Characteristics {...parseArgs(args)} />;
