import { atOrFist } from "../../../utils";
import {
  getSourceFile,
  resolveField,
  resolveFieldMobile,
} from "../../../utils/fields-utils";

import { assets } from "../../../assets";

export const advantagesSliderContentResolver = ({
  items,
  title,
  subTitle,
  env,
  defaultContent,
}) => {
  return {
    title: resolveField(title.value, "title"),
    subTitle: resolveField(subTitle.value, "subtitle"),
    items: items.data.map(({ custom_fields, _id }, index) => {
      const photoSource = getSourceFile(
        custom_fields.photoSource.value[0],
        env
      );
      return {
        photoSource: resolveField(photoSource, assets.imgPlaceholder),
        photoSourceMobile: resolveField(
          getSourceFile(custom_fields.photoSourceMobile.value[0], env),
          photoSource
        ),
        title: resolveField(custom_fields.title.value, "title"),
        description: resolveField(
          custom_fields.description.value,
          "description"
        ),
        _id,
      };
    }),
  };
};
