import { COMPONENT_KEYS } from "../../../utils/constants";
import {
  resolveField,
  getSourceFileNullable,
  getSourceFile,
} from "../../../utils/fields-utils";

const imageResolver = ({ photoSource, photoSourceMobile, env }) => {
  const source = getSourceFileNullable(photoSource.value[0], env);

  return {
    photoSource: source,
    photoSourceMobile: resolveField(
      getSourceFile(photoSourceMobile.value[0], env),
      source
    ),
  };
};

const listResolver = ({ list }) => {
  return {
    list: list.data.map(({ custom_fields: { title } }) => ({
      title: title.value,
    })),
  };
};

const sliderResolver = ({ photos, env }) => {
  return {
    photos: photos.value.map((file) => getSourceFileNullable(file, env)),
  };
};

const quoteResolver = ({ title }) => {
  return {
    title: title.value,
  };
};

const videoResolver = ({ env, src, previewPhotoSrc }) => {
  return {
    src: getSourceFileNullable(src.value[0], env),
    previewPhotoSrc: getSourceFileNullable(previewPhotoSrc.value[0], env),
  };
};

const buttonResolver = ({ buttonName, buttonLink }) => {
  return {
    buttonName: buttonName.value,
    buttonLink: buttonLink.value,
  };
};

const textResolver = ({ title }) => {
  return {
    title: title.value,
  };
};

const titleResolver = ({ title }) => {
  return {
    title: title.value,
  };
};

const componentBlockTypes = {
  [COMPONENT_KEYS.BLOG_SECTION_BUTTON]: {
    key: "button",
    contentResolver: buttonResolver,
  },
  [COMPONENT_KEYS.BLOG_SECTION_LIST]: {
    key: "list",
    contentResolver: listResolver,
  },
  [COMPONENT_KEYS.BLOG_SECTION_TEXT]: {
    key: "text",
    contentResolver: textResolver,
  },
  [COMPONENT_KEYS.BLOG_SECTION_SLIDER]: {
    key: "slider",
    contentResolver: sliderResolver,
  },
  [COMPONENT_KEYS.BLOG_SECTION_TITLE]: {
    key: "title",
    contentResolver: titleResolver,
  },
  [COMPONENT_KEYS.BLOG_SECTION_IMAGE]: {
    key: "image",
    contentResolver: imageResolver,
  },
  [COMPONENT_KEYS.BLOG_SECTION_VIDEO]: {
    key: "video",
    contentResolver: videoResolver,
  },
  [COMPONENT_KEYS.BLOG_SECTION_QUOTE]: {
    key: "quote",
    contentResolver: quoteResolver,
  },
};

export const blogPageContentResolver = ({ contentData, env, ...rest }) => {
  return {
    contentData: contentData.map(({ component, content }) => {
      const { key, contentResolver } = componentBlockTypes[component];

      return {
        blockType: key,
        ...contentResolver({
          ...content,
          env,
        }),
      };
    }),
    ...rest,
  };
};
