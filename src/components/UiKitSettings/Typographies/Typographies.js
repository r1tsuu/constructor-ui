import React from "react";

import { Typography } from "../../shared";
import { UiKitContainer } from "../../../containers";

import styles from "./Typographies.module.scss";
import { useInStorybook } from "../../../contexts/InStorybookContext";

export const Typographies = (typographies) => {
  console.log(typographies);
  const inStoryBook = useInStorybook();

  const renderComponent = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Typographies</div>
        <div className={styles.typographiesList}>
          {["h2", "h3", "h4", "h5", "p1", "p2"].map((type) => (
            <Typography isHTML={false} type={type} color={"#000"} key={type}>
              Typography {type}
            </Typography>
          ))}
        </div>
      </div>
    );
  };

  return inStoryBook ? (
    <UiKitContainer typographies={typographies} toHTML={false}>
      {renderComponent()}
    </UiKitContainer>
  ) : (
    renderComponent()
  );
};
