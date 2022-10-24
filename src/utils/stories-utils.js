import {
  SectionDecorator,
  UiKitContainerDecorator,
} from "../../.storybook/decorators";

import imagePlaceholder from "../stories-assets/img-placeholder.png";

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

export const sectionArgs = (args) => {
  const withBaseArgs = {
    ...args,
    section_theme: radioArg({
      options: ["dark", "light", "custom"],
      defaultValue: "dark",
    }),
    section_bg: colorArg({ defaultValue: "background" }),
  };

  return Object.keys(withBaseArgs).reduce(
    (acc, argKey) => {
      const arg = withBaseArgs[argKey];
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
                // disable: true,
              },
            },
          },
        };
      const argType = arg.type;

      const resolveSettingsArgKey = () => {
        if (typeof arg.prefix === "undefined") return `settings_${argKey}`;
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
            argTypes: acc.argTypes,
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

export const createSection = ({ name, args, component }) => ({
  title: `Sections/${name}`,
  decorators: [UiKitContainerDecorator, SectionDecorator],
  ...sectionArgs(args),
  component,
});