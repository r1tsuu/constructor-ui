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
  iconSource: resolveField(
    getSourceFile(iconSource.value[0], env),
    defaultContent.iconSource
  ),
  buttonName: resolveField(buttonName.value, defaultContent.buttonName),
  items: resolveField(
    items.data.map(({ custom_fields, _id }, index) => {
      const photoSource = resolveField(
        getSourceFile(custom_fields.photoSource.value[0], env),
        atOrFist(defaultContent.items, index).photoSource
      );
      return {
        title: resolveField(
          custom_fields.title.value,
          atOrFist(defaultContent.items, index).title
        ),
        description: resolveField(
          custom_fields.description.value,
          atOrFist(defaultContent.items, index).description
        ),
        buttonLink: resolveField(
          custom_fields.buttonLink.value,
          atOrFist(defaultContent.items, index).buttonLink
        ),
        photoSource,
        photoSourceMobile: resolveFieldMobile(
          getSourceFile(custom_fields.photoSourceMobile.value[0], env),
          photoSource,
          atOrFist(defaultContent.items, index).photoSourceMobile
        ),
      };
    }),
    defaultContent.items
  ),
});
