import { assets } from "../../../assets";
import { atOrFist } from "../../../utils";
import * as fieldUtils from "../../../utils/fields-utils";

export const catalogContentResolver = ({
  title,
  list,
  env,
  buttonLink,
  static_popupBtn,
  static_linkBtn,
  cssModal,
  defaultContent,
}) => {
  return {
    staticTexts: {
      popupBtn: static_popupBtn.value,
      linkBtn: static_linkBtn.value,
    },
    cssModal: cssModal.value,
    buttonLink: buttonLink.value,
    title: fieldUtils.resolveField(title.value, "title"),
    list: list.data.map(({ custom_fields, data_repeat_x2, _id }, index) => ({
      _id,
      title: fieldUtils.resolveField(custom_fields.title.value, "title"),
      tabItems: data_repeat_x2?.map(({ custom_fields, _id }) => {
        const tabsPopup = [
          {
            title: custom_fields.tab_1_title.value,
            description: custom_fields.tab_1_description.value,
          },
          {
            title: custom_fields.tab_2_title.value,
            description: custom_fields.tab_2_description.value,
          },
          {
            title: custom_fields.tab_3_title.value,
            description: custom_fields.tab_3_description.value,
          },
          {
            title: custom_fields.tab_4_title.value,
            description: custom_fields.tab_4_description.value,
          },
        ].filter(({ title }) => Boolean(title));
        return {
          _id,
          title: fieldUtils.resolveField(custom_fields.title.value, "title"),
          description: fieldUtils.resolveField(
            custom_fields.description.value,
            "description"
          ),
          price: fieldUtils.resolveField(custom_fields.price.value, "price"),
          photos: fieldUtils.resolveField(
            custom_fields.photos.value.map((file) =>
              fieldUtils.getSourceFile(file, env)
            ),
            assets.imgSquare
          ),
          tabsPopup,
        };
      }),
    })),
  };
};
