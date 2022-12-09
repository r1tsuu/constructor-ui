import { booleanArg, buttonArg, colorArg, sectionArgs, textArg } from "../../../utils";
import { assets } from "../../../assets";

const tabs = [
  {
    title: "Tab 1",
    table: {
      head: ["Nazva1", "Nazva1", "Nazva1", "Nazva1", "Nazva1", "Nazva1", "Nazva1"],
      body: [
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
      ],
    },
  },
  {
    title: "Tab 2",
    table: {
      head: ["Nazva2", "Nazva 2", "Nazva 2", "Nazva2", "Nazva2", "Nazva2", "Nazva2"],
      body: [
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
      ],
    },
  },
  {
    title: "Tab 3",
    table: {
      head: ["Nazva3", "Nazva3", "Nazva 3", "Nazva3", "Nazva3", "Nazva3", "Nazva3"],
      body: [
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
        ["Nazva1", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst", "Tekst"],
      ],
    },
  },
];

export const TableArgs = sectionArgs({
  title: textArg({
    color: "text-primary",
    typography: "h2",
    defaultValue: `Таблиця характеристик`,
  }),
  items: Array(6).fill({
    photoSource: assets.imgPlaceholder,
    photoSourceMobile: assets.imgPlaceholderHeight,
  }),
  tabs,
});
