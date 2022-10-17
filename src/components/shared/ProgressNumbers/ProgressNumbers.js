import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Typography } from "../Typography";

import "./ProgressNumbers.scss";

export const ProgressNumbers = ({ value, maxValue, className, ...props }) => {
  const [isAnimating, setAnimating] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    setAnimating(true);
  }, [value]);

  useEffect(() => {
    if (isAnimating) {
      timeout.current = setTimeout(() => setAnimating(false), 100);
    }
  }, [isAnimating]);

  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  return (
    <div className={clsx("progress-numbers", className)} {...props}>
      <CSSTransition
        classNames="current-value"
        in={!isAnimating}
        unmountOnExit
        timeout={300}
      >
        <Typography className="current-value" as={"span"} type={"h3"}>
          {value}/
        </Typography>
      </CSSTransition>
      <Typography as={"span"} type={"h4"} themeColor={"secondary"}>
        {maxValue}
      </Typography>
    </div>
  );
};
