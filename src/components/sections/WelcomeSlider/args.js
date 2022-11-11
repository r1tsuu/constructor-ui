import defaultImage from "../../../assets/img-placeholder.png";
import defaultImageMobile from "../../../assets/img-placeholder-mobile.png";

import { arrowArg, buttonArg, sectionArgs } from "../../../utils";

const _item = (buttonName) => ({
  buttonName,
  buttonLink: "https://google.com",
  photoSource: defaultImage,
  photoSourceMobile: defaultImage,
});

export const welcomeSliderArgs = sectionArgs({
  buttonType: buttonArg({}),
  arrowType: arrowArg({}),
  items: [
    _item("Текст кнопки 1"),
    _item("Текст кнопки 2"),
    _item("Текст кнопки 4"),
    _item("Текст кнопки 5"),
    _item("Текст кнопки 6"),
  ],
  buttonName: "Текст кнопки",
});
