import React, { useState } from "react";
import { useSwiperNavigation } from "../../../hooks/useSwiperNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Arrow,
  Button,
  ContentContainer,
  Section,
  Typography,
} from "../../shared";
import { ColorsInjector } from "../../../containers";

import styles from "./BlogSection.module.scss";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { mediaQueries } from "../../../utils/constants";
import { PublicationCard } from "../../blog/PublicationCard/PublicationCard";

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

export const BlogSection = ({
  cards,
  title,
  buttonName,
  buttonLink,
  settings,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { goTo, arrowProps, swiperProps } = useSwiperNavigation({
    type: settings.arrowType,
  });
  const isMinLaptop = useMediaQuery(mediaQueries.minLaptop);

  const handleRealIndexChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  const handlePaginationButtonClick = (index) => goTo(index);

  return (
    <Section {...settings.section}>
      <ContentContainer>
        <div className={styles.upper}>
          <Typography {...settings.title} as={"h2"}>
            {title}
          </Typography>
          {isMinLaptop && (
            <div className={styles.arrowsWrapper}>
              <Arrow {...arrowProps.prev} />
              <Arrow {...arrowProps.next} />
            </div>
          )}
        </div>
        <Swiper
          {...swiperProps}
          rewind
          slidesPerView={1}
          spaceBetween={20}
          onRealIndexChange={handleRealIndexChange}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide
              style={{
                width: "auto",
              }}
              key={index}
            >
              <div className={styles.card}>
                <PublicationCard {...card} settings={settings.card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {!isMinLaptop && (
          <Pagination
            currentIndex={currentIndex}
            onButtonClick={handlePaginationButtonClick}
            settings={settings}
            maxIndex={cards.length}
          />
        )}
        <div className={styles.buttonWrapper}>
          <Button
            href={buttonLink}
            label={buttonName}
            type={settings.buttonType}
          />
        </div>
      </ContentContainer>
    </Section>
  );
};
