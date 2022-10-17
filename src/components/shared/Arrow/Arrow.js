import React from "react";
import clsx from "clsx";
import { CubeIcon, LongIcon } from "./arrow-icons";

import "./Arrow.scss";

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
      className={clsx(
        isCube ? "arrow-cube" : "arrow-long",
        `arrow-${type}`,
        className
      )}
      data-direction={isPrev ? "prev" : "next"}
      {...props}
    >
      {isCube ? <CubeIcon /> : <LongIcon />}
    </As>
  );
};
