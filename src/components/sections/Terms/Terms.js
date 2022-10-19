import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import {
  ContentContainer,
  Button,
  Arrow,
  Card,
  Typography,
  Section,
} from "../../shared";

import styles from "./Terms.module.scss";

export const Terms = ({ subTitle = null, title, items, settings }) => {
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
        <Typography as={"h2"} {...settings.title}>
          {title}
        </Typography>
        <Swiper className={styles.slider} slidesPerView={"auto"}>
          {items.map(
            ({
              _id,
              title,
              subTitle,
              description,
              advantage,
              buttonName,
              buttonLink,
            }) => (
              <SwiperSlide>
                <Card {...settings.card.props} className={styles.card}></Card>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </ContentContainer>
    </Section>
  );
};
