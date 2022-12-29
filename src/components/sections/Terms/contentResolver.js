import { atOrFist } from "../../../utils";
import * as fieldUtils from "../../../utils/fields-utils";

export const termsContentResolver = ({
  title,
  subTitle,
  items,
  defaultContent,
}) => ({
  title: fieldUtils.resolveField(title.value, "title"),
  subTitle: fieldUtils.resolveField(subTitle.value, "subtitle"),
  items: fieldUtils.resolveField(
    items.data.map(({ custom_fields, _id }, index) => ({
      title: fieldUtils.resolveField(custom_fields.title.value, "title"),
      subTitle: fieldUtils.resolveField(
        custom_fields.subTitle.value,
        "subtitle"
      ),
      description: fieldUtils.resolveField(
        custom_fields.description.value,
        "descriptino"
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
    defaultContent.items
  ),
});
