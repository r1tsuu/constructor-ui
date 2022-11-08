import React from "react";

import {
  Typography,
  Section,
  ContentContainer,
  Button,
  Card,
} from "../../shared";
import { useMobilePaginationButton } from "../../../hooks/useMobilePaginationButton";

import styles from "./Documentation.module.scss";

export const Documentation = ({
  subTitle = null,
  title,
  paginationButtonName,
  items,
  settings,
}) => {
  const { showButton, currentItems, buttonProps } = useMobilePaginationButton({
    items,
    type: settings.paginationButtonType,
  });
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
        <div className={styles.grid} data-grid-columns={settings.gridColumns}>
          {currentItems.map(
            ({ _id, icon, title, fileSize, fileLink }, index) => (
              <Card
                key={_id || index}
                as={"a"}
                href={fileLink}
                download
                target={"_blank"}
                {...settings.card.props}
                className={styles.card}
              >
                <div className={styles.cardIcon}>
                  <img alt="" src={icon} />
                </div>
                <Typography
                  className={styles.cardTitle}
                  {...settings.card.title}
                >
                  {title}
                </Typography>
                <Typography
                  className={styles.cardFileSize}
                  {...settings.card.fileSize}
                >
                  {fileSize}
                </Typography>
              </Card>
            )
          )}
        </div>
        {showButton && (
          <div className={styles.mobilePaginationButtonWrapper}>
            <Button {...buttonProps} label={paginationButtonName} />
          </div>
        )}
      </ContentContainer>
    </Section>
  );
};
