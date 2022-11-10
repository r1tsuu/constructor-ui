import defaultPhoto from "../../../assets/img-placeholder.png";
import { arrowArg, radioArg, sectionArgs, textArg } from "../../../utils";

const _item = (title, description) => ({
  title,
  description,
  photoSource: defaultPhoto,
  photoSourceMobile: defaultPhoto,
});

export const advantagesSliderArgs = sectionArgs({
  subTitle: textArg({
    defaultValue: "все важливе - поряд",
    typography: "h5",
    color: "accent",
    name: "Підзаголовок",
  }),
  title: textArg({
    defaultValue: "переваги",
    typography: "h2",
    color: "text-primary",
    name: "Заголовок",
  }),
  arrowType: arrowArg({}),
  card_title: textArg({
    typography: "h3",
    color: "text-primary",
    name: "Картка - Заголовок",
  }),
  card_description: textArg({
    typography: "p1",
    color: "text-secondary",
    name: "Картка - Опис",
  }),
  items: [
    _item(
      "Власний підземний паркінг",
      "Станція підзарядки електромобілів та ліфт до усіх поверхів клубного будинку. Максимум приватності для створення свого ідеального простору з цілодобовою охороною."
    ),
    _item(
      "Ландшафтний парк",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin odio nisi, iaculis et vulputate sit amet, aliquam et erat. Pellentesque quis risus eget urna euismod sagittis vitae eu massa. Aenean."
    ),
    _item(
      "Lorem ipsum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed tempor mi, eu aliquam ex. In sodales orci ac lacus suscipit, vel pretium lorem tempor"
    ),
    _item("Lorem sit amet"),
  ],
});
