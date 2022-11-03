import {
  getSourceFile,
  resolveField,
  resolveFieldMobile,
} from "../../../utils/fields-utils";

export const photoTextButtonContentResolver = ({
  title,
  subTitle,
  photoSource,
  photoSourceMobile,
  description,
  buttonName,
  defaultContent,
  env,
}) => {
  const srcDesktop = getSourceFile(photoSource.value[0], env);

  return {
    title: resolveField(title.value, defaultContent.title),
    subTitle: resolveField(subTitle.value, defaultContent.subTitle),
    photoSource: resolveField(srcDesktop, defaultContent.photoSource),
    photoSourceMobile: resolveFieldMobile(
      getSourceFile(photoSourceMobile.value[0], env),
      srcDesktop,
      photoSourceMobile
    ),
    description: resolveField(description.value, defaultContent.value),
    buttonName: resolveField(buttonName.value, defaultContent.buttonName),
  };
};
