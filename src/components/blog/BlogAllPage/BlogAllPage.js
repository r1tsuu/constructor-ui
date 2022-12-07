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
  page,
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
          <div data-grid={3} className={styles.grid}>
            {list.map((card, index) => (
              <PublicationCard
                {...card}
                key={index}
                settings={settings.card}
                gridColumns={3}
              />
            ))}
          </div>

          <div className={styles.paginateWrapper}>
            <Arrow
              disabled={page === 0}
              onClick={() => onPageChange(page - 1)}
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
              onClick={() => onPageChange(page + 1)}
              type={settings.paginationArrowType}
            />
          </div>
        </ContentContainer>
      </main>
    </ColorsInjector>
  );
};
