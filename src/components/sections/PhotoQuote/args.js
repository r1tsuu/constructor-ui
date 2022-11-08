import defaultImage from "../../../assets/img-placeholder-height.png";
import { booleanArg, sectionArgs, textArg } from "../../../utils";

export const photoQuoteArgs = sectionArgs({
  description: textArg({
    name: "Опис",
    color: "text-primary",
    typography: "h4",
    defaultValue:
      "Реальна можливість придбати житло за власним вибором від надійного забудовника — це ще один ступінь особистої свободи громадян",
  }),
  name: textArg({
    name: "імʼя",
    color: "accent",
    typography: "h5",
    defaultValue: "Прізвище та імʼя",
  }),
  position: textArg({
    name: "Позиція",
    color: "text-secondary",
    typography: "p1",
    defaultValue: "Посада (наприкл. Директор компанії «Посміхнись зараз» )",
  }),
  fullPhotoWidth: booleanArg({
    defaultValue: true,
    name: "Фото на всю ширину контейнеру",
  }),
  photoSource: defaultImage,
  photoSourceMobile: defaultImage,
});
