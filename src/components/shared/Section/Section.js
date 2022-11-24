import clsx from "clsx";
import React from "react";
import { ColorsInjector } from "../../../containers";
import { useSection } from "../../../contexts/SectionContext";
import { resolvePaddings } from "../../../utils/resolvePaddings";

import styles from "./Section.module.scss";

export const Section = ({
  theme = "dark",
  as: As = "section",
  bg = "background",
  paddingTop,
  paddingBottom,
  bgImage,
  bgPosition,
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
        style={{
          backgroundImage: bgImage && `url("${bgImage}")`,
          backgroundPosition: bgPosition,
          ...resolvePaddings({
            paddingTop,
            paddingBottom,
          }),
        }}
        data-theme={theme}
        className={clsx(styles.section, className)}
        {...props}
      >
        {children}
      </As>
    </ColorsInjector>
  );
};
