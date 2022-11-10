import React, { cloneElement } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./Fade.module.scss";

export const Fade = ({
  durationEnter = 250,
  durationExit = 150,
  isActive,
  children,
}) => {
  const childrenWithVars = cloneElement(children, {
    ...children.props,
    style: {
      ...children.props.style,
      "--fade-enter-duration": durationEnter + "ms",
      "--fade-exit-duration": durationExit + "ms",
    },
  });
  return (
    <CSSTransition
      in={isActive}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
      timeout={{
        enter: durationEnter,
        exit: durationExit,
      }}
      unmountOnExit
    >
      {childrenWithVars}
    </CSSTransition>
  );
};
