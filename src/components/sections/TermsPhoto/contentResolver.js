import { atOrFist } from "../../../utils";
import * as fieldUtils from "../../../utils/fields-utils";

export const termsPhotoContentResolver = ({
  title,
  subTitle,
  items,
  photo,
  defaultContent,
  env,
}) => ({
  title: fieldUtils.resolveField(title.value, "title"),
  subTitle: fieldUtils.resolveField(subTitle.value),
  photo: fieldUtils.getSourceFile(photo.value[0], env),
  items: items.data.map(({ custom_fields, _id }, index) => ({
    title: fieldUtils.resolveField(custom_fields.title.value, "title"),
    subTitle: fieldUtils.resolveField(custom_fields.subTitle.value, "subtitle"),
    description: fieldUtils.resolveField(
      custom_fields.description.value,
      "descirption"
    ),
    advantage: fieldUtils.resolveField(
      custom_fields.advantage.value,
      "advantage"
    ),
    buttonName: fieldUtils.resolveField(
      custom_fields.buttonName.value,
      "button"
    ),
    buttonLink: fieldUtils.resolveField(custom_fields.buttonLink.value, ""),
    _id,
  })),
});
