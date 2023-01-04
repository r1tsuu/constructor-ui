import React from "react";
import { Input } from "../../shared/Input";
import { UiKitContainer } from "../../../containers";

import styles from "./Inputs.module.scss";
import { useInStorybook } from "../../../contexts/InStorybookContext";

export const Buttons = ({ primary, secondary, tertiary }) => {
  const inStoryBook = useInStorybook();

  const renderComponent = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Buttons</div>
        <div className={styles.buttonsList}>
          {["primary", "secondary", "tertiary"].map((type) => (
            <Input type={type} key={type} />
          ))}
        </div>
      </div>
    );
  };

  return inStoryBook ? (
    <UiKitContainer inputs={{ primary, secondary, tertiary }} toHTML={false}>
      {renderComponent()}
    </UiKitContainer>
  ) : (
    renderComponent()
  );
};
