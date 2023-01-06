import React from "react";
import { ColorsInjector } from "../../../containers";
import { Arrow, ContentContainer, Typography } from "../../shared";
import { PublicationCard } from "../PublicationCard";
import ReactPaginate from "react-paginate";

import styles from "./BlogAllPage.module.scss";

export const BlogAllPage = ({
  title,
  settings,
  list,
  onCategoryChange = () => {},
  categories,
  pageCount,
  onPageChange = () => {},
  onPageNext = () => {},
  onPagePrev = () => {},
  page,
}) => {
  return (
    <ColorsInjector background={settings.backgroundColor}>
      <main className={styles.pageMain} data-theme={settings.theme}>
        <ContentContainer>
          <Typography
            data-selector="title"
            className={styles.title}
            {...settings.title}
            as={"h1"}
          >
            {title}
          </Typography>
          <div className={styles.categories}>
            {categories.map(({ title, isActive, ...rest }, index) => {
              const handleClick = () =>
                onCategoryChange({
                  title,
                  isActive,
                  ...rest,
                });

              return (
                <div
                  data-selector="tab"
                  onClick={handleClick}
                  key={index}
                  className={styles.tab}
                >
                  <Typography
                    data-selector="tab-title"
                    color={
                      isActive
                        ? settings.categoryActiveColor
                        : settings.category.color
                    }
                    type={settings.category.type}
                  >
                    {title}
                  </Typography>
                  <ColorsInjector background={settings.categoryActiveProgress}>
                    <div
                      data-selector="tab-progress"
                      className={styles.tabProgress}
                      data-is-active={isActive}
                    />
                  </ColorsInjector>
                </div>
              );
            })}
            <ColorsInjector background={settings.categoryProgress}>
              <div
                data-selector="tabs-progress"
                className={styles.tabsListProgressFull}
              />
            </ColorsInjector>
          </div>
          <div data-selector="list" data-grid={3} className={styles.grid}>
            {list.map((card, index) => (
              <PublicationCard
                {...card}
                key={index}
                settings={settings.card}
                gridColumns={3}
              />
            ))}
          </div>

          {pageCount !== 1 && (
            <div data-selector="paginate" className={styles.paginateWrapper}>
              <Arrow
                disabled={page === 0}
                onClick={onPagePrev}
                type={settings.paginationArrowType}
                isPrev
              />
              <ReactPaginate
                forcePage={page}
                onPageChange={onPageChange}
                className={styles.paginate}
                sele
                nextLabel=""
                previousLabel=""
                breakClassName={styles.page}
                previousClassName={styles.prev}
                nextClassName={styles.next}
                pageCount={pageCount}
                activeClassName={styles.active}
                pageClassName={styles.page}
                pageRangeDisplayed={4}
                marginPagesDisplayed={2}
              />
              <Arrow
                disabled={page === pageCount - 1}
                onClick={onPageNext}
                type={settings.paginationArrowType}
              />
            </div>
          )}
        </ContentContainer>
      </main>
    </ColorsInjector>
  );
};
