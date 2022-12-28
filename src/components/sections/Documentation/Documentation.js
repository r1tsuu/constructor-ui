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
          <Typography
            data-selector="subtitle"
            {...settings.subTitle}
            className={styles.subTitle}
          >
            {subTitle}
          </Typography>
        )}
        <Typography
          data-selector="title"
          {...settings.title}
          className={styles.title}
        >
          {title}
        </Typography>
        <div
          data-selector="list"
          className={styles.grid}
          data-grid-columns={settings.gridColumns}
        >
          {currentItems.map(
            ({ _id, icon, title, fileSize, fileLink }, index) => (
              <Card
                key={_id || index}
                as={"a"}
                href={fileLink}
                target={"_blank"}
                {...settings.card.props}
                className={styles.card}
              >
                <div
                  data-selector="card-icon-wrapper"
                  className={styles.cardIcon}
                >
                  <img alt="" src={icon} />
                </div>
                <Typography
                  data-selector="card-title"
                  className={styles.cardTitle}
                  {...settings.card.title}
                >
                  {title}
                </Typography>
                <Typography
                  data-selector="card-file-size"
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
          <div
            data-selector="mobile-button-wrapper"
            className={styles.mobilePaginationButtonWrapper}
          >
            <Button {...buttonProps} label={paginationButtonName} />
          </div>
        )}
      </ContentContainer>
    </Section>
  );
};
