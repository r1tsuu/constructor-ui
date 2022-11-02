import React from "react";
import { Button } from "../../shared";
import { UiKitContainer } from "../../../containers";

import styles from "./Buttons.module.scss";
import { useInStorybook } from "../../../contexts/InStorybookContext";

export const Buttons = ({ primary, secondary, tertiary }) => {
  const inStoryBook = useInStorybook();

  const renderComponent = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Buttons</div>
        <div className={styles.buttonsList}>
          {["primary", "secondary", "tertiary"].map((type) => (
            <Button type={type} label={type} key={type} />
          ))}
        </div>
      </div>
    );
  };

  return inStoryBook ? (
    <UiKitContainer buttons={{ primary, secondary, tertiary }} toHTML={false}>
      {renderComponent()}
    </UiKitContainer>
  ) : (
    renderComponent()
  );
};
