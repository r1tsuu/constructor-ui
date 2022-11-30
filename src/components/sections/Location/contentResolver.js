import {
  resolveField,
  resolveFieldMobile,
  getSourceFile,
} from "../../../utils/fields-utils";

export const locationContentResolver = ({
  title,
  subTitle,
  buttonLink,
  buttonName,
  firstTab_name,
  firstTab_photoSource,
  firstTab_photoSourceMobile,
  secondTab_name,
  secondTab_photoSource,
  secondTab_photoSourceMobile,
  env,
  defaultContent,
}) => {
  const firstPhoto = resolveField(
    getSourceFile(firstTab_photoSource.value[0], env),
    defaultContent.firstTab_photoSource
  );
  const secondPhoto = resolveField(
    getSourceFile(secondTab_photoSource.value[0], env),
    defaultContent.secondTab_photoSource
  );

  return {
    title: resolveField(title.value, defaultContent.title),
    subTitle: resolveField(subTitle.value, defaultContent.subTitle),
    buttonLink: resolveField(buttonLink.value, defaultContent.buttonLink),
    buttonName: resolveField(buttonName.value, defaultContent.buttonName),
    firstTab: {
      name: resolveField(firstTab_name.value, defaultContent.firstTab_name),
      photoSource: firstPhoto,
      photoSourceMobile: resolveFieldMobile(
        getSourceFile(firstTab_photoSourceMobile.value[0], env),
        firstPhoto,
        defaultContent.firstTab_photoSource
      ),
    },
    secondTab: {
      name: resolveField(secondTab_name.value, defaultContent.secondTab_name),
      photoSource: secondPhoto,
      photoSourceMobile: resolveFieldMobile(
        getSourceFile(secondTab_photoSourceMobile.value[0], env),
        secondPhoto,
        defaultContent.secondTab_photoSource
      ),
    },
  };
};
