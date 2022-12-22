import { resolveField } from "../../../utils/fields-utils";

export const constructionProgressContentResolver = ({
  title,
  defaultContent,
}) => ({
  title: resolveField(title.value, defaultContent.title),
});
