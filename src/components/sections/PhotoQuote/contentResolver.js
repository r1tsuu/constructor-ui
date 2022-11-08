import {
  resolveField,
  resolveFieldMobile,
  getSourceFile,
} from "../../../utils/fields-utils";

export const photoQuoteContentResolver = ({
  description,
  name,
  position,
  photoSource,
  photoSourceMobile,
  defaultContent,
  env,
}) => {
  const srcDesktop = getSourceFile(photoSource.value[0], env);
  return {
    name: resolveField(name.value, defaultContent.name),
    description: resolveField(description.value, defaultContent.description),
    position: resolveField(position.value, defaultContent.position),
    photoSource: resolveField(srcDesktop, defaultContent.photoSource),
    photoSourceMobile: resolveFieldMobile(
      getSourceFile(photoSourceMobile.value[0], env),
      srcDesktop,
      photoSourceMobile
    ),
  };
};
