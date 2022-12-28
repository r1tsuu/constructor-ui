import clsx from "clsx";
import React from "react";

import ReactPlayer from "react-player";

import styles from "./ResponsiveVideoPlayer.module.scss";

export const ResponsiveVideoPlayer = ({
  src,
  previewPhotoSrc,

  ...props
}) => {
  return (
    <div data-component="video-player" className={styles.component} {...props}>
      <div className={styles.videoWrapper}>
        <ReactPlayer
          controls
          light={previewPhotoSrc}
          url={src}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};
