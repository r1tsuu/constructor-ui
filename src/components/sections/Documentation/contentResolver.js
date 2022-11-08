import { atOrFist, getBytes } from "../../../utils";
import { resolveField, getSourceFile } from "../../../utils/fields-utils";

export const documentationContentResolver = ({
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
      icon: resolveField(
        getSourceFile(custom_fields.icon.value[0], env),
        atOrFist(defaultContent.items, index).icon
      ),
      fileLink: resolveField(
        getSourceFile(custom_fields.file.value[0], env, "path"),
        atOrFist(defaultContent.items, index).fileLink
      ),
      fileSize: resolveField(
        custom_fields.file.value.length
          ? getBytes(custom_fields.file.value[0].size)
          : undefined,
        atOrFist(defaultContent.items, index).fileSize
      ),
      _id,
    })),
    defaultContent.items
  ),
});
