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
    interiors: [defaultImage, defaultImage, defaultImage, defaultImage],
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
      {
        photo: defaultImage,
        area: "30,3 м²",
      },
      {
        photo: defaultImage,
        area: "20,3 м²",
      },
    ],
    interiors: [defaultImage, defaultImage, defaultImage, defaultImage],
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
    interiors: [defaultImage, defaultImage, defaultImage, defaultImage],
  },
];

export const planningArgs = sectionArgs({
  rooms,
  subTitle: textArg({
    defaultValue: "продуманi",
    typography: "h5",
    color: "accent",
  }),
  title: textArg({
    defaultValue: "планування",
    typography: "h2",
    color: "text-primary",
  }),
  goToMarketButtonType: buttonArg({
    name: "Перейти до маркетплейсу",
  }),
  plansArrowType: arrowArg({}),
  modalSlideArrowType: arrowArg({}),
  roomTitle: textArg({
    typography: "h4",
    color: "text-primary",
    name: "Кімната таб",
  }),
  roomTitle_activeColor: colorArg({
    defaultValue: "accent",
    name: "Кімната таб - колір active",
  }),
  block_title: textArg({
    typography: "h4",
    color: "text-primary",
  }),
  block_description: textArg({
    typography: "p1",
    color: "text-secondary",
  }),
  block_characteristic_title: textArg({
    typography: "h5",
    color: "text-primary",
  }),
  block_characteristic_value: textArg({
    typography: "h3",
    color: "text-primary",
  }),
  block_advantageTitle: textArg({
    typography: "h5",
    color: "text-primary",
  }),
});
