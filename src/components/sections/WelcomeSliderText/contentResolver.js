import {
  getSourceFile,
  resolveField,
  resolveFieldMobile,
} from "../../../utils/fields-utils";
import { atOrFist } from "../../../utils";

export const welcomeSliderTextContentResolver = ({
  buttonName,
  items,
  defaultContent,
  iconSource,
  env,
}) => ({
  iconSource: resolveField(getSourceFile(iconSource.value[0], env), ""),
  buttonName: resolveField(buttonName.value, defaultContent.buttonName),
  items: items.data.map(({ custom_fields, _id }, index) => {
    const photoSource = resolveField(
      getSourceFile(custom_fields.photoSource.value[0], env),
      "_"
    );
    return {
      title: resolveField(custom_fields.title.value, "title"),
      description: resolveField(custom_fields.description.value, "descriptio"),
      buttonLink: resolveField(custom_fields.buttonLink.value, "link"),
      photoSource,
      photoSourceMobile: resolveFieldMobile(
        getSourceFile(custom_fields.photoSourceMobile.value[0], env),
        photoSource,
        "mobile"
      ),
    };
  }),
});
