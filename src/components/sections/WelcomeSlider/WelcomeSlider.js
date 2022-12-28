import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEnvironment } from "../../../contexts/EnvironmentContext";

import useMediaQuery from "../../../hooks/useMediaQuery";
import { useSwiperNavigation } from "../../../hooks/useSwiperNavigation";
import { mediaQueries } from "../../../utils/constants";
import {
  Section,
  ProgressNumbers,
  Arrow,
  Button,
  ContentContainer,
  Fade,
} from "../../shared";

import styles from "./WelcomeSlider.module.scss";

const WelcomeSliderProgress = ({ isMobile, arrowProps, value, maxValue }) => {
  if (isMobile)
    return (
      <div
        data-selector="mobile-arrows-progress-wrapper"
        className={styles.mobileArrowsProgressWrapper}
      >
        <Arrow {...arrowProps.prev} />
        <ProgressNumbers value={value} maxValue={maxValue} />
        <Arrow {...arrowProps.next} />
      </div>
    );

  return <ProgressNumbers value={value} maxValue={maxValue} />;
};

export const WelcomeSlider = ({ items, settings }) => {
  const [realIndex, setRealIndex] = useState(0);
  const isMobile = !useMediaQuery(mediaQueries.minTablet);
  const isMinLaptop = useMediaQuery(mediaQueries.minLaptop);
  const { swiperProps, arrowProps } = useSwiperNavigation({
    type: settings.arrowType,
    arrowClassName: styles.arrow,
  });

  const handleRealIndexChange = (swiper) => setRealIndex(swiper.realIndex);

  return (
    <Section {...settings.section}>
      <div data-selector="swiper-wrapper" className={styles.swiperWrapper}>
        <Swiper
          className={styles.swiper}
          {...swiperProps}
          onRealIndexChange={handleRealIndexChange}
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
        >
          {items.map(
            (
              { photoSource, photoSourceMobile, buttonName, buttonLink, _id },
              index
            ) => (
              <SwiperSlide key={_id ?? index}>
                <div
                  data-selector="slide-content"
                  className={styles.slideContent}
                >
                  <img
                    data-selector="slide-photo"
                    className={styles.slidePhoto}
                    src={isMobile ? photoSourceMobile : photoSource}
                    alt=""
                  />
                  {!isMobile && (
                    <Fade
                      isActive={index === realIndex}
                      durationEnter={450}
                      durationExit={150}
                    >
                      <div data-selector="slide-wrapper">
                        <div
                          daata-selector="arrows-wrapper"
                          className={styles.arrowsWrapper}
                        >
                          <Arrow {...arrowProps.prev} />
                          <Arrow {...arrowProps.next} />
                        </div>
                        {isMinLaptop && buttonName && (
                          <div
                            data-selector="min-laptop-button-wrapper"
                            className={styles.minLaptopButtonWrapper}
                          >
                            <Button
                              href={buttonLink}
                              type={settings.buttonType}
                              label={buttonName}
                            />
                          </div>
                        )}
                      </div>
                    </Fade>
                  )}
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      <ContentContainer className={styles.container}>
        <WelcomeSliderProgress
          isMobile={isMobile}
          value={realIndex + 1}
          maxValue={items.length}
          arrowProps={arrowProps}
        />
        {!isMinLaptop && items[realIndex].buttonName && (
          <Button
            data-selector="button-mobile"
            type={settings.buttonType}
            label={items[realIndex].buttonName}
          />
        )}
      </ContentContainer>
    </Section>
  );
};

export default WelcomeSlider;
