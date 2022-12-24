import React from "react";
import { Button, Typography, ContentContainer, Section } from "../../shared";

import styles from "./PhotoTextButton.module.scss";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { mediaQueries } from "../../../utils/constants";
import { ColorsInjector } from "../../../containers";

export const PhotoTextButton = ({
  subTitle,
  title,
  description,
  buttonName,
  buttonLink,
  photoSource,
  photoSourceMobile,
  settings,
  icon,
}) => {
  const isMobile = !useMediaQuery(mediaQueries.minTablet);
  return (
    <Section {...settings.section}>
      <ContentContainer
        style={{
          "--grid-template-columns": settings.gridTemplateColumns,
        }}
        data-is-reverse={settings.isReverse}
        className={styles.grid}
      >
        {icon && (
          <div className={styles.iconWrapper}>
            <ColorsInjector background={settings.iconBorderColor}>
              <div className={styles.iconBorder} />
            </ColorsInjector>
            <img src={icon} alt="" />
            <ColorsInjector background={settings.iconBorderColor}>
              <div className={styles.iconBorder} />
            </ColorsInjector>
          </div>
        )}
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
          <img alt="" src={isMobile ? photoSourceMobile : photoSource} />
        </div>
        {description && (
          <Typography className={styles.description} {...settings.description}>
            {description}
          </Typography>
        )}
        {buttonName && (
          <div
            data-position={settings.buttonPosition}
            className={styles.buttonWrapper}
          >
            <Button
              href={buttonLink}
              type={settings.buttonType}
              label={buttonName}
            />
          </div>
        )}
      </ContentContainer>
    </Section>
  );
};

export default PhotoTextButton;
