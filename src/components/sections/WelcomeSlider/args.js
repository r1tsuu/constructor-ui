import { assets } from "../../../assets";

import { arrowArg, buttonArg, sectionArgs } from "../../../utils";

const _item = (buttonName) => ({
  buttonName,
  buttonLink: "https://google.com",
  photoSource: assets.imgPlaceholder,
  photoSourceMobile: assets.imgPlaceholder,
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
