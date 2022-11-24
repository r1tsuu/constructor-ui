export const getSingleFileSourceWithType = (singleFileWithType, SITE_URL) => {
  return `${SITE_URL}${singleFileWithType.replace("./", "/")}`;
};

export const getSingleFileSource = ({
  singleFile,
  SITE_URL,
  type = "compression",
}) => {
  return getSingleFileSourceWithType(singleFile.path, SITE_URL);
};

export const getSourceFile = (file, env, type = "compression") => {
  if (!file) return "_";
  if (!file[type]) return "_";
  return `${env.SITE_URL}${file.path.replace("./", "/")}`;
};

/** @param {{type: "compression" | "preview" | "path" | undefined, field: object, isArray: boolean | undefined, env: {SITE_URL: string}}} */

export const resolveField = (value, defaultValue) => {
  if (typeof value === "undefined") return defaultValue;
  if (Array.isArray(value)) return value.length ? value : defaultValue;
  return value === "_" ? defaultValue : value;
};

export const resolveFieldMobile = (value, valueDesktop, defaulValue) => {
  return resolveField(value, resolveField(valueDesktop, defaulValue));
};

export const resolveVideoSource = ({
  videoSource,
  videoSourceMobile,
  videoFile,
  videoFileMobile,
  defaultVideoSource,
  defaultVideoSourceMobile,
  previewPhoto,
  defaultPreviewPhoto,
  env,
}) => {
  const result = {
    source: "",
    sourceMobile: "",
    preview: "",
  };

  if (videoFile.value.length) {
    result.source = getSourceFile(videoFile.value[0], env, "path");
  } else if (videoSource.value !== "_" && videoSource.value) {
    result.source = videoSource.value;
  } else {
    result.source = defaultVideoSource;
  }

  if (videoFileMobile.value.length) {
    result.sourceMobile = getSourceFile(videoFileMobile.value[0], env, "path");
  } else if (videoSourceMobile.value !== "_" && videoSourceMobile.value) {
    result.sourceMobile = videoSourceMobile.value;
  } else if (result.source === defaultVideoSource) {
    result.sourceMobile = defaultVideoSourceMobile;
  } else {
    result.sourceMobile = result.source;
  }

  if (previewPhoto.value.length) {
    result.preview = getSourceFile(previewPhoto.value[0], env);
  } else {
    result.preview =
      result.source === defaultVideoSource ? defaultPreviewPhoto : null;
  }
  console.log(result);
  return result;
};
