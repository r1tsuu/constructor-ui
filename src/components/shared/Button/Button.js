import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";
import { Typography } from "../Typography";
import { useGlobalForms } from "../../../contexts/GlobalFormsContext";

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
  formQueryParams = {},
  ...props
}) => {
  const { handleOpenForm } = useGlobalForms();

  if (href) {
    As = "a";
    if (href.startsWith("popup-form-")) {
      As = "button";
      onClick = () => {
        handleOpenForm({
          index: Number(href.replace("popup-form-", "")),
          ...formQueryParams,
        });
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
