// import React from "react";
// import { COMPONENT_NAMES } from "../../../utils/constants";

// import { createSection, parseArgs } from "../../../utils/stories-utils";

// import { Terms } from "./Terms";
// import { termsArgs } from "./termsArgs";

// export default createSection({
//   name: COMPONENT_NAMES.SECTIONS.DEFAULT_BLOCK_TERMS,
//   component: Terms,
//   args: termsArgs,
// });

// export const Default = (args) => <Terms {...parseArgs(args)} />;

// const _card = ({
//   title = "xx",
//   subTitle = null,
//   description,
//   advantage = null,
//   buttonName = "Текст кнопки",
//   buttonLink = "https://google.com",
// }) => ({
//   title,
//   subTitle,
//   description,
//   advantage,
//   buttonName,
//   buttonLink,
// });

// Default.args = {
//   subTitle: "КУПУВАТИ -ВИГІДНО",
//   title: "УМОВИ ПРИДБАННЯ",
//   items: [
//     _card({
//       title: "100%",
//       subTitle: "повна оплата",
//       description:
//         "Придбавши квартиру за умови повної оплати, ви отримуєте вигідні індивідуальні умови придбання.",
//       advantage: "Знижка Х %",
//     }),
//     _card({
//       title: "x м",
//       subTitle: "розстрочка",
//       description:
//         "Придбати квартиру в розстрочку до вводу в експлуатацію – ідеальний варіант, коли є потреба в оплаті частинами.",
//       advantage: "перший внесок xx %",
//     }),
//     _card({
//       subTitle: "кредит",
//       description:
//         "Скористайтесь програмами кредитування від наших банків-партнерів. ",
//       advantage: "під xx % річних",
//     }),
//     _card({
//       subTitle: "іпотека",
//       description:
//         "Розрахунок має приблизний характер. Звяжіться з нашим відділом продажів, щоб підібрати оптимальний план оплати. ",
//       advantage: "від x % компенсаційна ставка",
//     }),
//     _card({
//       title: "x м",
//       subTitle: "розстрочка",
//       description:
//         "Придбати квартиру в розстрочку до вводу в експлуатацію – ідеальний варіант, коли є потреба в оплаті частинами.",
//       advantage: "перший внесок xx %",
//     }),
//     _card({
//       subTitle: "кредит",
//       description:
//         "Скористайтесь програмами кредитування від наших банків-партнерів. ",
//       advantage: "під xx % річних",
//     }),
//   ],
// };
