import {
  booleanArg,
  buttonArg,
  colorArg,
  sectionArgs,
  textArg,
} from "../../../utils";

export const privacyPolicyArgs = sectionArgs({
  title: textArg({
    color: "text-primary",
    typography: "h2",
    defaultValue: `<p style="text-align: center;">Згода на обробку персональних даних </p>`,
  }),
  text: textArg({
    color: "text-secondary",
    typography: "p1",
    defaultValue:
      "1. Відповідно до Закону України «Про захист персональних даних» я як суб’єкт персональних даних даю Міністерству цифрової трансформації України як володільцю персональних даних свою добровільну, інформовану та однозначну згоду на: ",
  }),
});
