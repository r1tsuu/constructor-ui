import React, { useEffect, useRef, useState } from "react";
import { useArgs } from "@storybook/client-api";
import { IS_ADMIN_PARENT } from "../utils/constants";

export const ComponentDecorator = (Story, context) => {
  const mounted = useRef(false);
  const listener = useRef(null);
  const [args, updateArgs] = useArgs();
  const [isReady, setReady] = useState(!IS_ADMIN_PARENT);

  useEffect(() => {
    if (IS_ADMIN_PARENT) {
      listener.current = window.parent.addEventListener(
        "message",
        ({ data }) => {
          if (data?.type === "INIT_ARGS") {
            updateArgs(data.payload);
            setReady(true);
          }
        }
      );
    }

    return () => window.parent.removeEventListener("message", listener.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return isReady ? Story() : "Loading...";
};
