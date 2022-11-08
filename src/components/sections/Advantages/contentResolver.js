import { atOrFist } from "../../../utils";
import * as fieldUtils from "../../../utils/fields-utils";

export const advantagesContentResolver = ({
  subTitle,
  title,
  items,
  defaultContent,
}) => ({
  subTitle: fieldUtils.resolveField(subTitle.value, defaultContent.subTitle),
  title: fieldUtils.resolveField(title.value, defaultContent.title),
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
      _id,
    })),
    defaultContent.items
  ),
});
