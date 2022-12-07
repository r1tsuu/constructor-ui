import React from "react";
import { ContentContainer, Section, Typography } from "../../shared";

import styles from "./Table.module.scss";

export const Table = ({ title, settings }) => {
  return (
    <Section {...settings.section}>
      <ContentContainer className={styles.container}>
        <Typography as={"h2"} className={styles.title} {...settings.title}>
          {title}
        </Typography>
      </ContentContainer>
    </Section>
  );
};