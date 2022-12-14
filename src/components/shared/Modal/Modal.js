import clsx from "clsx";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ColorsInjector } from "../../../containers";
import { CSSInjector } from "../../../containers/CSSInjector";
import { useSection } from "../../../contexts/SectionContext";
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
  backgroundModal,
  backgroundOpacity,
  backgroundImage,
  backgroundPosition,
  className,
  withCloseButton,
  children,
  theme,
  style,
  noBefore,
  css,
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
      <CSSInjector css={css}>
        <ColorsInjector
          background={backgroundModal}
          beforeBackground={backgroundColor}
        >
          <div
            data-component="modal"
            style={{
              zIndex,
              "--overlay-background-opacity": backgroundOpacity,
              backgroundImage: backgroundImage && `url("${backgroundImage}")`,
              backgroundPosition,
              ...style,
            }}
            data-without-before={noBefore}
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
      </CSSInjector>
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
  backgroundModal,
  backgroundOpacity = 0.9,
  backgroundImage,
  backgroundPosition,
  withCloseButton = false,
  className,
  children,
  overlayTheme,
  isFormModal = false,
  noBefore = false,
  css,

  ...props
}) => {
  const [isSSR, setIsSSR] = useState(true);

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
      backgroundModal={backgroundModal}
      css={css}
      noBefore={noBefore}
      {...props}
    >
      {children}
    </ModalOverlay>,
    document.body
  );
};
