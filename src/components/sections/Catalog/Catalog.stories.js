import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { CatalogTranslationsContainer } from "./Catalog";
import { catalogArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.CATALOG,
  component: CatalogTranslationsContainer,
  args: catalogArgs,
});

export const Default = (args) => (
  <CatalogTranslationsContainer {...parseArgs(args)} />
);
