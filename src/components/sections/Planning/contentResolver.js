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
  defaultContent,
  list,
  env,
}) => {
  return {
    subTitle: resolveField(subTitle.value, defaultContent.subTitle),
    title: resolveField(title.value, defaultContent.title),
    staticTexts: {
      goToMarket: static_goToMarket.value,
      reserve: static_reserve.value,
      interiors: static_interiors.value,
      totalArea: static_totalArea.value,
      details: static_details.value,
    },
    reserveLink: reserveLink.value,
    rooms: resolveField(
      list.data.map(({ _id, custom_fields, data_repeat_2x }, index) => {
        const at = atOrFist(defaultContent.rooms, index);
        const {
          characteristics: defaultCharacteristics,
          advantages: defaultAdvntages,
          interiors: defaultInteriors,
        } = at;

        return {
          _id,
          roomTitle: resolveField(custom_fields.roomTitle.value, at.roomTitle),
          title: resolveField(custom_fields.title.value, at.title),
          description: resolveField(
            custom_fields.description.value,
            at.description
          ),
          characteristics: [
            {
              title: resolveField(
                custom_fields.characteristic_1_title.value,
                null
              ),
              value: resolveField(
                custom_fields.characteristic_1_value.value,
                defaultCharacteristics[0].value
              ),
            },
            {
              title: resolveField(
                custom_fields.characteristic_2_title.value,
                null
              ),
              value: resolveField(
                custom_fields.characteristic_2_value.value,
                defaultCharacteristics[1].value
              ),
            },
            {
              title: resolveField(
                custom_fields.characteristic_3_title.value,
                null
              ),
              value: resolveField(
                custom_fields.characteristic_3_value.value,
                defaultCharacteristics[2].value
              ),
            },
            {
              title: resolveField(
                custom_fields.characteristic_4_title.value,
                null
              ),
              value: resolveField(
                custom_fields.characteristic_4_value.value,
                defaultCharacteristics[3].value
              ),
            },
          ].filter(({ title }) => Boolean(title)),
          advantages: [
            {
              icon: resolveField(
                getSourceFile(custom_fields.advantages_1_icon.value[0], env),
                defaultAdvntages[0].icon
              ),
              title: resolveField(custom_fields.advantages_1_title.value, null),
            },
            {
              icon: resolveField(
                getSourceFile(custom_fields.advantages_2_icon.value[0], env),
                defaultAdvntages[1].icon
              ),
              title: resolveField(custom_fields.advantages_2_title.value, null),
            },
            {
              icon: resolveField(
                getSourceFile(custom_fields.advantages_3_icon.value[0], env),
                defaultAdvntages[2].icon
              ),
              title: resolveField(custom_fields.advantages_3_title.value, null),
            },
            {
              icon: resolveField(
                getSourceFile(custom_fields.advantages_4_icon.value[0], env),
                defaultAdvntages[3].icon
              ),
              title: resolveField(custom_fields.advantages_4_title.value, null),
            },
          ].filter(({ title }) => Boolean(title)),
          plans: resolveField(
            data_repeat_2x.map(({ _id, custom_fields }, index) => {
              const atPlan = at.plans[index];
              return {
                _id,
                area: resolveField(custom_fields.area.value, atPlan.area),
                photo: resolveField(
                  getSourceFile(custom_fields.photo.value[0], env),
                  atPlan.photo
                ),
                pdf: resolveField(
                  getSourceFile(custom_fields.pdf.value[0], env),
                  null
                ),
              };
            })
          ),
          interiors: resolveField(
            custom_fields.interiors.value.map(
              (file) => ({
                photo: getSourceFile(file, env),
              }),
              defaultInteriors
            )
          ),
        };
      }),
      defaultContent.rooms
    ),
  };
};
