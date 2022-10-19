import clsx from "clsx";
import React from "react";

import { ContentContainer, Section, Typography, Card } from "../../shared";

import styles from "./Characteristics.module.scss";

export const Characteristics = ({ title, subTitle, items, settings }) => {
  return (
    <Section {...settings.section}>
      <ContentContainer>
        <Typography
          className={styles.subTitle}
          as={"h3"}
          {...settings.subTitle}
        >
          {subTitle}
        </Typography>
        <Typography className={styles.title} as={"h3"} {...settings.title}>
          {title}
        </Typography>
        <ul
          className={clsx(
            styles.grid,
            settings.gridItems === "4" ? styles.cols_4 : styles.cols_3
          )}
        >
          {items.map(({ _id, title, subTitle }, index) => (
            <Card
              as={"li"}
              key={_id || index}
              className={styles.card}
              {...settings.card.props}
            >
              <Typography className={styles.cardTitle} {...settings.card.title}>
                {title}
              </Typography>
              <Typography {...settings.card.subTitle}>{subTitle}</Typography>
            </Card>
          ))}
        </ul>
      </ContentContainer>
    </Section>
  );
};
