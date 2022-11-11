import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useSwiperNavigation } from "../../../hooks/useSwiperNavigation";
import { mediaQueries } from "../../../utils/constants";
import {
  ContentContainer,
  Section,
  Typography,
  Fade,
  Arrow,
  ProgressNumbers,
} from "../../shared";

import styles from "./AdvantagesSlider.module.scss";

export const AdvantagesSlider = ({ title, subTitle, items, settings }) => {
  const isMobile = !useMediaQuery(mediaQueries.minTablet);
  const isMinLaptop = useMediaQuery(mediaQueries.minLaptop);
  const [realIndex, setRealIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const { swiperProps, arrowProps } = useSwiperNavigation({
    type: settings.arrowType,
  });
  return (
    <Section className={styles.section} {...settings.section}>
      <ContentContainer>
        {subTitle && (
          <Typography
            className={styles.subTitle}
            {...settings.subTitle}
            as={"h3"}
          >
            {subTitle}
          </Typography>
        )}
        <Typography className={styles.title} {...settings.title} as={"h2"}>
          {title}
        </Typography>
        <Swiper
          {...swiperProps}
          className={styles.swiper}
          onRealIndexChange={(swiper) => setRealIndex(swiper.realIndex)}
          onActiveIndexChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          slidesPerView={"auto"}
          loop
          spaceBetween={40}
          breakpoints={{
            1150: {
              spaceBetween: 73,
            },
            1550: {
              spaceBetween: 85,
            },
          }}
        >
          {items.map(
            (
              { title, description, photoSource, photoSourceMobile, _id },
              index
            ) => (
              <SwiperSlide
                className={clsx(
                  styles.item,
                  index === realIndex && styles.isActive
                )}
                key={_id ?? index}
              >
                <div className={styles.itemPhotoWrapper}>
                  <img
                    className={styles.itemPhoto}
                    src={isMobile ? photoSourceMobile : photoSource}
                  />
                </div>
                <div className={styles.itemTextWrapper}>
                  <Typography
                    className={styles.itemTitle}
                    {...settings.card.title}
                    as={"h4"}
                  >
                    {title}
                  </Typography>
                  {description && (
                    <Typography
                      className={styles.itemDescription}
                      as={"p"}
                      {...settings.card.description}
                    >
                      {description}
                    </Typography>
                  )}
                </div>
                {isMinLaptop && (
                  <Fade
                    isActive={index !== realIndex}
                    durationEnter={450}
                    durationExit={150}
                  >
                    <div className={styles.arrowsWrapper}>
                      <Arrow {...arrowProps.prev} />
                      <ProgressNumbers
                        value={realIndex + 1}
                        maxValue={items.length}
                      />
                      <Arrow {...arrowProps.next} />
                    </div>
                  </Fade>
                )}
              </SwiperSlide>
            )
          )}
        </Swiper>
        {!isMinLaptop && (
          <div className={styles.arrowsWrapper}>
            <Arrow {...arrowProps.prev} />
            <ProgressNumbers value={realIndex + 1} maxValue={items.length} />
            <Arrow {...arrowProps.next} />
          </div>
        )}
      </ContentContainer>
    </Section>
  );
};
