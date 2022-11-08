import { atOrFist } from "../../../utils";
import * as fieldUtils from "../../../utils/fields-utils";

export const characteristicsContentResolver = ({
  title,
  subTitle,
  items,
  defaultContent,
}) => ({
  title: fieldUtils.resolveField(title.value, defaultContent.title),
  subTitle: fieldUtils.resolveField(subTitle.value, defaultContent.subTitle),
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
    })),
    defaultContent.items
  ),
});
