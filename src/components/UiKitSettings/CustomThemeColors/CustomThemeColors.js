import React from "react";
import { UiKitContainer } from "../../../containers";
import { useInStorybook } from "../../../contexts/InStorybookContext";

import styles from "./CustomThemeColors.module.scss";

export const CustomThemeColors = (colors) => {
  const inStoryBook = useInStorybook();

  const renderComponent = () => {
    <div className={styles.wrapper}>
      <div className={styles.title}>Custom Theme Colors</div>
      <div className={styles.colorsList}>
        {Object.keys(colors).map((key) => (
          <div
            key={key}
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
    </div>;
  };

  return inStoryBook ? (
    <UiKitContainer toHTML={false} customColors={colors}>
      {renderComponent()}
    </UiKitContainer>
  ) : (
    renderComponent()
  );
};
