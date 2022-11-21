import * as fieldUtils from "../../../utils/fields-utils";

export const headerContentResolver = ({
  logoSource,
  email,
  phone,
  callbackLink,
  menu,
  callbackButtonName,
  defaultContent,
  env,
  ...rest
}) => ({
  logoSource: fieldUtils.resolveField(
    fieldUtils.getSourceFile(logoSource.value[0], env),
    logoSource
  ),
  email: fieldUtils.resolveField(email.value, defaultContent.email),
  phone: fieldUtils.resolveField(phone.value, defaultContent.phone),
  callbackLink: fieldUtils.resolveField(
    callbackLink.value,
    defaultContent.callbackLink
  ),
  menu: fieldUtils.resolveField(menu.value, defaultContent.menu),
  callbackButtonName: fieldUtils.resolveField(
    callbackButtonName.value,
    defaultContent.callbackButtonName
  ),
  ...rest,
});
