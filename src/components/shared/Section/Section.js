import clsx from "clsx";
import React from "react";
import { ColorsInjector } from "../../../containers";

import styles from "./Section.module.scss";

export const Section = ({
  theme = "dark",
  as: As = "section",
  bg = "background",
  className,
  children,
  ...props
}) => {
  return (
    <ColorsInjector background={bg}>
      <As
        data-theme={theme}
        className={clsx(styles.section, className)}
        {...props}
      >
        {children}
      </As>
    </ColorsInjector>
  );
};
