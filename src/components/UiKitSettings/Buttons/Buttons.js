import React from "react";
import { Button } from "../../shared";
import { UiKitContainer } from "../../../containers";

import styles from "./Buttons.module.scss";

export const Buttons = ({ primary, secondary, tertiary }) => {
  return (
    <UiKitContainer buttons={{ primary, secondary, tertiary }} toHTML={false}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Buttons</div>
        <div className={styles.buttonsList}>
          {["primary", "secondary", "tertiary"].map((type) => (
            <Button type={type} label={type} key={type} />
          ))}
        </div>
      </div>
    </UiKitContainer>
  );
};
