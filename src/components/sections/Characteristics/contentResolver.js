import { atOrFist } from "../../../utils";
import * as fieldUtils from "../../../utils/fields-utils";

export const characteristicsContentResolver = ({
  title,
  subTitle,
  items,
  defaultContent,
}) => ({
  title: fieldUtils.resolveField(title.value, "title"),
  subTitle: fieldUtils.resolveField(subTitle.value, "subtitle"),
  items: items.data.map(({ custom_fields, _id }, index) => ({
    title: fieldUtils.resolveField(custom_fields.title.value, "title"),
    subTitle: fieldUtils.resolveField(custom_fields.subTitle.value, "subtitle"),
    _id,
  })),
});
