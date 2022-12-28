import { args, argsWithBase, colorArg } from "../../../utils";

const cubeArg = (type) => {
  const base = `cube_${type}`;

  const args = {
    borderRadius: "10px",
    bgColor: colorArg({ defaultValue: "#6c757d" }),
    iconColor: colorArg({ defaultValue: "#17a2b8" }),
    borderColor: colorArg({ defaultValue: "#17a2b8" }),
    borderWidth: "1px",
    hoverBgColor: colorArg({ defaultValue: "#343a40" }),
    hoverBorderColor: colorArg({ defaultValue: "#fd7e14" }),
    hoverIconColor: colorArg({ defaultValue: "#17a2b8" }),
  };

  return argsWithBase({ args, base });
};

export const arrowsArgs = args(
  {
    ...cubeArg("primary"),
    ...cubeArg("secondary"),
    ...cubeArg("tertiary"),
    long_iconColor: colorArg({ defaultValue: "#28a745" }),
    long_iconHoverColor: colorArg({
      defaultValue: "#28a745",
    }),
  },
  true
);
