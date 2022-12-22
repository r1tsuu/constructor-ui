import { resolveField } from "../../../utils/fields-utils";

export const constructionProgressContentResolver = ({
  title,
  subTitle,
  defaultContent,
}) => ({
  title: resolveField(title.value, defaultContent.title),
  subTitle: resolveField(subTitle.value, defaultContent.subTitle),
});
