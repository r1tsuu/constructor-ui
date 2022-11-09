import React from "react";

import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { FormFeedbackSection } from "./FormFeedback";
import { formFeedbackArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.FORM_SECTION,
  args: formFeedbackArgs,
  component: FormFeedbackSection,
});

export const Default = (args) => <FormFeedbackSection {...parseArgs(args)} />;
