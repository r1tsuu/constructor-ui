import React from "react";

import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { formFeedbackModalArgs } from "./args";

import { FormFeedbackModal } from "./FormFeedback";

export default createSection({
  args: {
    ...formFeedbackModalArgs,
    argTypes: {
      submitted: {
        options: [false, "success", "error"],
        control: {
          type: "radio",
        },
      },
      ...formFeedbackModalArgs.argTypes,
    },
    args: {
      isOpen: true,
      submitted: false,
      ...formFeedbackModalArgs.args,
    },
  },
  name: COMPONENT_KEYS.FORM_MODAL,
  component: FormFeedbackModal,
});

export const Default = ({ isOpen, ...args }) => (
  <FormFeedbackModal isOpen={isOpen} {...parseArgs(args)} />
);
