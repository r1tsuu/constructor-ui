export const baseResolver = ({ field }) => {
  return field.value;
};

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
  if (!file?.length) return "_";
  if (!file[type]) return "_";
  return `${env.SITE_URL}${file[type].replace("./", "/")}`;
};

/** @param {{type: "compression" | "preview" | "path" | undefined, field: object, isArray: boolean | undefined, env: {SITE_URL: string}}} */
export const fileResolver = ({
  field,
  isArray = false,
  type = "compression",
  env,
}) => {
  const { SITE_URL } = env;
  const { value } = field;

  if (!Array.isArray(value))
    return getSingleFileSource({ singleFile: value, type, SITE_URL });
  if (!isArray)
    return getSingleFileSource({ singleFile: value[0], type, SITE_URL });

  return value.map(({ _id, ...singleFile }) => ({
    _id,
    source: getSingleFileSource({ singleFile, SITE_URL, type }),
  }));
};

export const repeatx1Resolver = ({ field, keyResolvers }) => {
  return field.data.map(({ _id, custom_fields: currentFields }) =>
    Object.keys(currentFields).reduce(
      (acc, fieldKey) => ({
        ...acc,
        [fieldKey]: keyResolvers[fieldKey].resolver({
          field: currentFields[fieldKey],
          ...keyResolvers[fieldKey],
        }),
      }),
      {
        _id,
      }
    )
  );
};

export const resolveField = (value, defaultValue) => {
  if (typeof value === "undefined") return defaultValue;
  if (Array.isArray(value)) return value.length ? value : defaultValue;
  return value === "_" ? value : defaultValue;
};

export const resolveFieldMobile = (value, valueDesktop, defaulValue) => {
  return resolveField(value, resolveField(valueDesktop, defaulValue));
};
