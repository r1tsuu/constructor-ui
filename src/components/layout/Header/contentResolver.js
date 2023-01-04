import { atOrFist } from "../../../utils";
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
  menuList,
  cancelButtonName,
  cssMenu,
  cssCallback,
  menuPhoto,
  ...rest
}) => ({
  logoSource: fieldUtils.getSourceFile(logoSource.value[0], env, "path"),
  email: fieldUtils.resolveField(email.value, "testemail@gmail.com"),
  phone: fieldUtils.resolveField(phone.value, "+38012345677"),
  callbackLink: fieldUtils.resolveField(callbackLink.value, "link"),
  menu: fieldUtils.resolveField(menu.value, defaultContent.menu),
  callbackButtonName: fieldUtils.resolveField(
    callbackButtonName.value,
    "callback"
  ),
  menuList: menuList.data.map(({ custom_fields, _id }, index) => ({
    _id,
    title: fieldUtils.resolveField(custom_fields.title.value, "title"),
    link: fieldUtils.resolveField(custom_fields.link.value, ""),
  })),
  cssMenu: cssMenu.value,
  cssCallback: cssCallback.value,
  cancelButtonName: cancelButtonName.value,
  menuPhoto: fieldUtils.getSourceFile(menuPhoto.value[0], env),
  ...rest,
});
