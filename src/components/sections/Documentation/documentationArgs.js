import {
  buttonArg,
  cardArg,
  radioArg,
  sectionArgs,
  textArg,
} from "../../../utils";

export const documentationArgs = sectionArgs({
  subTitle: textArg({
    color: "accent",
    typography: "h5",
  }),
  title: textArg({
    color: "text-primary",
    typography: "h2",
  }),
  gridColumns: radioArg({
    options: [2, 3, 4],
    defaultValue: 2,
  }),
  paginationButtonName: "Показати більше",
  paginationButtonType: buttonArg({}),

  card: cardArg({}),
  card_title: textArg({
    color: "text-primary",
    typography: "h4",
  }),
  card_fileSize: textArg({
    color: "text-secondary",
    typography: "p1",
  }),
});
