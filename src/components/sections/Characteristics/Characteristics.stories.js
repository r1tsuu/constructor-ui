import React from "react";
import { parseArgs } from "../../../utils";
import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";

import { Characteristics } from "./Characteristics";
import { characteristicsArgs } from "./characteristicsArgs";

export default createSection({
  name: COMPONENT_KEYS.CHARACTERISTICS,
  component: Characteristics,
  args: characteristicsArgs,
});

export const Default = (args) => <Characteristics {...parseArgs(args)} />;

const _item = (title, subTitle) => ({
  title,
  subTitle,
});

Default.args = {
  subTitle: "переваги комплексу",
  title: "про нас в цифрах",
  items: [
    _item("208", "комфортних квартир"),
    _item("50", "апартаментів з патіо"),
    _item("104", "автомобільних паркомісць"),
    _item("3", "дитячих майданчика"),
    _item("18", "мото паркомісць"),
    _item("5", "житлових секцій"),
    _item("2,4", "гектара території"),
    _item("7", "будівель різної висоти"),
  ],
};
