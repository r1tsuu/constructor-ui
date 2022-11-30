import { assets } from "../../../assets";

import { sectionArgs, textArg } from "../../../utils";

export const videoArgs = sectionArgs({
  title: textArg({
    color: "text-primary",
    typography: "h2",
    defaultValue: "назва відео",
  }),
  videoSource: "https://www.youtube.com/watch?v=JouMAHQXx-g",
  videoSourceMobile: "https://www.youtube.com/watch?v=YcltiaoEp_Q",
  previewPhotoSource: assets.imgPlaceholder,
});
