import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { Table } from "./Table";
import { TableArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.TABLE,
  component: Table,
  args: TableArgs,
});

export const Default = (args) => <Table {...parseArgs(args)} />;