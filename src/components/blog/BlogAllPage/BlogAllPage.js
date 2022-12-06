import React from "react";
import { ColorsInjector } from "../../../containers";
import { ContentContainer, Typography } from "../../shared";
import { PublicationCard } from "../PublicationCard";

import styles from "./BlogAllPage.module.scss";

export const BlogAllPage = ({
  title,
  settings,
  list,
  onCategoryChange = () => {},
  categories,
}) => {
  return (
    <ColorsInjector background={settings.backgroundColor}>
      <main className={styles.page} data-theme={settings.theme}>
        <ContentContainer>
          <Typography className={styles.title} {...settings.title} as={"h1"}>
            {title}
          </Typography>
          <div className={styles.categories}>
            {categories.map(({ title, isActive, ...rest }, index) => {
              const handleClick = onCategoryChange({
                title,
                isActive,
                ...rest,
              });

              return (
                <div onClick={handleClick} key={index} className={styles.tab}>
                  <Typography {...settings.category}>{title}</Typography>
                  <ColorsInjector background={settings.categoryActiveProgress}>
                    <div
                      className={styles.tabProgress}
                      data-is-active={isActive}
                    />
                  </ColorsInjector>
                </div>
              );
            })}
            <ColorsInjector background={settings.categoryProgress}>
              <div className={styles.tabsListProgressFull} />
            </ColorsInjector>
          </div>
          <div data-grid={settings.gridColumns} className={styles.grid}>
            {list.map((card, index) => (
              <PublicationCard
                {...card}
                key={index}
                settings={settings.card}
                gridColumns={settings.gridColumns}
              />
            ))}
          </div>
        </ContentContainer>
      </main>
    </ColorsInjector>
  );
};
