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

  let resolvedHref;

  if (href) {
    As = "a";
    resolvedHref = href;
    if (href.startsWith("popup-form-")) {
      resolvedHref = undefined;
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
      href={resolvedHref}
      onClick={onClick}
      type={htmlType}
      {...props}
    >
      <Typography as="span">{label || children}</Typography>
    </As>
  );
};
