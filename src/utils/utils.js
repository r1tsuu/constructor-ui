import React from "react";
import clsx from "clsx";

import imagePlaceholder from "../stories-assets/img-placeholder.png";

export const cloneWithClass = ({ className, element }) => {
  return React.cloneElement(element, {
    ...element.props,
    className: clsx(element.props.className, className),
  });
};

export const mergeProps = (props, { className, style }) => {
  return {
    ...props,
    className: clsx(props.className, className),
    style: { ...props.style, ...style },
  };
};

export const snakeToTitleCase = (string) => {
  return string
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => " " + c.toUpperCase());
};

export const buttonType = (name) => {
  return {
    options: ["default", "primary", "secondary", "tertiary"],
    control: {
      type: "radio",
    },
    name,
  };
};

export const arrowType = (name) => {
  return {
    options: [
      "cube-default",
      "cube-primary",
      "cube-secondary",
      "cube-tertiary",
      "long-default",
      "long-custom",
    ],
    control: {
      type: "radio",
    },
    name,
  };
};

export const themeType = () => {
  return {
    options: ["dark", "light", "custom"],
    control: {
      type: "radio",
    },
  };
};

export const typographyType = (name) => {
  return {
    options: ["h2", "h3", "h4", "h5", "p1", "p2"],
    control: {
      type: "select",
    },
    name: name && `${name} / Тип типографії`,
  };
};

export const booleanType = (name) => {
  return {
    control: "boolean",
    name,
  };
};

export const colorType = (name) => {
  return {
    control: "color",
    name,
  };
};

export const imageType = () => imagePlaceholder;

export const radio = (options = [], name) => {
  return {
    options,
    control: {
      type: "radio",
    },
    name,
  };
};

export const inputType = (name) => {
  return {
    options: ["default-1", "default-2", "primary", "secondary", "tertiary"],
    control: {
      type: "radio",
    },
    name,
  };
};

export const textArg = ({
  color = "text-primary",

  typography = "h3",
  fontSize = "",

  defaultValue,
  name,
}) => ({
  color,
  name,
  typography,

  defaultValue,
  fontSize,
  type: "text",
});

export const cardArg = ({
  bg = "background",
  borderColor = "stroke",
  prefix,
  name = "Картка",
}) => ({
  bg,
  borderColor,
  type: "card",
  prefix,
  name,
});

export const buttonArg = ({
  buttonType = "default",
  prefix,
  name = "Тип кнопки",
}) => ({
  buttonType,
  type: "button",
  prefix,
  name,
});

export const arrowArg = ({
  arrowType = "cube-default",
  prefix,
  name = "Тип стрілок",
}) => ({
  arrowType,
  type: "arrow",
  prefix,
  name,
});

export const radioArg = ({ options, defaultValue, name }) => ({
  type: "radio",
  options,
  defaultValue,
  name,
});

export const colorArg = ({ defaultValue, name }) => ({
  defaultValue,
  type: "color",
  name,
});

export const booleanArg = ({ defaultValue, name }) => ({
  defaultValue,
  type: "boolean",
  name,
});

export const inputArg = ({
  defaultValue = "default-1",
  name = "Тип поле введення",
}) => ({
  defaultValue,
  type: "input",
  name,
});

export const arg = ({ defaultValue, name }) => ({
  defaultValue,
  type: "arg",
  name,
});

export const argsWithBase = ({ args, base }) => {
  return Object.keys(args).reduce(
    (acc, argKey) => ({
      ...acc,
      [`${base}_${argKey}`]: args[argKey],
    }),
    {}
  );
};

export const args = (args, noPrefix = false) => {
  return Object.keys(args).reduce(
    (acc, argKey) => {
      const arg = args[argKey];
      if (typeof arg !== "object" || Array.isArray(arg))
        return {
          args: {
            ...acc.args,

            [argKey]: arg,
          },
          argTypes: {
            ...acc.argTypes,
            [argKey]: {
              table: {
                disable: true,
              },
            },
          },
        };

      const argType = arg.type;

      const resolveSettingsArgKey = () => {
        if (typeof arg.prefix === "undefined")
          return noPrefix ? argKey : `settings_${argKey}`;
        if (arg.prefix === null) return `${argKey}`;
        return `${arg.prefix}.${argKey}`;
      };

      const settingsArgKey = resolveSettingsArgKey();

      switch (argType) {
        case "arg":
          return {
            args: {
              ...acc.args,
              [settingsArgKey]: arg.defaultValue,
            },
            argTypes: {
              ...acc.argTypes,
              [settingsArgKey]: {
                name: arg.name,
              },
            },
          };
        case "text":
          const colorKey = `${settingsArgKey}_color`;
          const typeKey = `${settingsArgKey}_type`;
          const fontSizeKey = `${settingsArgKey}_fontSize`;

          return {
            args: {
              ...acc.args,
              ...(arg.defaultValue && {
                [argKey]: arg.defaultValue,
              }),

              [colorKey]: arg.color,
              [typeKey]: arg.typography,
              [fontSizeKey]: arg.fontSize,
            },
            argTypes: {
              ...acc.argTypes,
              [fontSizeKey]: {
                name: arg.name && (
                  <>
                    <div>{arg.name} / Розмір тексту, (10px 20px 30px 40px)</div>{" "}
                  </>
                ),
              },
              [colorKey]: colorType(arg.name && `${arg.name} / Колір`),
              [typeKey]: typographyType(arg.name),
              [argKey]: {
                table: {
                  disable: true,
                },
              },
            },
          };

        case "card":
          const borderColorKey = `${settingsArgKey}_props_borderColor`;
          const bgKey = `${settingsArgKey}_props_bg`;
          return {
            args: {
              ...acc.args,
              [borderColorKey]: arg.borderColor,
              [bgKey]: arg.bg,
            },
            argTypes: {
              ...acc.argTypes,
              [borderColorKey]: colorType(
                arg.name && `${arg.name} / Колір бордеру`
              ),
              [bgKey]: colorType(arg.name && `${arg.name} / Колір фону`),
            },
          };

        case "button":
          return {
            args: {
              ...acc.args,
              [settingsArgKey]: arg.buttonType,
            },
            argTypes: {
              ...acc.argTypes,
              [settingsArgKey]: buttonType(arg.name),
            },
          };

        case "arrow":
          return {
            args: {
              ...acc.args,
              [settingsArgKey]: arg.arrowType,
            },
            argTypes: {
              ...acc.argTypes,
              [settingsArgKey]: arrowType(arg.name),
            },
          };

        case "radio":
          return {
            args: {
              ...acc.args,
              [settingsArgKey]: arg.defaultValue,
            },
            argTypes: {
              ...acc.argTypes,
              [settingsArgKey]: radio(arg.options, arg.name),
            },
          };
        case "color":
          return {
            args: {
              ...acc.args,
              [settingsArgKey]: arg.defaultValue,
            },
            argTypes: {
              ...acc.argTypes,
              [settingsArgKey]: colorType(arg.name),
            },
          };

        case "boolean":
          return {
            args: {
              ...acc.args,
              [settingsArgKey]: arg.defaultValue,
            },
            argTypes: {
              ...acc.argTypes,
              [settingsArgKey]: booleanType(arg.name),
            },
          };

        case "input":
          return {
            args: {
              ...acc.args,
              [settingsArgKey]: arg.defaultValue,
            },
            argTypes: {
              ...acc.argTypes,
              [settingsArgKey]: inputType(arg.name),
            },
          };

        default:
          return acc;
      }
    },
    {
      args: {},
      argTypes: {},
    }
  );
};

export const sectionArgs = (sectionArgs, withBg = true) => {
  return args({
    section_theme: radioArg({
      options: ["dark", "light", "custom"],
      defaultValue: "dark",
      name: "Тема секції",
    }),
    ...(withBg && {
      section_bg: colorArg({ defaultValue: "background", name: "Колір фону" }),
    }),
    ...sectionArgs,
  });
};

export function parseArgs(obj) {
  const result = {};

  // For each object path (property key) in the object
  for (const objectPath in obj) {
    const parts = objectPath.split("_");

    // Create sub-objects along path as needed
    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();
      target = target[part] = target[part] || {};
    }

    // Set value at end of path
    target[parts[0]] = obj[objectPath];
  }

  return result;
}

export const atOrFist = (arr, index) => {
  const at = arr.at(index);
  return typeof at === "undefined" ? arr.at(0) : at;
};

const sufixes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

export const getBytes = (bytes) => {
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return (
    (!bytes && "0 Bytes") ||
    (bytes / Math.pow(1024, i)).toFixed(2) + " " + sufixes[i]
  );
};

export const omitEmpties = (object) => {
  return Object.keys(object).reduce(
    (acc, key) => ({
      ...acc,
      ...((object[key] !== "" || object[key] !== undefined) && {
        [key]: object[key],
      }),
    }),
    {}
  );
};
