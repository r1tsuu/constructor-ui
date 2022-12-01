import {
  resolveField,
  resolveFieldMobile,
  getSourceFile,
} from "../../../utils/fields-utils";

export const privacyPolicyContentResolver = ({
  title,
  text,
  defaultContent,
}) => ({
  title: resolveField(title.value, defaultContent.title),
  text: resolveField(text.value, defaultContent.text),
});
