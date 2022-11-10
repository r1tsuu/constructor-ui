import { getSourceFile, resolveField } from "../../../utils/fields-utils";

export const welcomeSliderContentResolver = ({
  items,
  itemsMobile,
  env,
  buttonName,
  defaultContent,
}) => {
  const itemsDesktop = resolveField(
    items.value.map((item) => ({
      source: getSourceFile(item, env),
      _id: item._id,
    })),
    defaultContent.items
  );

  return {
    items: itemsDesktop,
    itemsMobile: resolveField(
      itemsMobile.value.map(
        (item) => ({
          source: getSourceFile(item, env),
          _id: item._id,
        }),
        itemsDesktop
      )
    ),
    buttonName: resolveField(buttonName.value, defaultContent.buttonName),
  };
};
