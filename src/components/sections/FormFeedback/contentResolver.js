import { resolveField } from "../../../utils/fields-utils";

export const formFeedbackContentResolver = ({
  title,
  env: { SITE_URL },
  defaultContent,
}) => ({
  title: resolveField(title.value, defaultContent.title),
  SITE_URL,
});
