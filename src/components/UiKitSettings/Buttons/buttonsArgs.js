import { args, argsWithBase } from "../../../utils";

const buttonArg = (type) => {
  const args = {
    borderRadius: "10px",
    bgColor: "#6c757d",
    textColor: "#17a2b8",
    borderColor: "#000",
    borderWidth: "1px",
    hoverBgColor: "#343a40",
    hoverTextColor: "#007bff",
    hoverBorderColor: "#fd7e14",
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
