import React, { useEffect, useRef, useState } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import clsx from "clsx";
import { ColorsInjector } from "../../../containers";
import { Arrow, Fade, Section, Typography } from "../../shared";

import useMediaQuery from "../../../hooks/useMediaQuery";
import { mediaQueries } from "../../../utils/constants";

import styles from "./WelcomeSliderText.module.scss";

const SlideBlock = ({
  title,
  description,
  arrowProps,
  iconSource,
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
  paddingY,
  paddingX,
  enableIcon,
  style,
  className,
}) => {
  return (
    <ColorsInjector beforeBackground={backgroundColor}>
      <div
        data-selector="slide-block"
        style={{
          "--block-min-height": minHeight,
          "--block-background-opacity": backgroundOpacity,
          "--block-button-font-size": buttonFontSize,
          "--block-button-text-transform": buttonTextTransform,
          "--block-padding-y": paddingY,
          "--block-padding-x": paddingX,
          ...style,
        }}
        className={clsx(styles.block, enableIcon && styles.withIcon, className)}
      >
        <div
          data-selector="slide-block-content"
          className={clsx(styles.blockContent)}
        >
          <div data-selector="slide-block-left" className={styles.blockLeft}>
            <div
              data-selector="slide-block-text-wrapper"
              className={styles.blockTextWrapper}
            >
              <Typography
                data-selector="slide-block-title"
                {...titleSettings}
                as={"h4"}
              >
                {title}
              </Typography>
              {description && (
                <Typography
                  data-selector="slide-block-description"
                  className={styles.blockDescription}
                  {...descriptionSettings}
                  as={"p"}
                >
                  {description}
                </Typography>
              )}
            </div>
            <div
              data-selector="slide-block-bottom"
              className={styles.blockBottom}
            >
              <ColorsInjector textColor={buttonTextColor}>
                <a
                  data-selector="slide-block-button-link"
                  href={buttonLink}
                  className={styles.blockButton}
                >
                  {buttonName}
                </a>
              </ColorsInjector>
              <div data-selector="slide-block-arrows" className={styles.arrows}>
                <Arrow {...arrowProps.prev} />
                <Arrow {...arrowProps.next} />
              </div>
            </div>
          </div>
          {enableIcon && (
            <div
              data-selector="slide-block-icon-wrapper"
              className={styles.blockIconWrapper}
            >
              <img src={iconSource} alt="" />
            </div>
          )}
        </div>
      </div>
    </ColorsInjector>
  );
};

export const WelcomeSliderText = ({
  buttonName,
  items,
  settings,
  iconSource,
}) => {
  const isMobile = !useMediaQuery(mediaQueries.minTablet);
  const isMinLaptop = useMediaQuery(mediaQueries.minLaptop);
  const swiperRef = useRef(null);
  const [realIndex, setRealIndex] = useState(0);

  const arrowProps = {
    prev: {
      isPrev: true,
      onClick: () => swiperRef.current?.go("<"),
      type: settings.arrowType,
    },
    next: {
      onClick: () => swiperRef.current?.go(">"),
      type: settings.arrowType,
    },
  };

  const handleMove = (splide, index) => setRealIndex(index);

  return (
    <Section {...settings.section}>
      <div data-selector="swiper-wrapper" className={styles.swiperWrapper}>
        <Splide
          ref={swiperRef}
          onMove={handleMove}
          options={{
            arrows: false,
            pagination: false,
            gap: 20,
            mediaQuery: "min",
            rewind: true,
            breakpoints: {
              768: {
                gap: 40,
                padding: {
                  left: 30,
                  right: 30,
                },
              },
              1280: {
                rewind: false,
                type: "loop",
                padding: {
                  left: 100,
                  right: 100,
                },
                gap: 50,
              },
              1550: {
                padding: {
                  left: 180,
                  right: 180,
                },
              },
            },
          }}
        >
          {items.map(
            ({ _id, photoSource, photoSourceMobile, ...block }, index) => (
              <SplideSlide key={_id ?? index}>
                <div
                  data-selector="slide-content"
                  className={styles.slideContent}
                >
                  <img
                    data-selector="slide-image"
                    className={styles.slidePhoto}
                    src={isMobile ? photoSourceMobile : photoSource}
                    alt=""
                  />
                  <Fade
                    durationEnter={600}
                    durationExit={300}
                    isActive={index === realIndex || !isMinLaptop}
                  >
                    <SlideBlock
                      {...block}
                      {...settings.block}
                      enableIcon={settings.enableIcon}
                      iconSource={iconSource}
                      arrowProps={arrowProps}
                      buttonName={buttonName}
                    />
                  </Fade>
                </div>
              </SplideSlide>
            )
          )}
        </Splide>
      </div>
    </Section>
  );
};
