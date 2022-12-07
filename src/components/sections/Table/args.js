import { booleanArg, buttonArg, colorArg, sectionArgs, textArg } from "../../../utils";
import { assets } from "../../../assets";

// const _itemSlide = () => ({
//   photoSource: assets.imgPlaceholder,
//   photoSourceMobile: assets.imgPlaceholderHeight,
// });

const tabs = [
  {
    title: "Tab 1",
    table: {
      head: ["Nazva", "Nazva 2", "Nazva 3"],
      body: [
        ["1. Nazva", "Tekst", "Tekst"],
        ["2. Nazva", "Tekst", "Tekst"],
        ["3. Nazva", "Tekst", "Tekst"],
        ["4. Nazva", "Tekst", "Tekst"],
      ],
    },
  },
  {
    title: "Tab 2",
    table: {
      head: ["Nazva2", "Nazva 2", "Nazva 3"],
      body: [
        ["1. Nazva", "Tekst", "Tekst"],
        ["2. Nazva", "Tekst", "Tekst"],
        ["3. Nazva", "Tekst", "Tekst"],
        ["4. Nazva", "Tekst", "Tekst"],
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

// const tableTitles = [
//   "Назва може бути закріплена 1",
//   "Назва 2",
//   "Nazva 3"
// ]

// const table = [
//   ["1. Nazva", "Tekst colonki 2", "teskt colonki 3"],
//   ["2. Nazva", "Tekst colonki 2", "teskt colonki 3"]
// ]
