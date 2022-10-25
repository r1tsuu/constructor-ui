import React from "react";
import { UiKitContainer } from "../../../containers";

import styles from "./CustomThemeColors.module.scss";

export const CustomThemeColors = (colors) => {
  return (
    <UiKitContainer customColors={colors}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Custom Theme Colors</div>
        <div className={styles.colorsList}>
          {Object.keys(colors).map((key) => (
            <div
              className={styles.color}
              style={{
                "--theme-color": colors[key],
              }}
            >
              <div className={styles.colorBg} />
              <div className={styles.colorText}>{key}</div>
            </div>
          ))}
        </div>
      </div>
    </UiKitContainer>
  );
};
