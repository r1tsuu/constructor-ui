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

const AdvantagesSliderArrowsProgress = ({
  realIndex,
  itemsLength,
  arrowProps,
  style,
  className,
}) => {
  return (
    <div
      data-selector="arrows-progress-wrapper"
      style={style}
      className={clsx(styles.arrowsWrapper, className)}
    >
      <Arrow {...arrowProps.prev} />
      <ProgressNumbers value={realIndex + 1} maxValue={itemsLength} />
      <Arrow {...arrowProps.next} />
    </div>
  );
};

export const AdvantagesSlider = ({ title, subTitle, items, settings }) => {
  const isMobile = !useMediaQuery(mediaQueries.minTablet);
  const isMinLaptop = useMediaQuery(mediaQueries.minLaptop);
  const [realIndex, setRealIndex] = useState(0);
  const { swiperProps, arrowProps } = useSwiperNavigation({
    type: settings.arrowType,
  });
  return (
    <Section className={styles.section} {...settings.section}>
      <ContentContainer>
        {subTitle && (
          <Typography
            data-selector={"subtitle"}
            className={styles.subTitle}
            {...settings.subTitle}
            as={"h3"}
          >
            {subTitle}
          </Typography>
        )}
        <Typography
          data-selector="title"
          className={styles.title}
          {...settings.title}
          as={"h2"}
        >
          {title}
        </Typography>
        <Swiper
          {...swiperProps}
          className={styles.swiper}
          onRealIndexChange={(swiper) => setRealIndex(swiper.realIndex)}
          slidesPerView={"auto"}
          rewind
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
                data-selector="item-slide"
                className={clsx(
                  styles.item,
                  index === realIndex && styles.isActive,
                  index === items.length - 1 && styles.isLast
                )}
                key={_id ?? index}
              >
                <div
                  data-selector="item-photo-wrapper"
                  className={styles.itemPhotoWrapper}
                >
                  <img
                    className={styles.itemPhoto}
                    src={isMobile ? photoSourceMobile : photoSource}
                    alt=""
                  />
                </div>
                <div
                  data-selector="item-text-wrapper"
                  className={styles.itemTextWrapper}
                >
                  <Typography
                    data-selector="item-title"
                    className={styles.itemTitle}
                    {...settings.card.title}
                    as={"h4"}
                  >
                    {title}
                  </Typography>
                  {description && (
                    <Typography
                      data-selector="item-description"
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
                    isActive={
                      index === realIndex + 1 || realIndex === items.length - 1
                    }
                    durationEnter={600}
                    durationExit={300}
                  >
                    <AdvantagesSliderArrowsProgress
                      itemsLength={items.length}
                      arrowProps={arrowProps}
                      realIndex={realIndex}
                    />
                  </Fade>
                )}
              </SwiperSlide>
            )
          )}
        </Swiper>
        {!isMinLaptop && (
          <AdvantagesSliderArrowsProgress
            itemsLength={items.length}
            arrowProps={arrowProps}
            realIndex={realIndex}
          />
        )}
      </ContentContainer>
    </Section>
  );
};
