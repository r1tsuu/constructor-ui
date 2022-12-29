import { atOrFist } from "../../../utils";
import { resolveField, getSourceFile } from "../../../utils/fields-utils";

export const technologiesContentResolver = ({
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
    subTitle: resolveField(custom_fields.subTitle.value, "subtite"),
    icon: resolveField(
      getSourceFile(custom_fields.icon.value[0], env, "path"),
      ""
    ),
    _id,
  })),
});
