import {
  arg,
  args,
  arrowArg,
  buttonArg,
  colorArg,
  hiddenArg,
  radioArg,
  textArg,
} from "../../../utils";
import { assets } from "../../../assets";

export const blogPageArgs = args({
  theme: radioArg({
    defaultValue: "dark",
    options: ["dark", "light", "custom"],
    name: "Тема сторінки",
  }),
  backgroundColor: colorArg({
    defaultValue: "background",
    name: "Фон сторінки",
  }),
  createdAt: textArg({
    defaultValue: "2022-11-22T12:48:08.935Z",
    color: "text-secondary",
    typography: "h5",
    name: "Дата створення",
  }),
  title: textArg({
    defaultValue:
      "Базові образи 2022 року всі головні тренди в новій колекції бренду Anna Mi",
    color: "text-primary",
    typography: "h3",
    name: "Заголовок сторінки",
  }),
  socialBackgroundColor: colorArg({
    defaultValue: "accent",
    name: "Кнопка social - колір фону",
  }),
  socialBackgroundColorHover: colorArg({
    defaultValue: "accent-hover",
    name: "Кнопка socail - колір фону hover",
  }),
  socialBorderColor: colorArg({
    defaultValue: "accent",
    name: "Кнопка social - колір обводки",
  }),
  socialBorderColorHover: colorArg({
    defaultValue: "accent-hover",
    name: "Кнопка social - колір обводки hover",
  }),
  socialBorderRadius: arg({
    defaultValue: "0px",
    name: "Кнопка social - радіус обводки",
  }),
  socialIconColor: colorArg({
    defaultValue: "text-primary",
    name: "Кнопка social - колір іконки",
  }),
  photoSource: hiddenArg({
    value: assets.imgPlaceholder,
  }),
  categoryLabel: hiddenArg({
    value: "Category",
  }),
  categoryColor: hiddenArg({
    value: "#CB2B83",
  }),
  categoryBackground: hiddenArg({
    value: "#291321",
  }),
  categoryBorderColor: hiddenArg({
    value: "#551C3B",
  }),
  blockText_title: textArg({
    typography: "p1",
    color: "text-secondary",
    name: "Блок Опис",
  }),
  blockTitle_title: textArg({
    typography: "h3",
    color: "text-primary",
    name: "Блок Заголовок",
  }),
  blockButton_buttonType: buttonArg({
    name: "Блок кнопка - тип кнопки",
  }),
  blockQuote_title: textArg({
    name: "Блок Цитата - Заголовок",
    typography: "h4",
    color: "text-primary",
    fontSize: "24px 24px 24px 24px",
  }),
  blockQuote_fill: colorArg({
    name: "Блок Цитата - заливка іконки",
    defaultValue: "accent",
  }),
  blockQuote_borderColor: colorArg({
    name: "Блок цитата - колір обводки",
    defaultValue: "stroke",
  }),
  blockList_title: textArg({
    typography: "p1",
    color: "text-secondary",
    name: "Блок Список - заголовок",
  }),
  blockList_iconColor: colorArg({
    defaultValue: "accent",
    name: "Блок Список - колір іконки",
  }),
  blockSlider_arrowsType: arrowArg({
    name: "Блок Слайдер - Тип Стрілок",
  }),
  blockSlider_paginationBg: colorArg({
    defaultValue: "text-secondary",
    name: "Блок Слайдер - колір пагінації",
  }),
  blockSlider_paginationActiveBg: colorArg({
    defaultValue: "text-primary",
    name: "Блок Слайдер - колір пагінації активний",
  }),
  content: hiddenArg({
    value: [
      {
        blockType: "text",
        title: `<p>Період зимових свят — це час мріяти, будувати плани та приміряти нові образи. Тому напередодні Нового року бренд Anna Mi радий презентувати свою нову колекцію, яка об'єднала в собі головні тренди прийдешнього 2022-го року. Як створити свій особливий образ і на які деталі звернути особливу увагу — читайте в нашому блозі. </p>
          `,
      },
      {
        blockType: "button",
        buttonName: "Текст кнопки",
        buttonLink: "https://google.com",
      },
      {
        blockType: "video",
        src: "https://www.youtube.com/watch?v=JouMAHQXx-g",
        previewPhotoSrc: assets.imgPlaceholder,
      },
      {
        blockType: "text",
        title: `Період зимових свят — це час мріяти, будувати плани та приміряти нові образи. Тому напередодні Нового року бренд Anna Mi радий презентувати свою нову колекцію, яка об'єднала в собі головні тренди прийдешнього 2022-го року. Як створити свій особливий образ і на які деталі звернути особливу увагу — читайте в нашому блозі.
        `,
      },
      {
        blockType: "quote",
        title: `Мода без жертв — наразі світові бренди вибирають екошкіру. Вироби зі штучної шкіри кілька сезонів залишаються трендом номер один`,
      },
      {
        blockType: "list",
        list: [
          "Patagonia: Webby Winner and Webby People’s Voice Winner in Websites and Mobile Sites: Fashion & Beauty",
          "Patagonia: Webby Winner and Webby People’s Voice Winner in Websites and Mobile Sites: Fashion & Beauty",
          "Patagonia: Webby Winner and Webby People’s Voice Winner in Websites and Mobile Sites: Fashion & Beauty",
        ],
      },
      {
        blockType: "slider",
        photos: [
          { source: assets.imgPlaceholder },
          { source: assets.imgPlaceholder },
          { source: assets.imgPlaceholder },
          { source: assets.imgPlaceholder },
        ],
      },
      {
        blockType: "title",
        title:
          "Базові образи 2022 року всі головні тренди в новій колекції бренду Anna Mi",
      },
    ],
  }),
});
