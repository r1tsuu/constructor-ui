import defaultImage from "../../../assets/img-placeholder-height.png";
import defaultImage2 from "../../../assets/img-placeholder-mobile.png";
import { assets } from "../../../assets";
import {
  booleanArg,
  buttonArg,
  colorArg,
  sectionArgs,
  textArg,
} from "../../../utils";

export const locationArgs = sectionArgs({
  subTitle: textArg({
    typography: "h5",
    color: "accent",
    defaultValue: "зручне",
  }),
  title: textArg({
    typography: "h2",
    colo: "text-primary",
    defaultValue: "Розташування",
  }),
  buttonType: buttonArg({}),
  tab_background: colorArg({
    defaultValue: "#2D2D2D",
    name: "Колір фону табу",
  }),
  tab_activeBackground: colorArg({
    defaultValue: "#FFFFFF",
    name: "Колір фону активного табу",
  }),
  tab_textColor: colorArg({
    defaultValue: "#FCFCFC",
    name: "Колір тексту табу",
  }),
  tab_activeTextColor: colorArg({
    defaultValue: "#000000",
    name: "Колір тексту активного табу",
  }),
  buttonName: "Переглянути на карті",
  buttonLink: "https://google.com",
  firstTab_name: "Інфраструктура",
  firstTab_photoSource: assets.imgPlaceholder,
  firstTab_photoSourceMobile: assets.imgPlaceholderHeight,
  secondTab_name: "Генплан",
  secondTab_photoSource: assets.imgPlaceholder,
  secondTab_photoSourceMobile: assets.imgPlaceholderHeight,
});
