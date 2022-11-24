export const resolvePaddings = ({
  paddingTop,
  paddingBottom,
  defaultPaddingTop = "40px 60px 80px 80px",
  defaultPaddingBottom = "40px 60px 80px 80px",
}) => {
  if (!paddingTop) {
    paddingTop = defaultPaddingTop;
  }

  if (!paddingBottom) {
    paddingBottom = defaultPaddingBottom;
  }
  const paddingVars = (prefix) => ({
    0: `--${prefix}-mobile`,
    1: `--${prefix}-tablet`,
    2: `--${prefix}-laptop`,
    3: `--${prefix}-desktop`,
  });

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
