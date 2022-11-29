import React from "react";
import { COMPONENT_KEYS } from "../../../utils/constants";
import { createSection } from "../../../utils/stories-utils";
import { parseArgs } from "../../../utils";

import { PrivacyPolicy } from "./PrivacyPolicy";
import { privacyPolicyArgs } from "./args";

export default createSection({
  name: COMPONENT_KEYS.PRIVACY_POLICY,
  component: PrivacyPolicy,
  args: privacyPolicyArgs,
});

export const Default = (args) => <PrivacyPolicy {...parseArgs(args)} />;
