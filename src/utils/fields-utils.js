export const getSingleFileSourceWithType = (singleFileWithType, SITE_URL) => {
  return `${SITE_URL}${singleFileWithType.replace("./", "/")}`;
};

export const getSingleFileSource = ({
  singleFile,
  SITE_URL,
  type = "compression",
}) => {
  return getSingleFileSourceWithType(singleFile[type], SITE_URL);
};

export const getSourceFile = (file, env, type = "compression") => {
  if (!file) return "_";
  if (!file[type]) return "_";
  return `${env.SITE_URL}${file[type].replace("./", "/")}`;
};

/** @param {{type: "compression" | "preview" | "path" | undefined, field: object, isArray: boolean | undefined, env: {SITE_URL: string}}} */

export const resolveField = (value, defaultValue) => {
  if (typeof value === "undefined") return defaultValue;
  if (Array.isArray(value)) return value.length ? value : defaultValue;
  return value === "_" ? defaultValue : value;
};

export const resolveFieldMobile = (value, valueDesktop, defaulValue) => {
  return resolveField(value, resolveField(valueDesktop, defaulValue));
};
