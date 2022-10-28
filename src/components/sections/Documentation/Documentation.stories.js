import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { Documentation } from "./Documentation";
import { documentationArgs } from "./documentationArgs";

export default createSection({
  name: COMPONENT_KEYS.DOCUMENTATION,
  component: Documentation,
  args: documentationArgs,
});

export const Default = (args) => <Documentation {...parseArgs(args)} />;

const _card = (
  title,
  fileSize = "1.7 мб",
  fileLink = "https://www.pdfdrive.com/download.pdf?id=10172273&h=84f0f3490acb0a861ce0cf97be914eed&u=cache&ext=pdf",
  icon
) => ({
  title,
  fileSize,
  fileLink,
  icon,
});

Default.args = {
  subTitle: "гарантія безпеки ваших інвестицій",
  title: "документація",
  items: [
    _card("Договір оренди земельної ділянки від 12.06.2020р"),
    _card("Декларація про початок будівельних робіт у жк від 20.12.2018"),
    _card("Консолідована фінансова звітність щодо МСФЗ за 2021 р."),
    _card("Проект договору часткової участі в будуванні паркомісця"),
    _card("Генаральний договір страхування"),
    _card("Договір оренди земельної ділянки від 12.06.2020р"),
  ],
};
