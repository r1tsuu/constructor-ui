import React from "react";

import { Section, Card, Typography, ContentContainer } from "../../shared";

import styles from "./Technologies.module.scss";

export const Technologies = ({ subTitle, title, items, settings }) => {
  return (
    <Section {...settings.section}>
      <ContentContainer>
        {subTitle && (
          <Typography
            data-selector="subtitle"
            as={"h3"}
            className={styles.subTitle}
            {...settings.subTitle}
          >
            {subTitle}
          </Typography>
        )}
        <Typography
          data-selector="title"
          as={"h2"}
          className={styles.title}
          {...settings.title}
        >
          {title}
        </Typography>
        <ul
          data-selector="list"
          data-grid-columns={settings.gridColumns}
          className={styles.grid}
        >
          {items.map(({ _id, title, subTitle, icon }, index) => (
            <Card
              as={"li"}
              key={_id || index}
              className={styles.card}
              {...settings.card.props}
            >
              <div
                data-selector="card-icon-wrapper"
                className={styles.cardIconWrapper}
              >
                <img alt="" src={icon} />
              </div>
              <Typography
                data-selector="title"
                className={styles.cardTitle}
                {...settings.card.title}
              >
                {title}
              </Typography>
              <Typography
                data-selector="subtitle"
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

export default Technologies;
