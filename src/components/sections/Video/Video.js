import React from "react";

import useMediaQuery from "../../../hooks/useMediaQuery";
import { mediaQueries } from "../../../utils/constants";
import {
  ContentContainer,
  Section,
  ResponsiveVideoPlayer,
  Typography,
} from "../../shared";

import styles from "./Video.module.scss";

export const Video = ({
  title,
  previewPhotoSource,
  videoSource,
  videoSourceMobile,
  settings,
}) => {
  const isMobile = !useMediaQuery(mediaQueries.minTablet);

  return (
    <Section {...settings.section}>
      <ContentContainer>
        <Typography
          data-selector="title"
          className={styles.title}
          {...settings.title}
          as={"h2"}
        >
          {title}
        </Typography>
        <ResponsiveVideoPlayer
          previewPhotoSrc={previewPhotoSource}
          src={isMobile ? videoSourceMobile : videoSource}
        />
      </ContentContainer>
    </Section>
  );
};

export default Video;
