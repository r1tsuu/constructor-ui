import { atOrFist } from "../../../utils";
import { resolveField, getSourceFile } from "../../../utils/fields-utils";

export const technologiesContentResolver = ({
  title,
  subTitle,
  items,
  defaultContent,
  env,
}) => ({
  title: resolveField(title.value, defaultContent.title),
  subTitle: resolveField(subTitle.value, defaultContent.subTitle),
  items: resolveField(
    items.data.map(({ custom_fields, _id }, index) => ({
      title: resolveField(
        custom_fields.title.value,
        atOrFist(defaultContent.items, index).title
      ),
      subTitle: resolveField(
        custom_fields.subTitle.value,
        atOrFist(defaultContent.items, index).subTitle
      ),
      icon: resolveField(
        getSourceFile(custom_fields.icon.value[0], env, "path"),
        atOrFist(defaultContent.items, index).icon
      ),
      _id,
    })),
    defaultContent.items
  ),
});
