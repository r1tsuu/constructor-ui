import { assets } from "../../../assets";
import { atOrFist } from "../../../utils";
import { resolveField, getSourceFile } from "../../../utils/fields-utils";

export const planningContentResolver = ({
  subTitle,
  title,
  static_goToMarket,
  static_reserve,
  static_interiors,
  static_totalArea,
  static_details,
  reserveLink,
  cssModal,
  defaultContent,
  goToMarketLink,
  list,
  env,
}) => {
  return {
    cssModal: cssModal.value,
    subTitle: resolveField(subTitle.value, "subtitle"),
    title: resolveField(title.value, "title"),
    staticTexts: {
      goToMarket: static_goToMarket.value,
      reserve: static_reserve.value,
      interiors: static_interiors.value,
      totalArea: static_totalArea.value,
      details: static_details.value,
    },
    reserveLink: reserveLink.value,
    goToMarketLink: goToMarketLink.value,
    rooms: list.data.map(({ _id, custom_fields, data_repeat_x2 }, index) => {
      return {
        _id,
        roomTitle: resolveField(custom_fields.roomTitle.value, "roomtitle"),
        title: resolveField(custom_fields.title.value, "title"),
        description: resolveField(
          custom_fields.description.value,
          "description"
        ),
        characteristics: [
          {
            title: resolveField(
              custom_fields.characteristic_1_title.value,
              null
            ),
            value: resolveField(
              custom_fields.characteristic_1_value.value,
              "value"
            ),
          },
          {
            title: resolveField(
              custom_fields.characteristic_2_title.value,
              null
            ),
            value: resolveField(
              custom_fields.characteristic_2_value.value,
              "value"
            ),
          },
          {
            title: resolveField(
              custom_fields.characteristic_3_title.value,
              "value"
            ),
            value: resolveField(
              custom_fields.characteristic_3_value.value,
              "value"
            ),
          },
          {
            title: resolveField(
              custom_fields.characteristic_4_title.value,
              null
            ),
            value: resolveField(
              custom_fields.characteristic_4_value.value,
              "value"
            ),
          },
        ].filter(({ title }) => Boolean(title)),
        advantages: [
          {
            icon: resolveField(
              getSourceFile(custom_fields.advantages_1_icon.value[0], env),
              ""
            ),
            title: resolveField(custom_fields.advantages_1_title.value, null),
          },
          {
            icon: resolveField(
              getSourceFile(custom_fields.advantages_2_icon.value[0], env),
              ""
            ),
            title: resolveField(custom_fields.advantages_2_title.value, null),
          },
          {
            icon: resolveField(
              getSourceFile(custom_fields.advantages_3_icon.value[0], env),
              ""
            ),
            title: resolveField(custom_fields.advantages_3_title.value, null),
          },
          {
            icon: resolveField(
              getSourceFile(custom_fields.advantages_4_icon.value[0], env),
              ""
            ),
            title: resolveField(custom_fields.advantages_4_title.value, null),
          },
        ].filter(({ title }) => Boolean(title)),
        plans: data_repeat_x2.map(({ _id, custom_fields }, index) => {
          return {
            _id,
            area: resolveField(custom_fields.area.value, "area"),
            photo: resolveField(
              getSourceFile(custom_fields.photo.value[0], env),
              assets.imgPlaceholder
            ),
            pdf: resolveField(
              getSourceFile(custom_fields.pdf.value[0], env),
              null
            ),
          };
        }),
        interiors: custom_fields.interiors.value.map((file) => ({
          photo: getSourceFile(file, env),
        })),
      };
    }),
  };
};
