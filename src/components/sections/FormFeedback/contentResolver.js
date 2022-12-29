import { resolveField } from "../../../utils/fields-utils";

export const formFeedbackContentResolver = ({
  title,
  _errorMessage,
  _successMessage,
  defaultContent,
}) => ({
  title: resolveField(title.value, "title"),
  errorMessage: resolveField(_errorMessage.value, "Error"),
  successMessage: resolveField(_successMessage.value, "Success"),
});
