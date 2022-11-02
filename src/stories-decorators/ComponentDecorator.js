import React, { useEffect, useRef } from "react";
import { useArgs } from "@storybook/client-api";
import { IS_ADMIN_PARENT } from "../utils/constants";

export const ComponentDecorator = (Story, context) => {
  const mounted = useRef(false);
  const [args] = useArgs();

  useEffect(() => {
    if (IS_ADMIN_PARENT) {
      if (mounted.current) {
        window.parent.parent.postMessage({
          payload: args,
          type: "ARGS_UPDATED",
        });
      } else mounted.current = true;
    }
  }, [args]);

  return <>{Story()}</>;
};
