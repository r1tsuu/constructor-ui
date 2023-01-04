import clsx from "clsx";
import React from "react";
import { ColorsInjector } from "../../../containers";
import { CSSInjector } from "../../../containers/CSSInjector";
import { useSection } from "../../../contexts/SectionContext";
import { resolvePaddings } from "../../../utils/resolvePaddings";

import styles from "./Section.module.scss";
import { InViewAnimated } from "../../../containers/InViewAnimated";

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
  inViewAnimationDisabled = false,
  ...props
}) => {
  const { id, css, componentName } = useSection();

  const renderChild = () => {
    if (inViewAnimationDisabled) return children;
    return <InViewAnimated>{children}</InViewAnimated>;
  };

  return (
    <CSSInjector css={css}>
      <ColorsInjector background={bg}>
        <section
          {...(id && {
            id,
          })}
          data-section={componentName}
          style={{
            backgroundImage: bgImage && `url("${bgImage}")`,
            backgroundPosition: bgPosition,
            ...resolvePaddings({
              paddingTop,
              paddingBottom,
              defaultPaddingTop: "40px 60px 80px 80px",
              defaultPaddingBottom: "40px 60px 80px 80px",
            }),
          }}
          data-theme={theme}
          className={clsx(styles.section, className)}
          {...props}
        >
          {renderChild()}
        </section>
      </ColorsInjector>
    </CSSInjector>
  );
};
