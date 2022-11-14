import clsx from "clsx";
import React from "react";
import { ColorsInjector } from "../../../containers";
import { useSection } from "../../../contexts/SectionContext";

import styles from "./Section.module.scss";

export const Section = ({
  theme = "dark",
  as: As = "section",
  bg = "background",
  className,
  children,
  ...props
}) => {
  const { id } = useSection();
  return (
    <ColorsInjector background={bg}>
      <As
        {...(id && {
          id,
        })}
        data-theme={theme}
        className={clsx(styles.section, className)}
        {...props}
      >
        {children}
      </As>
    </ColorsInjector>
  );
};
