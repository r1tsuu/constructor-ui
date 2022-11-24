import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import useMediaQuery from "../../../hooks/useMediaQuery";

import { useSwiperNavigation } from "../../../hooks/useSwiperNavigation";
import { mediaQueries } from "../../../utils/constants";

import {
  ContentContainer,
  Button,
  Arrow,
  Card,
  Typography,
  Section,
} from "../../shared";

import styles from "./Terms.module.scss";

const Arrows = ({ next, prev }) => {
  return (
    <div className={styles.arrows}>
      <Arrow {...prev} />
      <Arrow {...next} />
    </div>
  );
};

export const Terms = ({ subTitle = null, title, items, settings }) => {
  const minTablet = useMediaQuery(mediaQueries.minTablet);
  const { swiperProps, arrowProps } = useSwiperNavigation({
    type: settings.arrowType,
  });

  return (
    <Section {...settings.section}>
      <ContentContainer>
        {subTitle && (
          <Typography
            className={styles.subTitle}
            as={"h3"}
            {...settings.subTitle}
          >
            {subTitle}
          </Typography>
        )}
        <div className={styles.titleArrowsWrapper}>
          <Typography as={"h2"} className={styles.title} {...settings.title}>
            {title}
          </Typography>
          {minTablet && <Arrows {...arrowProps} />}
        </div>
        <Swiper
          {...swiperProps}
          className={styles.slider}
          slidesPerView={"auto"}
          spaceBetween={20}
        >
          {items.map(
            (
              {
                _id,
                title,
                subTitle,
                description,
                advantage,
                buttonName,
                buttonLink,
              },
              index
            ) => (
              <SwiperSlide key={_id || index} className={styles.slide}>
                <Card {...settings.card.props} className={styles.card}>
                  <Typography {...settings.card.title}>{title}</Typography>
                  {subTitle && (
                    <Typography
                      className={styles.cardSubtitle}
                      {...settings.card.subTitle}
                    >
                      {subTitle}
                    </Typography>
                  )}
                  <Typography
                    className={styles.cardDescription}
                    {...settings.card.description}
                  >
                    {description}
                  </Typography>
                  <div className={styles.cardBottom}>
                    {advantage && (
                      <Typography
                        className={styles.cardAdvantage}
                        {...settings.card.advantage}
                      >
                        {advantage}
                      </Typography>
                    )}
                    <div className={styles.cardButtonWrapper}>
                      <Button
                        as={"a"}
                        href={buttonLink}
                        target={"_blank"}
                        type={settings.buttonType}
                        label={buttonName}
                      />
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            )
          )}
        </Swiper>
        {!minTablet && <Arrows {...arrowProps} />}
      </ContentContainer>
    </Section>
  );
};

export default Terms;
