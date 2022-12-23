import { resolveField } from "../../../utils/fields-utils";

export const blogSectionContentResolver = ({
  title,
  buttonName,
  defaultContent,
}) => ({
  title: resolveField(title.value, defaultContent.title),
  buttonName: resolveField(buttonName.value, defaultContent.buttonName),
});
