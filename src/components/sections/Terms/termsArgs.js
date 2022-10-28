import {
  sectionArgs,
  textArg,
  arrowArg,
  buttonArg,
  cardArg,
} from "../../../utils";

export const termsArgs = sectionArgs({
  subTitle: textArg({
    defaultValue: "КУПУВАТИ -ВИГІДНО",
    typography: "h5",
    color: "accent",
  }),
  title: textArg({
    defaultValue: "УМОВИ ПРИДБАННЯ",
    typography: "h2",
    color: "text-primary",
  }),
  arrowType: arrowArg({}),
  buttonType: buttonArg({}),

  card: cardArg({}),
  card_title: textArg({
    typography: "h2",
    color: "text-primary",
  }),
  card_subTitle: textArg({
    typography: "h5",
    color: "accent",
  }),
  card_description: textArg({
    typography: "p1",
    color: "text-secondary",
  }),
  card_advantage: textArg({
    typography: "h5",
    color: "text-primary",
  }),
});
