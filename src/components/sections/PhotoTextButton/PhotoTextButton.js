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
  const isMinLaptop = useMediaQuery(mediaQueries.minLaptop);
  return (
    <Section {...settings.section}>
      <ContentContainer
        data-is-reverse={settings.isReverse}
        className={styles.container}
        style={{
          "--left-width": settings.leftWidth,
          "--right-width": settings.rightWidth,
          "--gap": settings.gap,
        }}
      >
        <div className={styles.left}>
          {icon && (
            <div
              data-position={settings.iconPosition}
              className={styles.iconWrapper}
            >
              {settings.iconBorder && (
                <ColorsInjector background={settings.iconBorderColor}>
                  <div className={styles.iconBorder} />
                </ColorsInjector>
              )}
              <div
                style={{
                  width: settings.iconWidth,
                  height: settings.iconHeight,
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={icon}
                  alt=""
                />
              </div>
              {settings.iconBorder && (
                <ColorsInjector background={settings.iconBorderColor}>
                  <div className={styles.iconBorder} />
                </ColorsInjector>
              )}
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

          {description && isMinLaptop && (
            <Typography
              className={styles.description}
              {...settings.description}
            >
              {description}
            </Typography>
          )}
          {buttonName && isMinLaptop && (
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
        </div>
        <div className={styles.right}>
          <div className={styles.photoWrapper}>
            <img alt="" src={isMobile ? photoSourceMobile : photoSource} />
          </div>
          {description && !isMinLaptop && (
            <Typography
              className={styles.description}
              {...settings.description}
            >
              {description}
            </Typography>
          )}
          {buttonName && !isMinLaptop && (
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
        </div>
      </ContentContainer>
    </Section>
  );
};

export default PhotoTextButton;
