import { args, argsWithBase } from "../../../utils";
// const getInputVars = (input, type) => ({
//   [`--input-${type}-border-width`]: input.borderWidth,
//   [`--input-${type}-border-radius`]: input.borderRadius,
//   [`--input-${type}-border-color`]: input.borderColor,
//   [`--input-${type}-text-color`]: input.textColor,
//   [`--input-${type}-padding`]: input.padding,
//   [`--input-${type}-error-color`]: input.errorColor,
//   [`--input-${type}-background-color`]: input.backgroundColor,
//   [`--input-${type}-height`]: input.height,
// });

const buttonArg = (type) => {
  const args = {
    borderRadius: "10px",
    backgroundColor: "#6c757d",
    textColor: "#17a2b8",
    padding: "20px 20px 20px 20px",
    borderColor: "#000",
    borderWidth: "1px",
    height: "50px",
    errorColor: "#FF0000",
  };

  return argsWithBase({ args, base: type });
};

export const buttonsArgs = args(
  {
    ...buttonArg("primary"),
    ...buttonArg("secondary"),
    ...buttonArg("tertiary"),
  },
  true
);
