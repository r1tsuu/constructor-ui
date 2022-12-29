import { atOrFist } from "../../../utils";
import * as fieldUtils from "../../../utils/fields-utils";

export const footerContentResolver = ({
  socials,
  firstText_title,
  firstText_description,
  secondText_title,
  secondText_description,
  thirdText_title,
  thirdText_description,
  downTextFirst,
  downTextSecond,
  downTextThird,
  handcraftedText,
  scrollUpText,
  socialsTitle,
  buttonName,
  buttonLink,
  subscribeTitle,
  env,
  _errorMessage,
  _successMessage,
  defaultContent,
}) => ({
  errorMessage: fieldUtils.resolveField(_errorMessage.value, "error"),
  successMessage: fieldUtils.resolveField(_successMessage.value, "success"),
  socials: socials.data.map(({ custom_fields, _id }, index) => ({
    _id,
    icon: fieldUtils.resolveField(
      fieldUtils.getSourceFile(custom_fields.icon.value[0], env),
      ""
    ),
    link: fieldUtils.resolveField(custom_fields.link.value, ""),
  })),

  firstText: {
    title: fieldUtils.resolveField(firstText_title.value, "title"),
    description: fieldUtils.resolveField(
      firstText_description.value,
      "descriptino"
    ),
  },
  secondText: {
    title: fieldUtils.resolveField(secondText_title.value, "secondtext"),
    description: fieldUtils.resolveField(
      secondText_description.value,
      "secondtextdescr"
    ),
  },
  thirdText: {
    title: fieldUtils.resolveField(thirdText_title.value, "thirdtitle"),
    description: fieldUtils.resolveField(
      thirdText_description.value,
      "thirddescr"
    ),
  },
  downTextFirst: fieldUtils.resolveField(downTextFirst.value, "downtextfirts"),
  downTextSecond: fieldUtils.resolveField(downTextSecond.value, "downtexescn"),
  downTextThird: fieldUtils.resolveField(downTextThird.value, "downtextthird"),
  handcraftedText: fieldUtils.resolveField(
    handcraftedText.value,
    "handcrafted"
  ),
  scrollUpText: fieldUtils.resolveField(scrollUpText.value, "scrollup"),
  socialsTitle: fieldUtils.resolveField(socialsTitle.value, "socialstitle"),
  buttonName: fieldUtils.resolveField(buttonName.value, "button"),
  buttonLink: fieldUtils.resolveField(buttonLink.value, ""),
  subscribe: {
    title: fieldUtils.resolveField(subscribeTitle.value, "subrscribe"),
  },
});
