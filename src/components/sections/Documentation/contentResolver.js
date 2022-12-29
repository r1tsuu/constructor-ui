import { atOrFist, getBytes } from "../../../utils";
import { resolveField, getSourceFile } from "../../../utils/fields-utils";

export const documentationContentResolver = ({
  title,
  subTitle,
  items,
  defaultContent,
  env,
}) => ({
  title: resolveField(title.value, "title"),
  subTitle: resolveField(subTitle.value, "subtitle"),
  items: items.data.map(({ custom_fields, _id }, index) => ({
    title: resolveField(custom_fields.title.value, "title"),
    icon: resolveField(
      getSourceFile(custom_fields.icon.value[0], env, "path"),
      ""
    ),
    fileLink: resolveField(
      getSourceFile(custom_fields.file.value[0], env, "path"),
      ""
    ),
    fileSize: resolveField(
      custom_fields.file.value.length
        ? getBytes(custom_fields.file.value[0].size)
        : undefined,
      "10mb"
    ),
    _id,
  })),
});
