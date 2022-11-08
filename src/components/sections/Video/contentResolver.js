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
    defaultPreviewPhoto: defaultContent.previewPhotoSource,
    defaultVideoSource: defaultContent.videoSource,
    defaultVideoSourceMobile: defaultContent.videoSourceMobile,
    env,
  });

  return {
    title: resolveField(title.value, defaultContent.title),
    previewPhotoSource: preview,
    videoSource: source,
    videoSourceMobile: sourceMobile,
  };
};
