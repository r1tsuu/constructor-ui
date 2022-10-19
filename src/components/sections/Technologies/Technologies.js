import clsx from "clsx";
import React from "react";

import { Section, Card, Typography, ContentContainer } from "../../shared";

import styles from "./Technologies.module.scss";

export const Technologies = ({ subTitle, title, items, settings }) => {
  return (
    <Section {...settings.section}>
      <ContentContainer>
        <Typography
          as={"h3"}
          className={styles.subTitle}
          {...settings.subTitle}
        >
          {subTitle}
        </Typography>
        <Typography as={"h2"} className={styles.title} {...settings.title}>
          {title}
        </Typography>
        <ul
          className={clsx(
            styles.grid,
            settings.gridCols === "4" ? styles.grid_4 : styles.grid_3
          )}
        >
          {items.map(({ _id, title, subTitle, icon }, index) => (
            <Card
              as={"li"}
              key={_id || index}
              className={styles.card}
              {...settings.card.props}
            >
              <div className={styles.cardIconWrapper}>
                <img alt="" src={icon} />
              </div>
              <Typography className={styles.cardTitle} {...settings.card.title}>
                {title}
              </Typography>
              <Typography
                className={styles.cardSubTitle}
                {...settings.card.subTitle}
              >
                {subTitle}
              </Typography>
            </Card>
          ))}
        </ul>
      </ContentContainer>
    </Section>
  );
};
