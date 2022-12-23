import { assets } from "../../../assets";
import advantageDefault from "./assets/advantage.svg";
import {
  textArg,
  buttonArg,
  radioArg,
  sectionArgs,
  booleanArg,
  colorArg,
  arrowArg,
  arg,
} from "../../../utils";
import testPlan from "./assets/Group.svg";
import testPlan2 from "./assets/Group2.svg";

const rooms = [
  {
    roomTitle: "1-кімнатні",
    title: "Квартира для відпочинку",
    description:
      "Спроєктована так, щоб велика компанія збиралась разом у кухні-вітальні – простора зона вміщує усіх разом в одному місці й стає місцем теплого дружнього спілкування. ",
    characteristics: [
      {
        title: "загагльна площа, м²",
        value: "50,3 - 80,4 м²",
      },
      {
        title: "ціна, грн",
        value: "від 1,8 млн",
      },
      {
        title: "ціна, $",
        value: "від 18 272",
      },
    ],
    advantages: [
      {
        icon: advantageDefault,
        title: "С отделкой",
      },
      {
        icon: advantageDefault,
        title: "С терассой",
      },
      {
        icon: advantageDefault,
        title: "С отделкой",
      },
      {
        icon: advantageDefault,
        title: "С отделкой",
      },
    ],
    plans: [
      {
        photo: testPlan,
        area: "50,3 м²",
      },
      {
        photo: testPlan2,
        area: "60,3 м²",
      },
    ],
    interiors: [
      { photo: assets.imgPlaceholder },
      { photo: assets.imgPlaceholder },
      { photo: assets.imgPlaceholder },
      { photo: assets.imgPlaceholder },
    ],
  },
  {
    roomTitle: "2-кімнатні",
    title: "Квартира для відпочинку",
    description:
      "Спроєктована так, щоб велика компанія збиралась разом у кухні-вітальні",
    characteristics: [
      {
        title: "загагльна площа, м²",
        value: "20,3 - 80,4 м²",
      },
      {
        title: "ціна, грн",
        value: "від 1,3 млн",
      },
    ],
    advantages: [
      {
        icon: advantageDefault,
        title: "С терассой",
      },
      {
        icon: advantageDefault,
        title: "С терассой",
      },
      {
        icon: advantageDefault,
        title: "С отделкой",
      },
      {
        icon: advantageDefault,
        title: "С отделкой",
      },
    ],
    plans: [
      {
        photo: assets.imgSquare,
        area: "30,3 м²",
      },
      {
        photo: assets.imgSquare,
        area: "50,3 м²",
      },
      {
        photo: assets.imgSquare,
        area: "10,3 м²",
      },
    ],
    interiors: [
      { photo: assets.imgPlaceholder },
      { photo: assets.imgPlaceholder },
      { photo: assets.imgPlaceholder },
      { photo: assets.imgPlaceholder },
    ],
  },
  {
    roomTitle: "3-кімнатні",
    title: "Квартира для відпочинку",
    description:
      "Спроєктована так, щоб велика компанія збиралась разом у кухні-вітальні",
    characteristics: [
      {
        title: "загагльна площа, м²",
        value: "80,3 - 80,4 м²",
      },
      {
        title: "ціна, грн",
        value: "від 1,3 млн",
      },
      {
        title: "загагльна площа, м²",
        value: "80,3 - 80,4 м²",
      },
      {
        title: "загагльна площа, м²",
        value: "80,3 - 80,4 м²",
      },
    ],
    advantages: [
      {
        icon: advantageDefault,
        title: "С терассой",
      },
      {
        icon: advantageDefault,
        title: "С терассой",
      },
      {
        icon: advantageDefault,
        title: "С отделкой",
      },
      {
        icon: advantageDefault,
        title: "С отделкой",
      },
    ],
    plans: [
      {
        photo: assets.imgSquare,
        area: "30,3 м²",
        pdf: "https://www.africau.edu/images/default/sample.pdf",
      },
      {
        photo: assets.imgSquare,
        area: "50,3 м²",
      },
      {
        photo: assets.imgSquare,
        area: "10,3 м²",
      },
      {
        photo: assets.imgSquare,
        area: "30,3 м²",
      },
      {
        photo: assets.imgSquare,
        area: "20,3 м²",
      },
    ],
    interiors: [
      { photo: assets.imgPlaceholder },
      { photo: assets.imgPlaceholder },
      { photo: assets.imgPlaceholder },
      { photo: assets.imgPlaceholder },
    ],
  },
];

export const planningArgs = sectionArgs({
  rooms,
  subTitle: textArg({
    defaultValue: "продуманi",
    typography: "h5",
    color: "accent",
    name: "Підзаголовок",
  }),
  title: textArg({
    defaultValue: "планування",
    typography: "h2",
    color: "text-primary",
    name: "Заголовок",
  }),
  blockBackgroundColor: colorArg({
    defaultValue: "#334150",
    name: "Колір фону блоку кімнати",
  }),
  blockBorderRadius: arg({
    defaultValue: "10px",
    name: "Радіус обводки блоку кімнати",
  }),
  goToMarketButtonType: buttonArg({
    name: "Перейти до маркетплейсу тип кнопки",
  }),
  roomReserveButtonType: buttonArg({
    name: "Кімната забронювати тип кнопки",
  }),
  roomInteriorsButtonType: buttonArg({
    name: "Кімната інтер'єри тип кнопки",
  }),
  pdfButtonType: buttonArg({
    name: "Деталі планування тип кнопки",
  }),
  plansArrowType: arrowArg({
    name: "Планування слайдер тип стрілок",
  }),
  modalSlideArrowType: arrowArg({
    name: "Слайдер попап тип стрілок",
  }),
  roomTitle: textArg({
    typography: "h4",
    color: "text-secondary",
    name: "Кімната таб",
  }),
  roomTitleActiveColor: colorArg({
    defaultValue: "text-primary",
    name: "Кімната таб - колір active",
  }),
  roomLineActiveColor: colorArg({
    defaultValue: "#C5A57C",
    name: "Кімната таб - колір лінії active",
  }),
  roomLineColor: colorArg({
    defaultValue: "stroke",
    name: "Кімната таб - колір лінії",
  }),
  blockTitle: textArg({
    typography: "h4",
    color: "text-primary",
    name: "Блок - Заголовок",
  }),
  blockDescription: textArg({
    typography: "p1",
    color: "text-primary",
    name: "Блок - заголовок",
  }),
  blockCharacteristicTitle: textArg({
    typography: "h5",
    color: "text-primary",
    name: "Блок характеристика - назва",
  }),
  blockCharacteristicValue: textArg({
    typography: "h5",
    color: "text-primary",
    name: "Блок характеристика - значення",
  }),
  blockCharacteristicSeparatorColor: colorArg({
    defaultValue: "accent",
    name: "Блок характеристика - колір сепаратору",
  }),
  blockAdvantageTitle: textArg({
    typography: "h5",
    color: "text-primary",
    name: "Блок перевага - назва",
  }),
  blockAdvantagesBorderColor: colorArg({
    defaultValue: "stroke",
    name: "Блок переваги - колір обводки зверху знизу",
  }),
  blockPlansTotalAreaValue: textArg({
    typography: "h5",
    color: "text-primary",
    name: "Блок планування слайдер площадь значення",
  }),
  blockPlansTotalAreaTitle: textArg({
    typography: "h5",
    color: "text-primary",
    name: "Блок планування слайдер площадь назва",
  }),
  zoomButtonBorderRadius: arg({
    defaultValue: "0px",
    name: "Кнопка планування Zoom - радіус обводки",
  }),
  zoomButtonBackground: colorArg({
    defaultValue: "transparent",
    name: "Кнопка планування Zoom - колір фону",
  }),
  zoomButtonBorderColor: colorArg({
    defaultValue: "accent",
    name: "Кнопка планування Zoom - колір обводки",
  }),
  zoomButtonStroke: colorArg({
    defaultValue: "#F3F2F1",
    name: "Кнопка планування Zoom - іконка stroke",
  }),
  zoomButtonFill: colorArg({
    defaultValue: "#FCFCFC",
    name: "Кнопка планування Zoom - іконка fill",
  }),
  modalSliderArea: textArg({
    typography: "h5",
    color: "text-primary",
    name: "Слайдер попап - площадь",
  }),
  sliderProgress: textArg({
    typography: "h5",
    color: "text-primary",
    name: "Слайдери прогресс - текст",
  }),
  sliderProgressSeparatorBg: colorArg({
    defaultValue: "accent",
    name: "Слайдери прогресс - колір сепаратора",
  }),
});
