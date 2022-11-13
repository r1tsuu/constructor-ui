import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ColorsInjector } from "../../../containers";
import { Arrow, Fade, Section, Typography } from "../../shared";

import styles from "./WelcomeSliderText.module.scss";

import "swiper/swiper.min.css";
import { useSwiperNavigation } from "../../../hooks/useSwiperNavigation";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { mediaQueries } from "../../../utils/constants";

const Block = ({
  title,
  description,
  arrowProps,
  titleSettings,
  descriptionSettings,
  buttonName,
  buttonLink,
  minHeight,
  backgroundColor,
  backgroundOpacity,
  buttonTextColor,
  buttonFontSize,
  buttonTextTransform,
}) => {
  return (
    <ColorsInjector beforeBackground={backgroundColor}>
      <div
        style={{
          "--block-min-height": minHeight,
          "--block-background-opacity": backgroundOpacity,
          "--block-button-font-size": buttonFontSize,
          "--block-button-text-transform": buttonTextTransform,
        }}
        className={styles.block}
      >
        <div className={styles.blockTextWrapper}>
          <Typography {...titleSettings} as={"h4"}>
            {title}
          </Typography>
          {description && (
            <Typography
              className={styles.blockDescription}
              {...descriptionSettings}
              as={"p"}
            >
              {description}
            </Typography>
          )}
        </div>
        <div className={styles.blockBottom}>
          <ColorsInjector textColor={buttonTextColor}>
            <a href={buttonLink} className={styles.blockButton}>
              {buttonName}
            </a>
          </ColorsInjector>
          <div className={styles.arrows}>
            <Arrow {...arrowProps.prev} />
            <Arrow {...arrowProps.next} />
          </div>
        </div>
      </div>
    </ColorsInjector>
  );
};

export const WelcomeSliderText = ({ buttonName, items, settings }) => {
  const isMobile = !useMediaQuery(mediaQueries.minTablet);
  const [realIndex, setRealIndex] = useState(0);
  const { swiperProps, arrowProps } = useSwiperNavigation({
    type: settings.arrowType,
  });

  const handleRealIndexChange = (swiper) => setRealIndex(swiper.realIndex);
  return (
    <Section {...settings.section}>
      <div className={styles.swiperWrapper}>
        <Swiper
          {...swiperProps}
          spaceBetween={20}
          breakpoints={{
            768: {
              spaceBetween: 30,
            },
            1150: {
              spaceBetween: 73,
            },
            1550: {
              spaceBetween: 86,
            },
          }}
          loop
          loopedSlides={2}
          onRealIndexChange={handleRealIndexChange}
          className={styles.swiper}
        >
          {items.map(
            ({ _id, photoSource, photoSourceMobile, ...block }, index) => (
              <SwiperSlide key={_id ?? index}>
                <div className={styles.slideContent}>
                  <img
                    className={styles.slidePhoto}
                    src={isMobile ? photoSourceMobile : photoSource}
                    alt=""
                  />
                  <Fade
                    durationEnter={600}
                    durationExit={300}
                    isActive={index === realIndex}
                  >
                    <Block
                      {...block}
                      {...settings.block}
                      arrowProps={arrowProps}
                      buttonName={buttonName}
                      titleSettings={settings.title}
                      descriptionSettings={settings.description}
                    />
                  </Fade>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </Section>
  );
};
