import clsx from "clsx";
import React from "react";

import styles from "./PopupCloseButton.module.scss";

export const PopupCloseButton = ({ onClick, className, borderRadius }) => {
  return (
    <button
      style={{
        borderRadius,
      }}
      className={clsx(styles.popupCloseButton, className)}
      onClick={onClick}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L11 10.8209M1 11L11 1.17907"
          stroke="#FCFCFC"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
};
