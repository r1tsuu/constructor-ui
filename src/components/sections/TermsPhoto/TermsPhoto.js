import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ColorsInjector } from "../../../containers";

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

import styles from "./TermsPhoto.module.scss";

const Pagination = ({ currentIndex, maxIndex, onButtonClick, settings }) => {
  return (
    <div className={styles.pagination}>
      {Array(maxIndex)
        .fill("_")
        .map((_, index) => (
          <ColorsInjector
            key={index}
            background={
              index === currentIndex
                ? settings.paginationActiveColor
                : settings.paginationColor
            }
          >
            <button
              className={styles.paginationItem}
              onClick={onButtonClick.bind(null, index)}
            />
          </ColorsInjector>
        ))}
    </div>
  );
};

const Arrows = ({ next, prev }) => {
  return (
    <div className={styles.arrows}>
      <Arrow {...prev} />
      <Arrow {...next} />
    </div>
  );
};

const usePaginationLength = (length) => {
  const query_1 = useMediaQuery("(min-width: 480px)");
  const query_2 = useMediaQuery("(min-width: 770px)");
  if (query_2) return length - 2;
  if (query_1) return length - 1;
  return length;
};

export const TermsPhoto = ({
  subTitle = null,
  title,
  items,
  settings,
  photo,
}) => {
  const minLaptop = useMediaQuery(mediaQueries.minLaptop);
  const { goTo, swiperProps, arrowProps } = useSwiperNavigation({
    type: settings.arrowType,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRealIndexChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };
  const length = usePaginationLength(items.length);

  const handlePaginationButtonClick = (index) => goTo(index);

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
        </div>
        <div className={styles.content}>
          <div className={styles.swiperWrapper}>
            {minLaptop && <Arrows {...arrowProps} />}
            <Swiper
              {...swiperProps}
              className={styles.slider}
              slidesPerView={"auto"}
              spaceBetween={20}
              onRealIndexChange={handleRealIndexChange}
              rewind
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
            {!minLaptop && (
              <Pagination
                currentIndex={currentIndex}
                onButtonClick={handlePaginationButtonClick}
                settings={settings}
                maxIndex={length}
              />
            )}
          </div>

          {minLaptop && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={photo} alt="" />
            </div>
          )}
        </div>
      </ContentContainer>
    </Section>
  );
};

export default TermsPhoto;
