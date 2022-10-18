import React from "react";
import clsx from "clsx";
import { Button, Typography, ContentContainer, Section } from "../../shared";

import styles from "./ImageTextButton.module.scss";

export const ImageTextButton = ({
  subTitle,
  title,
  description,
  buttonName,
  photoSource,
  settings,
}) => {
  return (
    <Section bg={settings.backgroundColor} theme={settings.theme}>
      <ContentContainer
        className={clsx(styles.grid, settings.isReverse && styles.reverse)}
      >
        <Typography
          as={"h3"}
          className={styles.subTitle}
          color={settings.subTitle.color}
          type={settings.subTitle.type}
        >
          {subTitle}
        </Typography>
        <Typography as={"h2"} className={styles.title} {...settings.title}>
          {title}
        </Typography>
        <div className={styles.photoWrapper}>
          <img alt="" src={photoSource} />
        </div>
        <Typography className={styles.description} {...settings.description}>
          {description}
        </Typography>
        <div
          className={clsx(
            styles.buttonWrapper,
            styles[settings.buttonPosition]
          )}
        >
          <Button type={settings.buttonType} label={buttonName} />
        </div>
      </ContentContainer>
    </Section>
  );
};
