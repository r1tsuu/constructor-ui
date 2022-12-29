import React from "react";
import photo from "./genplan.png";
import { MapSection } from "./MapSection";

import mainLocationIcon from "./map_estate.png";
import { mapSectionArgs } from "./args";
import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";
import iconCategory from "./icon_category.svg";
import iconLocation from "./icon_location.svg";
const list = [
  {
    title: "Ресторани та кафе",
    icon: iconCategory,
    list: [
      {
        location: {
          lat: 50.39,
          lng: 30.5415705,
        },
        title: "м.Київ, вул. Берковецька, 6",
        // address: "вулиця Хрещатик, 21, Київ, Украина, 02000",
        placeID: "ChIJU7Z-MdzP1EARJXTYTF2YhCQ",
        icon: iconLocation,
      },
    ],
  },
];

export default createSection({
  name: COMPONENT_KEYS.MAP_SECTION,
  component: MapSection,
  args: mapSectionArgs,
});

export const Default = (args) => (
  <MapSection
    mainLocationIcon={mainLocationIcon}
    photo={photo}
    mainPlaceID={"ChIJU7Z-MdzP1EARJXTYTF2YhCQ"}
    mainLocationTitle={"м. Київ, вул. Берк"}
    mainCategoryTitle={"ЖК Twaz Da"}
    mainLocation={{
      lat: 50.4,
      lng: 30.5415705,
    }}
    mainCategoryIcon={iconCategory}
    list={list}
    tabFirstLabel="Генплан"
    tabSecondLabel="Карта"
    routeLabel="Прокласти маршрут"
    categoriesButtonLabel="Умовні позначення"
    {...parseArgs(args)}
  />
);
