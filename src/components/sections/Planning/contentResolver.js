import { atOrFist } from "../../../utils";
import {
  resolveField,
  resolveFieldMobile,
  getSourceFile,
} from "../../../utils/fields-utils";

export const planningContentResolver = ({
  subTitle,
  title,
  static_goToMarket,
  static_reserve,
  static_interiors,
  static_totalArea,
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
      static_totalArea: static_totalArea,
    },
    list: resolveField(
      list.data.map(({ _id, custom_fields, data_repeat_2x }, index) => {
        const at = atOrFist(defaultContent.rooms, index);
        const {
          characteristics: defaultCharacteristics,
          advantages: defaultAdvntages,
          interiors: defaultInteriors,
        } = at;

        return {
          _id,
          characteristics: [
            {
              title: resolveField(
                custom_fields.characteristic_1_title.value,
                defaultCharacteristics[0].title
              ),
              value: resolveField(
                custom_fields.characteristic_1_value.value,
                defaultCharacteristics[0].value
              ),
            },
            {
              title: resolveField(
                custom_fields.characteristic_2_title.value,
                defaultCharacteristics[1].title
              ),
              value: resolveField(
                custom_fields.characteristic_2_value.value,
                defaultCharacteristics[1].value
              ),
            },
            {
              title: resolveField(
                custom_fields.characteristic_3_title.value,
                defaultCharacteristics[2].title
              ),
              value: resolveField(
                custom_fields.characteristic_3_value.value,
                defaultCharacteristics[2].value
              ),
            },
            {
              title: resolveField(
                custom_fields.characteristic_4_title.value,
                defaultCharacteristics[3].title
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
              title: resolveField(
                custom_fields.advantages_1_title.value,
                defaultAdvntages[0].title
              ),
            },
            {
              icon: resolveField(
                getSourceFile(custom_fields.advantages_2_icon.value[0], env),
                defaultAdvntages[1].icon
              ),
              title: resolveField(
                custom_fields.advantages_2_title.value,
                defaultAdvntages[1].title
              ),
            },
            {
              icon: resolveField(
                getSourceFile(custom_fields.advantages_3_icon.value[0], env),
                defaultAdvntages[2].icon
              ),
              title: resolveField(
                custom_fields.advantages_3_title.value,
                defaultAdvntages[2].title
              ),
            },
            {
              icon: resolveField(
                getSourceFile(custom_fields.advantages_4_icon.value[0], env),
                defaultAdvntages[3].icon
              ),
              title: resolveField(
                custom_fields.advantages_4_title.value,
                defaultAdvntages[3].title
              ),
            },
          ].filter(({ title }) => Boolean(title)),
          plans: resolveField(
            data_repeat_2x.map(({ _id, custom_fields }, index) => {
              const atPlan = at.plans[index];
              return {
                _id,
                title: resolveField(custom_fields.title.value, atPlan.title),
                photo: resolveField(
                  getSourceFile(custom_fields.photo.value[0], env),
                  atPlan.photo
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
      })
    ),
  };
};

const map = (arr, callback) => {
  return arr.reduce(
    (acc, current, index) => [...acc, callback(current, index, arr)],
    []
  );
};
