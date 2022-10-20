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
  console.log(settings);
  return (
    <Section {...settings.section}>
      <ContentContainer
        data-is-reverse={settings.isReverse}
        className={styles.grid}
      >
        {subTitle && (
          <Typography
            as={"h3"}
            className={styles.subTitle}
            {...settings.subTitle}
          >
            {subTitle}
          </Typography>
        )}
        <Typography as={"h2"} className={styles.title} {...settings.title}>
          {title}
        </Typography>
        <div className={styles.photoWrapper}>
          <img alt="" src={photoSource} />
        </div>
        {description && (
          <Typography className={styles.description} {...settings.description}>
            {description}
          </Typography>
        )}
        <div
          data-position={settings.buttonPosition}
          className={styles.buttonWrapper}
        >
          <Button type={settings.buttonType} label={buttonName} />
        </div>
      </ContentContainer>
    </Section>
  );
};
