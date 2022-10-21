import { useEnvironment } from "../contexts/EnvironmentContext";

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
  if (!isArray) return getSingleFileSource(field[0], type, SITE_URL);

  return field.map(({ _id, ...singleFile }) => ({
    _id,
    source: getSingleFileSource(singleFile, type, SITE_URL),
  }));
};

const mapRepeat = ({ field, keys, }) => {
  const arr = field.data.map(({ custom_fields, _id }) => ({
    _id,
    ...custom_fields,
  }));
};

export const useFieldsResolver = () => {
  const { SITE_URL } = useEnvironment();

  /** @param {{type: "compression" | "preview" | "path" | undefined, field: object, isArray: boolean | undefined}} params */
  const fileResolverBinded = (params) =>
    fileResolver({
      ...params,
      SITE_URL,
    });

    

  return {
    textResolver,
    fileResolver: fileResolverBinded,
    mapRepeat,
  };
};
