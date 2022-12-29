import { assets } from "../../../assets";
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
  buttonLink,
  defaultContent,
  icon,
  env,
}) => {
  const srcDesktop = getSourceFile(photoSource.value[0], env);

  return {
    title: resolveField(title.value, "title"),
    subTitle: resolveField(subTitle.value, "subtitle"),
    photoSource: resolveField(srcDesktop, assets.imgPlaceholder),
    photoSourceMobile: resolveFieldMobile(
      getSourceFile(photoSourceMobile.value[0], env),
      srcDesktop,
      assets.imgPlaceholder
    ),
    description: resolveField(description.value, "descritpion"),
    buttonName: resolveField(buttonName.value, "buttonanem"),
    icon: resolveField(getSourceFile(icon.value[0], env), null),
    buttonLink: buttonLink.value,
  };
};
