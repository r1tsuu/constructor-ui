import clsx from "clsx";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ColorsInjector } from "../../../containers";
import { Fade } from "../Fade";
import { PopupCloseButton } from "../PopupCloseButton";

import styles from "./Modal.module.scss";

const ModalOverlay = ({
  isOpen,
  onClose,
  zIndex,
  animationDurationEnter,
  animationDurationExit,
  backgroundColor,
  backgroundOpacity,
  backgroundImage,
  backgroundPosition,
  className,
  withCloseButton,
  children,
  theme,
  style,
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
    <Fade
      isActive={isOpen}
      durationEnter={animationDurationEnter}
      durationExit={animationDurationExit}
    >
      <ColorsInjector beforeBackground={backgroundColor}>
        <div
          style={{
            zIndex,
            "--overlay-background-opacity": backgroundOpacity,
            backgroundImage: backgroundImage && `url("${backgroundImage}")`,
            backgroundPosition,
            ...style,
          }}
          onClick={handleOutsideClick}
          className={clsx(styles.overlay, className)}
          data-theme={theme}
          {...props}
        >
          {withCloseButton && (
            <PopupCloseButton
              className={styles.buttonClose}
              onClick={() => {
                if (typeof onClose === "function") onClose();
              }}
            />
          )}
          {children}
        </div>
      </ColorsInjector>
    </Fade>
  );
};

export const Modal = ({
  isOpen,
  onClose,
  zIndex = 10,
  animationDurationEnter = 150,
  animationDurationExit = 75,
  backgroundColor = "#2D2D2D",
  backgroundOpacity = 0.9,
  backgroundImage,
  backgroundPosition,
  withCloseButton = false,
  className,
  children,
  overlayTheme,
  ...props
}) => {
  const [isSSR, setIsSSR] = useState(null);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return ReactDOM.createPortal(
    <ModalOverlay
      isOpen={isOpen}
      onClose={onClose}
      zIndex={zIndex}
      animationDurationEnter={animationDurationEnter}
      animationDurationExit={animationDurationExit}
      backgroundColor={backgroundColor}
      backgroundOpacity={backgroundOpacity}
      backgroundImage={backgroundImage}
      backgroundPosition={backgroundPosition}
      className={className}
      theme={overlayTheme}
      withCloseButton={withCloseButton}
      {...props}
    >
      {children}
    </ModalOverlay>,
    document.body
  );
};
