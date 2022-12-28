import clsx from "clsx";
import { useEffect, cloneElement } from "react";

export const CSSInjector = ({ children, css }) => {
  const injectedClassName = Math.random().toString(36).slice(2, 7);
  const cssToAppend =
    css &&
    `
  .${injectedClassName} {
    ${css}
  }
  `;

  useEffect(() => {
    if (cssToAppend) {
      const styleEl = document.createElement("style");

      styleEl.type = "text/css";
      styleEl.appendChild(document.createTextNode(cssToAppend));
      document.head.appendChild(styleEl);
    }
  }, [cssToAppend]);

  if (!children) return null;

  if (!cssToAppend) return children;

  return cloneElement(children, {
    ...children.props,
    className: clsx(injectedClassName, children.props.className),
  });
};
