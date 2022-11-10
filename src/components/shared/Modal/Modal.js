import clsx from "clsx";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { ColorsInjector } from "../../../containers";

import styles from "./Modal.module.scss";

const ModalOverlay = ({
  isOpen,
  onClose,
  zIndex,
  animationDurationEnter,
  animationDurationExit,
  backgroundColor,
  backgroundOpacity,
  className,
  children,
  ...props
}) => {
  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget && typeof onClose === "function") onClose();
  };

  useEffect(() => {
    const handleEscapePress = ({ key }) => {
      if (key === "Escape" && typeof onClose === "function" && isOpen)
        onClose();
    };

    window.addEventListener("keydown", handleEscapePress);

    return () => window.removeEventListener("keydown", handleEscapePress);
  }, []);

  return (
    <CSSTransition
      in={isOpen}
      timeout={{
        enter: animationDurationEnter,
        exit: animationDurationExit,
      }}
      classNames={{
        enter: styles.overlayEnter,
        enterActive: styles.overlayEnterActive,
        exit: styles.overlayExit,
        exitActive: styles.overlayExitActive,
      }}
      unmountOnExit
    >
      <ColorsInjector beforeBackground={backgroundColor}>
        <div
          style={{
            zIndex,
            "--animation-duration-enter": animationDurationEnter + "ms",
            "--animation-duration-exit": animationDurationExit + "ms",
            "--overlay-background-opacity": backgroundOpacity,
          }}
          onClick={handleOutsideClick}
          className={clsx(styles.overlay, className)}
          {...props}
        >
          {children}
        </div>
      </ColorsInjector>
    </CSSTransition>
  );
};

export const Modal = ({
  isOpen,
  onClose,
  zIndex = 10,
  animationDurationEnter = 150,
  animationDurationExit = 75,
  backgroundColor = "background",
  backgroundOpacity = 0.9,
  className,
  children,
  ...props
}) => {
  return ReactDOM.createPortal(
    <ModalOverlay
      isOpen={isOpen}
      onClose={onClose}
      zIndex={zIndex}
      animationDurationEnter={animationDurationEnter}
      animationDurationExit={animationDurationExit}
      backgroundColor={backgroundColor}
      backgroundOpacity={backgroundOpacity}
      className={className}
      {...props}
    >
      {children}
    </ModalOverlay>,
    document.body
  );
};
