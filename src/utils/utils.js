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

export const buttonType = () => {
  return {
    options: ["default", "primary", "secondary", "tertiary"],
    control: {
      type: "radio",
    },
  };
};

export const arrowType = () => {
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

export const typographyType = () => {
  return {
    options: ["h2", "h3", "h4", "h5", "p1", "p2"],
    control: {
      type: "select",
    },
  };
};

export const booleanType = () => {
  return {
    control: "boolean",
  };
};

export const colorType = () => {
  return {
    control: "color",
  };
};

export const imageType = () => imagePlaceholder;

export const radio = (options = []) => {
  return {
    options,
    control: {
      type: "radio",
    },
  };
};

export const textArg = ({
  color = "text-primary",
  typography = "h3",
  defaultValue,
}) => ({
  color,
  typography,
  defaultValue,
  type: "text",
});

export const cardArg = ({
  bg = "background",
  borderColor = "stroke",
  prefix,
}) => ({
  bg,
  borderColor,
  type: "card",
  prefix,
});

export const buttonArg = ({ buttonType = "default", prefix }) => ({
  buttonType,
  type: "button",
  prefix,
});

export const arrowArg = ({ arrowType = "default", prefix }) => ({
  arrowType,
  type: "arrow",
  prefix,
});

export const radioArg = ({ options, defaultValue, prefix }) => ({
  type: "radio",
  options,
  defaultValue,
  prefix,
});

export const colorArg = ({ defaultValue }) => ({
  defaultValue,
  type: "color",
});

export const booleanArg = ({ defaultValue }) => ({
  defaultValue,
  type: "boolean",
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
        case "text":
          const colorKey = `${settingsArgKey}_color`;
          const typeKey = `${settingsArgKey}_type`;
          return {
            args: {
              ...acc.args,
              ...(arg.defaultValue && {
                [argKey]: arg.defaultValue,
              }),
              [colorKey]: arg.color,
              [typeKey]: arg.typography,
            },
            argTypes: {
              ...acc.argTypes,
              [colorKey]: colorType(),
              [typeKey]: typographyType(),
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
              [borderColorKey]: colorType(),
              [bgKey]: colorType(),
            },
          };

        case "button" || "arrow":
          const isButton = argType === "button";
          return {
            args: {
              ...acc.args,
              [settingsArgKey]: isButton ? arg.buttonType : arg.arrowType,
            },
            argTypes: {
              ...acc.argTypes,
              [settingsArgKey]: isButton ? buttonType() : arrowType(),
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
              [settingsArgKey]: radio(arg.options),
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
              [settingsArgKey]: colorType(),
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
              // [settingsArgKey]: booleanType(),
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

export const sectionArgs = (sectionArgs) => {
  return args({
    ...sectionArgs,
    section_theme: radioArg({
      options: ["dark", "light", "custom"],
      defaultValue: "dark",
    }),
    section_bg: colorArg({ defaultValue: "background" }),
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
