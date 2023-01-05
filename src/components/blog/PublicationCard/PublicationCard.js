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
  dateText,
  url,
}) => {
  const { Link } = useEnvironment();

  const el = (
    <div data-component="publication-card" className={styles.card}>
      <div
        data-selector="category-card"
        style={{
          backgroundColor: categoryBackgroundColor,
          color: categoryColor,
          borderColor: categoryBorderColor,
          zIndex: 100,
        }}
        className={styles.category}
      >
        {categoryTitle}
      </div>
      <div style={{ overflow: "hidden" }} data-selector="image-wrapper">
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
            {dateText}
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
