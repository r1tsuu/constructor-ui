import { useEnvironment } from "../contexts/EnvironmentContext";
import React from "react";

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

export const useFieldsResolver = (props, fields) => {
  const { SITE_URL } = useEnvironment();

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

  const resolvers = {
    file: fileResolverBinded,
    text: textResolver,
    repeat: mapRepeat,
  };

  const resolvedProps = props &&
    fields && {
      ...Object.keys(fields).reduce(
        (acc, fieldKey) => ({
          ...acc,
          [fieldKey]: resolvers[fields[fieldKey.type]]({
            field: props[fieldKey],
            ...fields[fieldKey].args,
          }),
        }),
        {}
      ),
      settings: parseArgs(props.settings),
    };

  return {
    textResolver,
    fileResolver: fileResolverBinded,
    mapRepeat,
    resolvedProps,
  };
};

export const withResolvedProps = (Component, fields) => {
  return (props) => {
    const { resolvedProps } = useFieldsResolver(props, fields);
    return <Component {...resolvedProps} />;
  };
};
