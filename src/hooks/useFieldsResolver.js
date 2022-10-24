// import { useEnvironment } from "../contexts/EnvironmentContext";

const textResolver = ({ field }) => {
  return field.value;
};

const getSingleFileSource = (singleFile, type, SITE_URL) => {
  return `${SITE_URL}${singleFile[type].replace("./", "/")}`;
};

const fileResolver = ({
  field,
  isArray = false,
  type = "compression",
  SITE_URL,
}) => {
  if (!Array.isArray(field)) return getSingleFileSource(field, type, SITE_URL);
  if (!isArray) return getSingleFileSource(field[0], type, SITE_URL);

  return field.map(({ _id, ...singleFile }) => ({
    _id,
    source: getSingleFileSource(singleFile, type, SITE_URL),
  }));
};

export const useFieldsResolver = () => {
  // const { SITE_URL } = useEnvironment();

  const SITE_URL = "https://google.com";

  /** @param {{type: "compression" | "preview" | "path" | undefined, field: object, isArray: boolean | undefined}} params */
  const fileResolverBinded = (params) =>
    fileResolver({
      ...params,
      SITE_URL,
    });

  const mapRepeat = ({ field, keyResolvers }) => {
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

  return {
    textResolver,
    fileResolver: fileResolverBinded,
    mapRepeat,
  };
};
