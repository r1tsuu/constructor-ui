import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { toStrZeroes } from "../../../utils";
import { Typography } from "../Typography";

import styles from "./ProgressNumbers.module.scss";

export const ProgressNumbers = ({ value, maxValue, className, ...props }) => {
  return (
    <div
      data-component="progress-numbers"
      className={clsx(styles.wrapper, className)}
      {...props}
    >
      <Typography color={"text-primary"} as={"span"} type={"h3"}>
        {`${toStrZeroes(value)}/`}
      </Typography>
      <Typography color={"text-primary"} as={"span"} type={"h3"}></Typography>
      <Typography as={"span"} type={"h4"} color={"text-secondary"}>
        {toStrZeroes(maxValue)}
      </Typography>
    </div>
  );
};
