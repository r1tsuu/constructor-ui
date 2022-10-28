import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";
import { Typography } from "..";

export const Button = ({
  type = "default",
  as: As = "button",
  className,
  label,
  children,
  ...props
}) => {
  return (
    <As className={clsx(styles.base, styles[type], className)} {...props}>
      <Typography as="span">{label || children}</Typography>
    </As>
  );
};
