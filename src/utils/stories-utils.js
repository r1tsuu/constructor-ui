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
  value,
}) => ({
  color,
  typography,
  value,
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

export const sectionArgs = (args) => {
  const withBaseArgs = {
    ...args,
    "section.theme": radioArg({
      options: ["dark", "light", "custom"],
      defaultValue: "dark",
    }),
    "section.bg": colorArg({ defaultValue: "background" }),
  };

  return Object.keys(withBaseArgs).reduce(
    (acc, argKey) => {
      const arg = withBaseArgs[argKey];
      if (typeof arg !== "object")
        return {
          args: {
            ...acc.args,
            args: {
              [argKey]: arg,
            },
          },
        };
      const argType = arg.type;

      const resolveSettingsArgKey = () => {
        if (typeof arg.prefix === "undefined") return `settings.${argKey}`;
        if (arg.prefix === null) return `${argKey}`;
        return `${arg.prefix}.${argKey}`;
      };

      const settingsArgKey = resolveSettingsArgKey();

      switch (argType) {
        case "text":
          const colorKey = `${settingsArgKey}.color`;
          const typeKey = `${settingsArgKey}.type`;
          return {
            args: {
              ...acc.args,
              [argKey]: arg.value,
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
          const borderColorKey = `${settingsArgKey}.props.borderColor`;
          const bgKey = `${settingsArgKey}.props.bg`;
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

function parseArgs(obj) {
  const result = {};

  // For each object path (property key) in the object
  for (const objectPath in obj) {
    // Split path into component parts
    const parts = objectPath.split(".");

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

const test = sectionArgs({
  title: textArg({
    value: "some text",
  }),
  subTitle: textArg({
    value: "some text2",
  }),
});

console.log(JSON.stringify(parseArgs(test.args)));

export const baseArgTypes = {
  theme: themeType(),
  backgroundColor: colorType(),
};

export const baseArgs = {
  theme: "dark",
  backgroundColor: "background",
};
