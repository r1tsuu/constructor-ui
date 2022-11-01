export const baseResolver = ({ field }) => {
  return field.value;
};

export const getSingleFileSourceWithType = (singleFileWithType, SITE_URL) => {
  if (process.env.NODE_ENV === "development")
    return "https://i.imgur.com/4DWn4K7.png";
  return `${SITE_URL}${singleFileWithType.replace("./", "/")}`;
};

export const getSingleFileSource = ({
  singleFile,
  SITE_URL,
  type = "compression",
}) => {
  return getSingleFileSourceWithType(singleFile[type], SITE_URL);
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
