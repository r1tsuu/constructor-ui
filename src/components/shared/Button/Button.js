import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";
import { Typography } from "../Typography";

export const Button = ({
  type = "default",
  as: As = "button",
  fullWidth = false,
  className,
  label,
  children,
  onClick,
  href,
  htmlType,
  ...props
}) => {
  if (href) {
    As = "a";
    if (href.startsWith("popup-form-")) {
      As = "button";
      onClick = () => {
        console.log(props.href.replace("popup-form-", ""));
      };
    }
  }

  return (
    <As
      data-full-width={fullWidth}
      className={clsx(styles.base, styles[type], className)}
      href={href}
      onClick={onClick}
      type={htmlType}
      {...props}
    >
      <Typography as="span">{label || children}</Typography>
    </As>
  );
};
