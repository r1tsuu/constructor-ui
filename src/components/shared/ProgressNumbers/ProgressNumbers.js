import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Typography } from "../Typography";

import styles from "./ProgressNumbers.module.scss";

const toStrZeroes = (num, places = 2) => {
  if (!num) return "";
  return String(num).padStart(places, "0");
};

export const ProgressNumbers = ({ value, maxValue, className, ...props }) => {
  const [isAnimating, setAnimating] = useState(false);
  // const timeout = useRef(null);

  // useEffect(() => {
  //   setAnimating(true);
  // }, [value]);

  // useEffect(() => {
  //   if (isAnimating) {
  //     timeout.current = setTimeout(() => setAnimating(false), 100);
  //   }
  // }, [isAnimating]);

  // useEffect(() => {
  //   return () => clearTimeout(timeout.current);
  // }, []);

  return (
    <div className={clsx(styles.wrapper, className)} {...props}>
      {/* <CSSTransition
        classNames={{
          enter: styles.valueEnter,
          enterActive: styles.valueEnterActive,
          exit: styles.valueExit,
          exitActive: styles.valueExitActive,
        }}
        in={!isAnimating}
        unmountOnExit
        timeout={300}
      > */}
      <Typography color={"text-primary"} as={"span"} type={"h3"}>
        {`${toStrZeroes(value)}`}
      </Typography>
      {/* </CSSTransition> */}
      <Typography color={"text-primary"} as={"span"} type={"h3"}>
        /
      </Typography>

      <Typography as={"span"} type={"h4"} color={"secondary"}>
        {toStrZeroes(maxValue)}
      </Typography>
    </div>
  );
};
