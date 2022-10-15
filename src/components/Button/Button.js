import PropTypes from "prop-types";
import React from "react";
import clsx from "clsx";

import "./Button.scss";

export const Button = ({
  type = "default",
  as: As = "button",
  className,
  children,
  ...props
}) => {
  return (
    <As className={clsx("button", `button-${type}`, className)} {...props}>
      {children}
    </As>
  );
};
