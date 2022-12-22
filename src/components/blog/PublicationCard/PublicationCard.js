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
    <div className={styles.card}>
      <div
        style={{
          backgroundColor: categoryBackgroundColor,
          color: categoryColor,
          borderColor: categoryBorderColor,
        }}
        className={styles.category}
      >
        {categoryTitle}
      </div>
      <div>
        <img
          className={styles.image}
          data-grid={gridColumns}
          src={photoSource}
          alt=""
        />
      </div>
      <ColorsInjector borderColor={settings.borderColor}>
        <div className={styles.cardBot}>
          <Typography {...settings.date}>{date}</Typography>
          <Typography {...settings.title}>{title}</Typography>
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
