import React from "react";
import { useEffect, useState } from "react";
import { ColorsInjector } from "../../../containers";
import { useEnvironment } from "../../../contexts/EnvironmentContext";
import { Typography } from "../../shared";

import styles from "./PublicationCard.module.scss";

export const PublicationCard = ({
  settings,
  createdAt,
  title,
  gridColumns,
  categoryTitle,
  categoryColor,
  categoryBackgroundColor,
  categoryBorderColor,
  photoSource,

  url,
}) => {
  const [date, setDate] = useState();
  const { Link } = useEnvironment();
  useEffect(() => setDate(new Date(createdAt).toLocaleDateString()));

  const el = (
    <div data-component="publication-card" className={styles.card}>
      <div
        data-selector="category-card"
        style={{
          backgroundColor: categoryBackgroundColor,
          color: categoryColor,
          borderColor: categoryBorderColor,
        }}
        className={styles.category}
      >
        {categoryTitle}
      </div>
      <div data-selector="image-wrapper">
        <img
          className={styles.image}
          data-grid={gridColumns}
          src={photoSource}
          alt=""
        />
      </div>
      <ColorsInjector
        borderColor={settings.borderColor}
        background={settings.botBackground}
      >
        <div data-selector="bot" className={styles.cardBot}>
          <Typography data-selector="date" {...settings.date}>
            {date}
          </Typography>
          <Typography
            data-selector="title"
            className={styles.title}
            {...settings.title}
          >
            {title}
          </Typography>
        </div>
      </ColorsInjector>
    </div>
  );

  if (Link)
    return (
      <Link href={url}>
        <a>{el}</a>
      </Link>
    );

  return el;
};
