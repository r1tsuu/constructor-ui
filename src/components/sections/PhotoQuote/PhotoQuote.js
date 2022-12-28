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
          data-selector="photo-wrapper"
          data-is-full-width={settings.fullPhotoWidth}
          className={styles.photoWrapper}
        >
          <img src={isMobile ? photoSourceMobile : photoSource} />
        </div>
        <div data-selector="content" className={styles.sectionContent}>
          <div
            data-selector="quote-start-wrapper"
            className={styles.quoteStartWrapper}
          >
            <QuotesIcon />
          </div>
          <Typography
            data-selector="description"
            className={styles.description}
            as={"p"}
            {...settings.description}
          >
            {description}
          </Typography>
          <div
            data-selector="quote-end-wrapper"
            className={styles.quoteEndWrapper}
          >
            <QuotesIcon isEnd />
          </div>
          <div data-selector="buttom" className={styles.bottom}>
            {name && (
              <Typography data-selector="name" as={"h3"} {...settings.name}>
                {name}
              </Typography>
            )}
            {position && (
              <Typography
                data-selector="position"
                as={"h4"}
                {...settings.position}
              >
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
