import React from "react";

import { Section, ContentContainer, Typography } from "../../shared";

import defaultItemIcon from "./assets/default-icon.svg";
import styles from "./Advantages.module.scss";
import { useFieldsResolver } from "../../../hooks/useFieldsResolver";

const testRepeat = {
  data: [
    {
      _id: 1,
      custom_fields: {
        title: {
          value: "asd",
        },
        asd: {
          value: "dsadasd",
        },
      },
    },
    {
      _id: 2,
      custom_fields: {
        title: {
          value: "aSADASDsd",
        },
        asd: {
          value: "dsaaSDASDdasd",
        },
      },
    },
  ],
};

export const Advantages = ({ subTitle = null, title, items, settings }) => {
  const { mapRepeat, textResolver, fileResolver } = useFieldsResolver();
  console.log(
    fileResolver({
      isArray: false,
      field: [
        {
          _id: 2,
          compression: "asdad",
        },
      ],
    })
  );
  console.log(
    mapRepeat({
      field: testRepeat,
      keyResolvers: {
        title: {
          resolver: textResolver,
        },
        asd: {
          resolver: textResolver,
        },
      },
    })
  );
  return (
    <Section {...settings.section}>
      <ContentContainer>
        {subTitle && (
          <Typography {...settings.subTitle} className={styles.subTitle}>
            {subTitle}
          </Typography>
        )}
        <Typography {...settings.title} className={styles.title}>
          {title}
        </Typography>
        <ul className={styles.grid} data-grid-columns={settings.gridColumns}>
          {items.map(
            ({ _id, title, subTitle, icon = defaultItemIcon }, index) => (
              <li key={_id || index} className={styles.card}>
                <div className={styles.cardIconWrapper}>
                  <img alt="" src={icon} />
                </div>
                <Typography
                  className={styles.cardTitle}
                  {...settings.card.title}
                >
                  {title}
                </Typography>
                <Typography
                  className={styles.cardSubTitle}
                  {...settings.card.subTitle}
                >
                  {subTitle}
                </Typography>
              </li>
            )
          )}
        </ul>
      </ContentContainer>
    </Section>
  );
};
