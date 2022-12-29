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
  title: resolveField(title.value, "title"),
  text: resolveField(text.value, "text"),
});
