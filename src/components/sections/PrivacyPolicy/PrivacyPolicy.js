import React from "react";
import { ContentContainer, Section, Typography } from "../../shared";

import styles from "./PrivacyPolicy.module.scss";

export const PrivacyPolicy = ({ title, text, settings }) => {
  return (
    <Section {...settings.section}>
      <ContentContainer className={styles.container}>
        <Typography as={"h1"} className={styles.title} {...settings.title}>
          {title}
        </Typography>
        <Typography {...settings.text}>{text}</Typography>
      </ContentContainer>
    </Section>
  );
};
