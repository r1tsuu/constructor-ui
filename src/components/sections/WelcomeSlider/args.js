import defaultImage from "../../../assets/img-placeholder.png";
import defaultImageMobile from "../../../assets/img-placeholder-mobile.png";

import { arrowArg, buttonArg, sectionArgs } from "../../../utils";

export const welcomeSliderArgs = sectionArgs({
  buttonType: buttonArg({}),
  arrowType: arrowArg({}),
  items: Array(6).fill({
    source: defaultImage,
  }),
  itemsMobile: Array(6).fill({
    source: defaultImageMobile,
  }),
  buttonName: "Текст кнопки",
});
