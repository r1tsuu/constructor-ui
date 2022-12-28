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
    <div data-selector="pagination" className={styles.pagination}>
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
              data-selector="pagination-button"
              data-is-active={index === currentIndex}
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
    <div data-selector="arrows" className={styles.arrows}>
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
            data-selector="subtitle"
            className={styles.subTitle}
            as={"h3"}
            {...settings.subTitle}
          >
            {subTitle}
          </Typography>
        )}
        <div
          data-selector="title-arrows-wrapper"
          className={styles.titleArrowsWrapper}
        >
          <Typography
            data-selector="title"
            as={"h2"}
            className={styles.title}
            {...settings.title}
          >
            {title}
          </Typography>
        </div>
        <div data-selector="content" className={styles.content}>
          <div data-selector="swiper-wrapper" className={styles.swiperWrapper}>
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
                      <Typography
                        data-selector="card-title"
                        {...settings.card.title}
                      >
                        {title}
                      </Typography>
                      {subTitle && (
                        <Typography
                          data-selector="card-subtitle"
                          className={styles.cardSubtitle}
                          {...settings.card.subTitle}
                        >
                          {subTitle}
                        </Typography>
                      )}
                      <Typography
                        data-selector="card-description"
                        className={styles.cardDescription}
                        {...settings.card.description}
                      >
                        {description}
                      </Typography>
                      <div
                        data-selector="card-bottom"
                        className={styles.cardBottom}
                      >
                        {advantage && (
                          <Typography
                            data-selector="card-advantage"
                            className={styles.cardAdvantage}
                            {...settings.card.advantage}
                          >
                            {advantage}
                          </Typography>
                        )}
                        <div
                          data-selector="card-button-wrapper"
                          className={styles.cardButtonWrapper}
                        >
                          <Button
                            as={"a"}
                            href={buttonLink}
                            target={"_blank"}
                            type={settings.buttonType}
                            label={buttonName}
                            fullWidth
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
              data-selector="icon-wrapper"
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
