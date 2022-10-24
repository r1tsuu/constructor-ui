import React from "react";
import { Arrow } from "../../../components";
import { UiKitContainer } from "../../UiKitContainer";

import styles from "./Arrows.module.scss";

const ArrowType = ({ type }) => {
  return (
    <div className={styles.arrowTypeWrapper}>
      <span> Arrows {type} </span>
      <div className={styles.arrowType}>
        <Arrow isPrev type={type} />
        <Arrow type={type} />
      </div>
    </div>
  );
};

const types = [
  "cube-primary",
  "cube-secondary",
  "cube-tertiary",
  "long-custom",
];

export const Arrows = ({ cube, long }) => {
  return (
    <UiKitContainer arrowLong={long} arrowsCube={cube} toHTML={false}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Arrows</div>
        <div className={styles.arrowsList}>
          {types.map((type) => (
            <ArrowType key={type} type={type} />
          ))}
        </div>
      </div>
    </UiKitContainer>
  );
};
