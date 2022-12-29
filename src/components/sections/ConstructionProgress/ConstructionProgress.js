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

        <ColorsInjector
          background={settings.contentBackground}
          borderColor={settings.contentBorderColor}
        >
          <div
            data-selector="content-wrapper"
            className={styles["content-wrapper"]}
            style={{
              borderRadius: settings.contentBorderRadius,
            }}
          >
            {cardImg && (
              <PublicationCard settings={settings.card} {...cardImg} />
            )}
            <div data-selector="list" className={styles["cards-wrapper"]}>
              {cards.map(({ title, buttonLink, buttonName }) => (
                <div data-selector="card" className={styles["card"]}>
                  <Typography {...settings.card.title}>{title}</Typography>
                  {Link ? (
                    <Link href={buttonLink}>
                      <a
                        data-selector="card-link"
                        className={styles["card-link"]}
                      >
                        <Typography
                          data-selector="card-link-button"
                          {...settings.card.link}
                        >
                          {buttonName}
                        </Typography>
                        <ColorsInjector
                          background={settings.borderBottomLinkColor}
                        >
                          <div
                            data-selector="tab-progress"
                            className={styles.tabProgress}
                          />
                        </ColorsInjector>
                      </a>
                    </Link>
                  ) : (
                    <a
                      data-selector="card-link"
                      className={styles["card-link"]}
                    >
                      <Typography
                        data-selector="card-link-button"
                        {...settings.card.link}
                      >
                        {buttonName}
                      </Typography>
                      <ColorsInjector
                        background={settings.borderBottomLinkColor}
                      >
                        <div
                          data-selector="tab-progress"
                          className={styles.tabProgress}
                        />
                      </ColorsInjector>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ColorsInjector>

        <div
          data-selector="button-wrapper"
          className={styles["button-wrapper"]}
        >
          <Button href={buttonLink} type={settings.linkButtonType}>
            {buttonName}
          </Button>
        </div>
      </ContentContainer>
    </Section>
  );
};
