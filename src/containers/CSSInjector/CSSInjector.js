import clsx from "clsx";
import { cloneElement } from "react";
import { css as emotion } from "@emotion/css";

export const CSSInjector = ({ children, css }) => {
  if (!children) return null;

  if (!css) return children;

  return cloneElement(children, {
    ...children.props,
    className: clsx(emotion(css), children.props.className),
  });
};
