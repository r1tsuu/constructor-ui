import { resolveField } from "../../../utils/fields-utils";

export const constructionProgressContentResolver = ({
  title,
  subTitle,
  buttonName,
  defaultContent,
}) => ({
  title: resolveField(title.value, defaultContent.title),
  subTitle: resolveField(subTitle.value, defaultContent.subTitle),
  buttonName: resolveField(buttonName.value, defaultContent.buttonName),
});
