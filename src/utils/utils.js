import React from "react";
import clsx from "clsx";

export const cloneWithClass = ({ className, element }) => {
  return React.cloneElement(element, {
    ...element.props,
    className: clsx(element.props.className, className),
  });
};
