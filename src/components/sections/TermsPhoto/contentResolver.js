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
  title: fieldUtils.resolveField(title.value, defaultContent.title),
  subTitle: fieldUtils.resolveField(subTitle.value, defaultContent.subTitle),
  photo: fieldUtils.getSourceFile(photo.value[0], env),
  items: fieldUtils.resolveField(
    items.data.map(({ custom_fields, _id }, index) => ({
      title: fieldUtils.resolveField(
        custom_fields.title.value,
        atOrFist(defaultContent.items, index).title
      ),
      subTitle: fieldUtils.resolveField(
        custom_fields.subTitle.value,
        atOrFist(defaultContent.items, index).subTitle
      ),
      description: fieldUtils.resolveField(
        custom_fields.description.value,
        atOrFist(defaultContent.items, index).description
      ),
      advantage: fieldUtils.resolveField(
        custom_fields.advantage.value,
        atOrFist(defaultContent.items, index).advantage
      ),
      buttonName: fieldUtils.resolveField(
        custom_fields.buttonName.value,
        atOrFist(defaultContent.items, index).buttonName
      ),
      buttonLink: fieldUtils.resolveField(
        custom_fields.buttonLink.value,
        atOrFist(defaultContent.items, index).buttonLink
      ),
      _id,
    })),
    defaultContent.items
  ),
});
