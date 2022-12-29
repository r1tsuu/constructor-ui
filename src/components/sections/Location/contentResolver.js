import { assets } from "../../../assets";
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
    assets.imgPlaceholder
  );
  const secondPhoto = resolveField(
    getSourceFile(secondTab_photoSource.value[0], env),
    assets.imgPlaceholder
  );

  return {
    title: resolveField(title.value, "title"),
    subTitle: resolveField(subTitle.value, "subtitle"),
    buttonLink: buttonLink.value,
    buttonName: buttonName.value,
    firstTab: {
      name: resolveField(firstTab_name.value, "firsttabname"),
      photoSource: firstPhoto,
      photoSourceMobile: resolveFieldMobile(
        getSourceFile(firstTab_photoSourceMobile.value[0], env),
        firstPhoto,
        assets.imgPlaceholder
      ),
    },
    secondTab: {
      name: resolveField(secondTab_name.value, "secondtabname"),
      photoSource: secondPhoto,
      photoSourceMobile: resolveFieldMobile(
        getSourceFile(secondTab_photoSourceMobile.value[0], env),
        secondPhoto,
        assets.imgPlaceholder
      ),
    },
  };
};
