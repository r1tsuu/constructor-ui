import {
  getSourceFile,
  resolveField,
  resolveFieldMobile,
} from "../../../utils/fields-utils";
import { atOrFist } from "../../../utils";
import { assets } from "../../../assets";

export const welcomeSliderContentResolver = ({
  items,
  env,
  defaultContent,
}) => {
  return {
    items: items.data.map(({ custom_fields, _id }, index) => {
      const photoSource = getSourceFile(
        custom_fields.photoSource.value[0],
        env
      );
      return {
        photoSource: resolveField(photoSource, assets.imgPlaceholder),
        photoSourceMobile: resolveFieldMobile(
          getSourceFile(custom_fields.photoSource.value[0], env),
          photoSource,
          assets.imgPlaceholder
        ),
        buttonName: resolveField(custom_fields.buttonName.value, "button"),
        buttonLink: resolveField(custom_fields.buttonLink.value, ""),
        _id,
      };
    }),
  };
};
