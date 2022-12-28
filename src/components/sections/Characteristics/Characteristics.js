import React from "react";
import { CSSInjector } from "../../../containers/CSSInjector";

import { ContentContainer, Section, Typography, Card } from "../../shared";

import styles from "./Characteristics.module.scss";

export const Characteristics = ({ title, subTitle, items, settings }) => {
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
        {title && (
          <Typography
            data-selector="title"
            className={styles.title}
            as={"h3"}
            {...settings.title}
          >
            {title}
          </Typography>
        )}
        <ul
          data-selector="list"
          data-grid-columns={settings.gridColumns}
          className={styles.grid}
        >
          {items.map(({ _id, title, subTitle }, index) => (
            <Card
              as={"li"}
              key={_id || index}
              className={styles.card}
              {...settings.card.props}
            >
              <Typography
                data-selector="card-title"
                className={styles.cardTitle}
                {...settings.card.title}
              >
                {title}
              </Typography>
              <Typography
                data-selector="card-subtitle"
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
