import { arg, colorArg, sectionArgs, textArg } from "../../../utils";

export const mapSectionArgs = sectionArgs({
  swapBarBackgroundColor: colorArg({
    defaultValue: "background",
    name: "Swap bar - колір фону",
  }),
  swapBarBackgroundColorActive: colorArg({
    defaultValue: "accent",
    name: "Swap bar - колір фону active",
  }),
  swapBarBorderRadius: arg({
    defaultValue: "10px",
    name: "Swap bar - радіус обводки",
  }),
  swapBarActiveBorderRadius: arg({
    defaultValue: "7px",
    name: "Swap bar - радіус обводки ative",
  }),
  swapBarTextColor: colorArg({
    defaultValue: "text-primary",
    name: "Swap bar - колір тексту",
  }),
  swapBarTextColorActive: colorArg({
    defaultValue: "text-primary",
    name: "Swap bar - колір тексту active",
  }),

  mapCategoriesBackground: colorArg({
    defaultValue: "#2D2D2D",
    name: "Карта категорії фон",
  }),
  mapCategoriesBorder: colorArg({
    defaultValue: "stroke",
    name: "Картка категорії обводка",
  }),
  categoryText: textArg({
    typography: "p1",
    color: "text-primary",
    name: "категорія текст",
  }),
  toolTipBackground: colorArg({
    defaultValue: "accent",
    name: "Локація тултіп фон",
  }),
  toolTipTitle: textArg({
    color: "text-primary",
    typography: "p1",
    name: "Локація тултіп назва",
  }),
  toolTipRouteColor: colorArg({
    defaultValue: "text-primary",
    name: "Локація тултіп прокласти маршрут колір",
  }),
  buttonRouteBg: colorArg({
    defaultValue: "accent",
    name: "Кнопка прокласти маршрут фон",
  }),
  buttonRouteBorderRadius: arg({
    defaultValue: "10px",
    name: "Кнопка прокласти маршрут радіус обводки",
  }),
  buttonRouteText: colorArg({
    defaultValue: "text-primary",
    name: "Кнопка прокласти маршрут текст",
  }),
  buttonRouteBorderColor: colorArg({
    defaultValue: "accent",
    name: "Кнопка прокласту маршрут обводка колір",
  }),
  buttonCategoriesBg: colorArg({
    defaultValue: "#343434",
    name: "Кнопка умовні позначення фон",
  }),
  buttonCategoriesText: colorArg({
    defaultValue: "text-primary",
    name: "Кнопка умовні позначення текст",
  }),
  buttonCategoriesBorderRadius: arg({
    defaultValue: "10px",
    name: "Кнопка умовні позначення радіус обводки",
  }),
  buttonCategoriesBorderColor: colorArg({
    defaultValue: "Кнопка умовні позначення обводка колір",
  }),
});
