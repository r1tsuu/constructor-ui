import { radioArg, sectionArgs, textArg } from "../../../utils";

export const advantagesArgs = sectionArgs({
  subTitle: textArg({
    color: "accent",
    typography: "h5",
  }),
  title: textArg({
    color: "text-primary",
    typography: "h2",
  }),
  gridColumns: radioArg({
    options: [3, 4],
    defaultValue: 3,
  }),

  card_title: textArg({
    color: "text-primary",
    typography: "h4",
  }),
  card_subTitle: textArg({
    color: "text-secondary",
    typography: "p1",
  }),
});
