import React from "react";

import { Section, ContentContainer, Typography } from "../../shared";

import defaultItemIcon from "./assets/default-icon.svg";
import styles from "./Advantages.module.scss";

export const Advantages = ({ subTitle = null, title, items, settings }) => {
  return (
    <Section {...settings.section}>
      <ContentContainer>
        {subTitle && (
          <Typography
            data-selector="subtitle"
            {...settings.subTitle}
            className={styles.subTitle}
          >
            {subTitle}
          </Typography>
        )}
        <Typography
          data-selector="title"
          {...settings.title}
          className={styles.title}
        >
          {title}
        </Typography>
        <ul
          data-selector="list"
          className={styles.grid}
          data-grid-columns={settings.gridColumns}
        >
          {items.map(({ _id, title, subTitle }, index) => (
            <li data-selector="item" key={_id || index} className={styles.card}>
              <div
                data-selector="card-icon-wrapper"
                className={styles.cardIconWrapper}
              >
                <img alt="" src={defaultItemIcon} />
              </div>
              <Typography
                data-selector="card-title"
                className={styles.cardTitle}
                {...settings.card.title}
              >
                {title}
              </Typography>
              <Typography
                data-selector="card-subtitle"
                className={styles.cardSubTitle}
                {...settings.card.subTitle}
              >
                {subTitle}
              </Typography>
            </li>
          ))}
        </ul>
      </ContentContainer>
    </Section>
  );
};
