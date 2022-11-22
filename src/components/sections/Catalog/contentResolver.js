import { atOrFist } from "../../../utils";
import * as fieldUtils from "../../../utils/fields-utils";

export const catalogContentResolver = ({
  title,
  list,
  env,
  static_popupBtn,
  static_linkBtn,
  static_description,
  defaultContent,
}) => {
  return {
    staticTexts: {
      popupBtn: static_popupBtn.value,
      linkBtn: static_linkBtn.value,
      description: static_description.value,
    },
    title: fieldUtils.resolveField(title.value, defaultContent.title),
    list: fieldUtils.resolveField(
      list.data.map(({ custom_fields, data_repeat_x2, _id }, index) => ({
        _id,
        title: fieldUtils.resolveField(
          custom_fields.title.value,
          atOrFist(defaultContent.list, index).title
        ),
        tabItems: fieldUtils.resolveField(
          data_repeat_x2.map(({ custom_fields, _id }) => {
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
              title: fieldUtils.resolveField(
                custom_fields.title.value,
                defaultContent[0].tabItems[0].title
              ),
              description: fieldUtils.resolveField(
                custom_fields.description.value,
                defaultContent[0].tabItems[0].description
              ),
              price: fieldUtils.resolveField(
                custom_fields.price.value,
                defaultContent[0].tabItems[0].price
              ),
              photos: fieldUtils.resolveField(
                custom_fields.photos.value.map((file) =>
                  fieldUtils.getSourceFile(file, env)
                ),
                defaultContent[0].tabItems[0].photos
              ),
              tabsPopup: fieldUtils.resolveField(
                tabsPopup,
                defaultContent[0].tabItems[0].tabsPopup
              ),
            };
          }),
          atOrFist(defaultContent.list, index).tabItems
        ),
      })),
      defaultContent.list
    ),
  };
};
