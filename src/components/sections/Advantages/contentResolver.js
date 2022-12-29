import { atOrFist } from "../../../utils";
import * as fieldUtils from "../../../utils/fields-utils";

export const advantagesContentResolver = ({
  subTitle,
  title,
  items,
  defaultContent,
}) => ({
  subTitle: fieldUtils.resolveField(subTitle.value, "subtitle"),
  title: fieldUtils.resolveField(title.value, "title"),
  items: items.data.map(({ custom_fields, _id }, index) => ({
    title: fieldUtils.resolveField(custom_fields.title.value, "title"),
    subTitle: fieldUtils.resolveField(custom_fields.subTitle.value, "subtitle"),
    _id,
  })),
});
