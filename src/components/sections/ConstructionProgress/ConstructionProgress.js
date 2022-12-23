import React from "react";
import { PublicationCard } from "../../blog/PublicationCard/PublicationCard";

import {
  Typography,
  Section,
  ContentContainer,
  Button,
  Card,
} from "../../shared";
import { useEnvironment } from "../../../contexts/EnvironmentContext";

import styles from "./ConstructionProgress.module.scss";
import { ColorsInjector } from "../../../containers";

export const ConstructionProgress = ({
  subTitle = null,
  title,
  settings,
  cardImg,
  cards,
  buttonLink,
  buttonName,
}) => {
  const { Link } = useEnvironment();
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
        <ColorsInjector
          background={settings.contentBackground}
          borderColor={settings.contentBorderColor}
        >
          <div
            className={styles["content-wrapper"]}
            style={{
              borderRadius: settings.contentBorderRadius,
            }}
          >
            <PublicationCard settings={settings.card} {...cardImg} />
            <div className={styles["cards-wrapper"]}>
              {cards.map(({ title, buttonLink, buttonName }) => (
                <div className={styles["card"]}>
                  <Typography {...settings.card.title}>{title}</Typography>
                  {Link ? (
                    <Link href={buttonLink}>
                      <a className={styles["card-link"]}>
                        <Typography {...settings.card.link}>
                          {buttonName}
                        </Typography>
                        <ColorsInjector
                          background={settings.borderBottomLinkColor}
                        >
                          <div className={styles.tabProgress} />
                        </ColorsInjector>
                      </a>
                    </Link>
                  ) : (
                    <a className={styles["card-link"]}>
                      <Typography {...settings.card.link}>
                        {buttonName}
                      </Typography>
                      <ColorsInjector
                        background={settings.borderBottomLinkColor}
                      >
                        <div className={styles.tabProgress} />
                      </ColorsInjector>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ColorsInjector>
        <div className={styles["button-wrapper"]}>
          <Button href={buttonLink} type={settings.linkButtonType}>
            {buttonName}
          </Button>
        </div>
      </ContentContainer>
    </Section>
  );
};
