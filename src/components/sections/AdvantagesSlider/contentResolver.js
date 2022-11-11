import { atOrFist } from "../../../utils";
import {
  getSourceFile,
  resolveField,
  resolveFieldMobile,
} from "../../../utils/fields-utils";

export const advantagesSliderContentResolver = ({
  items,
  title,
  subTitle,
  env,
  defaultContent,
}) => {
  return {
    title: resolveField(title.value, defaultContent.title),
    subTitle: resolveField(subTitle.value, defaultContent.subTitle),
    items: resolveField(
      items.data.map(({ custom_fields, _id }, index) => {
        const photoSource = getSourceFile(
          custom_fields.photoSource.value[0],
          env
        );
        return {
          photoSource: resolveField(
            photoSource,
            atOrFist(defaultContent.items, index).photoSource
          ),
          photoSourceMobile: resolveFieldMobile(
            getSourceFile(custom_fields.photoSource.value[0], env),
            photoSource,
            atOrFist(defaultContent.items, index).photoSourceMobile
          ),
          title: resolveField(
            custom_fields.title.value,
            atOrFist(defaultContent.items, index).title
          ),
          description: resolveField(
            custom_fields.description.value,
            atOrFist(defaultContent.items, index).description
          ),
          _id,
        };
      }),
      defaultContent.items
    ),
  };
};
