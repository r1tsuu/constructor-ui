import { cardArg, radioArg, sectionArgs, textArg } from "../../../utils";

export const characteristicsArgs = sectionArgs({
  subTitle: textArg({
    typography: "h5",
    color: "accent",
  }),
  title: textArg({
    typography: "h2",
    color: "text-primary",
  }),
  gridColumns: radioArg({
    options: [3, 4],
    defaultValue: 4,
  }),
  card: cardArg({}),
  card_title: textArg({
    typography: "h2",
    color: "text-primary",
  }),
  card_subTitle: textArg({
    typography: "p1",
    color: "text-secondary",
  }),
});
