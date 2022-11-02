import React, { useEffect, useRef } from "react";
import { useArgs } from "@storybook/client-api";
import { IS_ADMIN_PARENT } from "../utils/constants";

export const ComponentDecorator = (Story, context) => {
  const mounted = useRef(false);
  const listener = useRef(null);
  const [args, updateArgs] = useArgs();

  // useEffect(() => {
  //   if (IS_ADMIN_PARENT) {
  //     const layout =
  //       JSON.parse(window.parent.sessionStorage.getItem("layout")) ?? {};

  //     layout.showNav = false;
  //     window.parent.sessionStorage.setItem("layout", JSON.stringify(layout));
  //   }
  // }, []);

  useEffect(() => {
    if (IS_ADMIN_PARENT) {
      listener.current = window.parent.addEventListener(
        "message",
        ({ data }) => {
          if (data?.type === "INIT_ARGS") {
            updateArgs(data.payload);
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

  return <>{Story()}</>;
};
