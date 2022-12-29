import { assets } from "../../../assets";
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
    name: resolveField(name.value, "name"),
    description: resolveField(description.value, "descirption"),
    position: resolveField(position.value, "position"),
    photoSource: resolveField(srcDesktop, assets.imgPlaceholderHeight),
    photoSourceMobile: resolveFieldMobile(
      getSourceFile(photoSourceMobile.value[0], env),
      srcDesktop,
      assets.imgPlaceholderHeight
    ),
  };
};
