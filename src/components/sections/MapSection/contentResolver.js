import { getSourceFile } from "../../../utils/fields-utils";

export const mapSectionContentResolver = ({
  photoSource,
  tabFirstLabel,
  tabSecondLabel,
  mainLocationIcon,
  mainLocation,
  mainCategoryIcon,
  mainLocationTitle,
  mainCategoryTitle,
  routeLabel,
  categoriesButtonLabel,
  list,
  env,
}) => {
  return {
    photo: getSourceFile(photoSource.value[0], env),
    tabFirstLabel: tabFirstLabel.value,
    tabSecondLabel: tabSecondLabel.value,
    mainLocationIcon: getSourceFile(mainLocationIcon.value[0], env),
    mainCategoryIcon: getSourceFile(mainCategoryIcon.value[0], env),
    mainLocationTitle: mainLocationTitle.value,
    mainCategoryTitle: mainCategoryTitle.value,
    routeLabel: routeLabel.value,
    categoriesButtonLabel: categoriesButtonLabel.value,
    mainPlaceID: mainLocation.value.placeID,
    mainLocation: mainLocation.value.data?.geometry.location,
    list: list.data.map(
      ({ custom_fields: { title, icon, iconMap }, data_repeat_x2 }) => ({
        title: title.value,
        icon: getSourceFile(icon.value[0], env),
        list: data_repeat_x2.map(({ custom_fields: { location, title } }) => ({
          icon: getSourceFile(iconMap.value[0], env),
          title: title.value,
          placeID: location.value.placeID,
          location: location.value.data?.geometry.location,
        })),
      })
    ),
  };
};
