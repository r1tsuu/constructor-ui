// import React from "react";
// import { COMPONENT_NAMES } from "../../../utils/constants";
// import {
//   args,
//   argsWithBase,
//   colorArg,
//   createSetting,
//   parseArgs,
// } from "../../../utils/stories-utils";
// import { Arrows } from "./Arrows";
// import { arrowsArgs } from "./arrowsArgs";

// const cubeArg = (type) => {
//   const base = `cube_${type}`;

//   const args = {
//     borderRadius: "10px",
//     bgColor: colorArg({ defaultValue: "#6c757d" }),
//     iconColor: colorArg({ defaultValue: "#17a2b8" }),
//     borderColor: colorArg({ defaultValue: "#17a2b8" }),
//     borderWidth: "1px",
//     hoverBgColor: colorArg({ defaultValue: "#343a40" }),
//     hoverBorderColor: colorArg({ defaultValue: "#fd7e14" }),
//   };

//   return argsWithBase({ args, base });
// };

// export default createSetting({
//   name: COMPONENT_NAMES.SETTINGS.DEFAULT_UI_KIT_ARROWS,
//   component: Arrows,
//   args: arrowsArgs,
// });

// export const Default = (args) => {
//   return <Arrows {...parseArgs(args)} />;
// };
