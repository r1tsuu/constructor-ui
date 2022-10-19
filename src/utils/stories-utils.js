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

export const baseArgTypes = {
  theme: themeType(),
  backgroundColor: colorType(),
};

export const baseArgs = {
  theme: "dark",
  backgroundColor: "background",
};
