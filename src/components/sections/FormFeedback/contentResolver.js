import { resolveField } from "../../../utils/fields-utils";

export const formFeedbackContentResolver = ({ title, defaultContent }) => ({
  title: resolveField(title.value, defaultContent.title),
});
