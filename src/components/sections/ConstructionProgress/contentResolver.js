import { resolveField } from "../../../utils/fields-utils";

export const constructionProgressContentResolver = ({
  title,
  subTitle,
  buttonName,
  defaultContent,
}) => ({
  title: resolveField(title.value, "title"),
  subTitle: resolveField(subTitle.value, "subtitle"),
  buttonName: resolveField(buttonName.value, "buttonName"),
});
