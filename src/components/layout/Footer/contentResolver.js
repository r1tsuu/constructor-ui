import { atOrFist } from "../../../utils";
import * as fieldUtils from "../../../utils/fields-utils";

export const footerContentResolver = ({
  socials,
  firstText,
  secondText,
  thirdText,
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
    socials.map(({ icon, link }, index) => ({
      icon: fieldUtils.resolveField(
        fieldUtils.getSourceFile(icon[0].value, env),
        atOrFist(defaultContent, index).icon
      ),
      link: fieldUtils.resolveField(
        link.value,
        atOrFist(defaultContent, index).link
      ),
    })),
    defaultContent.socials
  ),
  firstText: fieldUtils.resolveField(firstText.value, defaultContent.firstText),
  secondText: fieldUtils.resolveField(
    secondText.value,
    defaultContent.secondText
  ),
  thirdText: fieldUtils.resolveField(thirdText.value, defaultContent.thirdText),
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
