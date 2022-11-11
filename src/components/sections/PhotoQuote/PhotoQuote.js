import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { mediaQueries } from "../../../utils/constants";

import { ContentContainer, Section, Typography } from "../../shared";

import styles from "./PhotoQuote.module.scss";
import { QuotesIcon } from "./QuotesIcon";

export const PhotoQuote = ({
  description,
  name,
  position,
  photoSource,
  photoSourceMobile,
  settings,
}) => {
  const isMobile = !useMediaQuery(mediaQueries.minTablet);

  return (
    <Section {...settings.section}>
      <ContentContainer className={styles.grid}>
        <div
          data-is-full-width={settings.fullPhotoWidth}
          className={styles.photoWrapper}
        >
          <img src={isMobile ? photoSourceMobile : photoSource} />
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.quoteStartWrapper}>
            <QuotesIcon />
          </div>
          <Typography
            className={styles.description}
            as={"p"}
            {...settings.description}
          >
            {description}
          </Typography>
          <div className={styles.quoteEndWrapper}>
            <QuotesIcon isEnd />
          </div>
          <div className={styles.bottom}>
            {name && (
              <Typography as={"h3"} {...settings.name}>
                {name}
              </Typography>
            )}
            {position && (
              <Typography as={"h4"} {...settings.position}>
                {position}
              </Typography>
            )}
          </div>
        </div>
      </ContentContainer>
    </Section>
  );
};

export default PhotoQuote;
