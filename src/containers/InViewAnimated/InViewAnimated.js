import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

export const InViewAnimated = ({
  as = "div",
  disabled = false,
  children,
  ...props
}) => {
  const [ref, isInView] = useInView();
  const controls = useAnimation();
  const Component = motion[as];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <Component
      {...(!disabled && {
        ref,
        animate: controls,
        initial: "hidden",
        variants: {
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          hidden: { opacity: 0, y: "10%" },
        },
      })}
      {...props}
    >
      {children}
    </Component>
  );
};
