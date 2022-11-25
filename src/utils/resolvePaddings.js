export const resolvePaddings = ({
  paddingTop: pt,
  paddingBottom: pb,
  defaultPaddingTop,
  defaultPaddingBottom,
}) => {
  const paddingVars = (prefix) => ({
    0: `--${prefix}-mobile`,
    1: `--${prefix}-tablet`,
    2: `--${prefix}-laptop`,
    3: `--${prefix}-desktop`,
  });

  if (!pt) {
    pt = defaultPaddingTop;
  }

  if (!pb) {
    pb = defaultPaddingBottom;
  }

  const paddingsTop = paddingTop.split(" ").reduce(
    (acc, value, index) => ({
      ...acc,
      [paddingVars("padding-top")[index]]: value,
    }),
    {}
  );

  const paddingsBottom = paddingBottom.split(" ").reduce(
    (acc, value, index) => ({
      ...acc,
      [paddingVars("padding-bottom")[index]]: value,
    }),
    {}
  );

  return {
    ...paddingsTop,
    ...paddingsBottom,
  };
};
