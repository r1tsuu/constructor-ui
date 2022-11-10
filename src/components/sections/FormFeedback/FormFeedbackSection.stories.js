import React from "react";

import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { FormFeedbackSection } from "./FormFeedback";
import { formFeedbackSectionArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.FORM_SECTION,
  args: {
    argTypes: {
      submitted: {
        options: [false, "success", "error"],
        control: {
          type: "radio",
        },
      },
      ...formFeedbackSectionArgs.argTypes,
    },
    args: {
      submitted: false,
      ...formFeedbackSectionArgs.args,
    },
  },
  component: FormFeedbackSection,
});

export const Default = (args) => <FormFeedbackSection {...parseArgs(args)} />;
