import { resolveField, resolveVideoSource } from "../../../utils/fields-utils";

export const videoContentResolver = ({
  title,
  videoSource,
  videoSourceMobile,
  videoFile,
  videoFileMobile,
  previewPhotoSource,
  env,
  defaultContent,
}) => {
  const { preview, source, sourceMobile } = resolveVideoSource({
    videoFile,
    videoFileMobile,
    videoSource,
    videoSourceMobile,
    previewPhoto: previewPhotoSource,
    defaultPreviewPhoto: "",
    defaultVideoSource: "",
    defaultVideoSourceMobile: "",
    env,
  });

  return {
    title: resolveField(title.value, "title"),
    previewPhotoSource: preview,
    videoSource: source,
    videoSourceMobile: sourceMobile,
  };
};
