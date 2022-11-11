import { resolveField } from "../../../utils/fields-utils";

export const formSubscribeContentResolver = ({ title, defaultContent }) => ({
  title: resolveField(title.value, defaultContent.title),
});
