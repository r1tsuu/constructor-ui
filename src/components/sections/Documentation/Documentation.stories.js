import React from "react";
import { COMPONENT_NAMES } from "../../../utils/constants";

import {
  buttonArg,
  cardArg,
  createSection,
  parseArgs,
  radioArg,
  textArg,
} from "../../../utils/stories-utils";

import { Documentation } from "./Documentation";

const createCard = (
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

const items = [
  createCard("Договір оренди земельної ділянки від 12.06.2020р"),
  createCard("Декларація про початок будівельних робіт у жк від 20.12.2018"),
  createCard("Консолідована фінансова звітність щодо МСФЗ за 2021 р."),
  createCard("Проект договору часткової участі в будуванні паркомісця"),
  createCard("Генаральний договір страхування"),
  createCard("Договір оренди земельної ділянки від 12.06.2020р"),
];

export default createSection({
  name: COMPONENT_NAMES.SECTIONS.DEFAULT_BLOCK_DOCUMENTATION,
  component: Documentation,
  args: {
    subTitle: textArg({
      color: "accent",
      typography: "h5",
      defaultValue: "гарантія безпеки ваших інвестицій",
    }),
    title: textArg({
      color: "text-primary",
      typography: "h2",
      defaultValue: "документація",
    }),
    gridColumns: radioArg({
      options: [2, 3, 4],
      defaultValue: 2,
    }),
    paginationButtonName: "Показати більше",
    paginationButtonType: buttonArg({}),
    items,
    card: cardArg({}),
    card_title: textArg({
      color: "text-primary",
      typography: "h4",
    }),
    card_fileSize: textArg({
      color: "text-secondary",
      typography: "p1",
    }),
  },
});

export const Default = (args) => <Documentation {...parseArgs(args)} />;
