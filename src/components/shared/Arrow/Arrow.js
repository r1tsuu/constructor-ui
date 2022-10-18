import React from "react";
import clsx from "clsx";
import { CubeIcon, LongIcon } from "./arrow-icons";

import styles from "./Arrow.module.scss";

const arrowTypesStyles = {
  "cube-default": [styles.cube, styles.cubeDefault],
  "cube-primary": [styles.cube, styles.cubePrimary],
  "cube-secondary": [styles.cube, styles.cubeSecondary],
  "cube-tertiary": [styles.cube, styles.cubeTertiary],
  "long-default": [styles.long, styles.longDefault],
  "long-custom": [styles.long, styles.longCustom],
};

export const Arrow = ({
  isPrev,
  type = "cube-default",
  as: As = "button",
  className,
  ...props
}) => {
  const isCube = type.includes("cube");

  return (
    <As
      className={clsx(styles.baseStyles, arrowTypesStyles[type], className)}
      data-direction={isPrev ? "prev" : "next"}
      {...props}
    >
      {isCube ? <CubeIcon /> : <LongIcon />}
    </As>
  );
};
