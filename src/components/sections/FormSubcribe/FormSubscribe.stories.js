import React from "react";

import { COMPONENT_KEYS } from "../../../utils/constants";

import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { formSubscribeArgs } from "./args";

import { FormSubscribe } from "./FormSubscribe";

export default createSection({
  args: {
    ...formSubscribeArgs,
    argTypes: {
      ...formSubscribeArgs.argTypes,
      submitted: {
        options: [false, "success", "error"],
        control: {
          type: "radio",
        },
      },
      ...(!process.env.IN_ADMIN && {
        onThankYouModalClose: {
          action: "Modal closed",
        },
        onSubmit: {
          action: "Form submitted",
        },
      }),
    },
    args: {
      submitted: false,
      ...formSubscribeArgs.args,
    },
  },
  name: COMPONENT_KEYS.FORM_SUBSCRIBE,
  component: FormSubscribe,
});

export const Default = ({ isSection, ...args }) => {
  return (
    <FormSubscribe themeThankYou={"dark"} isSection {...parseArgs(args)} />
  );
};
