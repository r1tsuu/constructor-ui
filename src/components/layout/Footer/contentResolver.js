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
  defaultContent,
}) => ({
  socials: fieldUtils.resolveField(
    socials.map(({ custom_fields, _id }, index) => ({
      _id,
      icon: fieldUtils.resolveField(
        fieldUtils.getSourceFile(custom_fields.icon[0].value, env),
        atOrFist(defaultContent, index).icon
      ),
      link: fieldUtils.resolveField(
        custom_fields.link.value,
        atOrFist(defaultContent, index).link
      ),
    })),
    defaultContent.socials
  ),
  firstText: {
    title: fieldUtils.resolveField(
      firstText_title.value,
      defaultContent.firstText.title
    ),
    description: fieldUtils.resolveField(
      firstText_description.value,
      defaultContent.firstText.description
    ),
  },
  secondText: {
    title: fieldUtils.resolveField(
      secondText_title.value,
      defaultContent.secondText.title
    ),
    description: fieldUtils.resolveField(
      secondText_description.value,
      defaultContent.secondText.description
    ),
  },
  thirdText: {
    title: fieldUtils.resolveField(
      thirdText_title.value,
      defaultContent.thirdText.title
    ),
    description: fieldUtils.resolveField(
      thirdText_description.value,
      defaultContent.thirdText.description
    ),
  },
  downTextFirst: fieldUtils.resolveField(
    downTextFirst.value,
    defaultContent.downTextFirst
  ),
  downTextSecond: fieldUtils.resolveField(
    downTextSecond.value,
    defaultContent.downTextSecond
  ),
  downTextThird: fieldUtils.resolveField(
    downTextThird.value,
    defaultContent.downTextThird
  ),
  handcraftedText: fieldUtils.resolveField(
    handcraftedText.value,
    defaultContent.handcraftedText
  ),
  scrollUpText: fieldUtils.resolveField(
    scrollUpText.value,
    defaultContent.scrollUpText
  ),
  socialsTitle: fieldUtils.resolveField(
    socialsTitle.value,
    defaultContent.socialsTitle
  ),
  buttonName: fieldUtils.resolveField(
    buttonName.value,
    defaultContent.buttonName
  ),
  buttonLink: fieldUtils.resolveField(
    buttonLink.value,
    defaultContent.buttonLink
  ),
  subscribeTitle: fieldUtils.resolveField(
    subscribeTitle.value,
    defaultContent.subscribeTitle
  ),
});
