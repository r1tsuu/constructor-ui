import { booleanArg, buttonArg, colorArg, sectionArgs, textArg } from "../../../utils";
import { assets } from "../../../assets";

// const _itemSlide = () => ({
//   photoSource: assets.imgPlaceholder,
//   photoSourceMobile: assets.imgPlaceholderHeight,
// });

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
