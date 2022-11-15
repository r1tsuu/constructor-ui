import defaultImage from "../../../assets/img-placeholder.png";
import defaultImageMobile from "../../../assets/img-placeholder-mobile.png";
import advantageDefault from "./assets/advantage.svg";
import {
  textArg,
  buttonArg,
  radioArg,
  sectionArgs,
  booleanArg,
  colorArg,
  arrowArg,
} from "../../../utils";

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
        photo: defaultImage,
        area: "50,3 м²",
      },
      {
        photo: defaultImage,
        area: "60,3 м²",
      },
      {
        photo: defaultImage,
        area: "70,3 м²",
      },
      {
        photo: defaultImage,
        area: "90,3 м²",
      },
      {
        photo: defaultImage,
        area: "120,3 м²",
      },
    ],
    interiors: [
      { photo: defaultImage },
      { photo: defaultImage },
      { photo: defaultImage },
      { photo: defaultImage },
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
        photo: defaultImage,
        area: "30,3 м²",
      },
      {
        photo: defaultImage,
        area: "50,3 м²",
      },
      {
        photo: defaultImage,
        area: "10,3 м²",
      },
    ],
    interiors: [
      { photo: defaultImage },
      { photo: defaultImage },
      { photo: defaultImage },
      { photo: defaultImage },
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
        photo: defaultImage,
        area: "30,3 м²",
      },
      {
        photo: defaultImage,
        area: "50,3 м²",
      },
      {
        photo: defaultImage,
        area: "10,3 м²",
      },
      {
        photo: defaultImage,
        area: "30,3 м²",
      },
      {
        photo: defaultImage,
        area: "20,3 м²",
      },
    ],
    interiors: [
      { photo: defaultImage },
      { photo: defaultImage },
      { photo: defaultImage },
      { photo: defaultImage },
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
  goToMarketButtonType: buttonArg({
    name: "Перейти до маркетплейсу тип кнопки",
  }),
  roomReserveButtonType: buttonArg({
    name: "Кімната забронювати тип кнопки",
  }),
  roomInteriorsButtonType: buttonArg({
    name: "Кімната інтер'єри тип кнопки",
  }),
  plansArrowType: arrowArg({
    name: "Планування слайдер тип стрілок",
  }),
  modalSlideArrowType: arrowArg({
    name: "Слайдер попап тип стрілок",
  }),
  roomTitle: textArg({
    typography: "h4",
    color: "text-primary",
    name: "Кімната таб",
  }),
  roomTitleActiveColor: colorArg({
    defaultValue: "accent",
    name: "Кімната таб - колір active",
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
