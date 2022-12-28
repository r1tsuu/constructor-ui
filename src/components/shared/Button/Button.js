import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";
import { Typography } from "../Typography";
import { useGlobalForms } from "../../../contexts/GlobalFormsContext";
import { useEnvironment } from "../../../contexts/EnvironmentContext";

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
  selector,
  ...props
}) => {
  const { handleOpenForm } = useGlobalForms();
  const { Link } = useEnvironment();

  let resolvedHref;

  let isLink;

  if (href) {
    As = "a";
    resolvedHref = href;
    isLink = true;
    if (href.startsWith("popup-form-")) {
      isLink = false;
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

  const elementProps = {
    "data-full-width": fullWidth,
    className: clsx(styles.base, styles[type], className),
    href: resolvedHref,
    onClick,
    type: htmlType,
    children: <Typography as="span">{label || children}</Typography>,
    ...props,
  };

  if (isLink && Link) {
    return (
      <Link href={elementProps.href}>
        <a
          data-component={"button"}
          data-full-width={fullWidth}
          className={elementProps.className}
        >
          {elementProps.children}
        </a>
      </Link>
    );
  }

  return <As {...elementProps} data-component="button" />;
};
