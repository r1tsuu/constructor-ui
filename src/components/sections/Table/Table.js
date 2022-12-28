import React, { useState, useRef } from "react";
import {
  ContentContainer,
  Section,
  Typography,
  Arrow,
  Button,
  Modal,
} from "../../shared";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperNavigation } from "../../../hooks/useSwiperNavigation";
import clsx from "clsx";
import { ColorsInjector } from "../../../containers";
import { useDraggable } from "react-use-draggable-scroll";

import styles from "./Table.module.scss";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { mediaQueries } from "../../../utils/constants";

const Pagination = ({
  currentIndex,
  maxIndex,
  onButtonClick,
  className,
  settings,
}) => {
  return (
    <div
      data-selector="pagination"
      className={clsx(styles.pagination, className)}
    >
      {Array(maxIndex)
        .fill("_")
        .map((_, index) => (
          <ColorsInjector
            key={index}
            background={
              index === currentIndex
                ? settings.paginationActiveBg
                : settings.paginationBg
            }
          >
            <button
              data-selector="pagination-button"
              className={styles.paginationButton}
              data-is-active={index === currentIndex}
              onClick={onButtonClick.bind(null, index)}
            />
          </ColorsInjector>
        ))}
    </div>
  );
};

const Tab = ({
  settings,
  items,
  table,
  isMinTablet,
  isMinLaptop,
  buttonName,
  buttonLinkCall,
  buttonLink,
  buttonCallName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(items.length === 1 ? -1 : 0);
  const ref = useRef();
  const { events } = useDraggable(ref);
  const { goTo, arrowProps, swiperProps } = useSwiperNavigation({
    type: settings.cardsArrowType,
  });
  const handleRealIndexChange = (swiper) => setCurrentIndex(swiper.realIndex);

  const handlePaginationButtonClick = (index) => goTo(index);

  return (
    <ColorsInjector
      background={settings.contentBackground}
      borderColor={settings.contentBorderColor}
    >
      <div
        data-selector="content-wrapper"
        style={{
          borderRadius: settings.contentBorderRadius,
        }}
        className={styles["content-wrapper"]}
      >
        {currentIndex !== -1 ? (
          <div
            data-selector="slider-wrapper"
            className={styles["slider-wrapper"]}
          >
            <Swiper
              onRealIndexChange={handleRealIndexChange}
              rewind
              slidesPerView={"auto"}
              {...swiperProps}
            >
              {items.map(
                ({ photoSource: source, photoSourceMobile }, index) => (
                  <SwiperSlide key={index}>
                    <img
                      data-selector="slide-image"
                      className={styles.slideImg}
                      style={{ width: "100%" }}
                      src={isMinTablet ? source : photoSourceMobile}
                      alt=""
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
            {items.length > 1 && (
              <Pagination
                settings={settings}
                className={styles.cardPhotosPagination}
                currentIndex={currentIndex}
                maxIndex={items.length}
                onButtonClick={handlePaginationButtonClick}
              />
            )}
            {isMinLaptop && items.length > 1 && (
              <div data-selector="slide-arrows" className={styles.slideArrows}>
                <Arrow {...arrowProps.prev} />
                <Arrow {...arrowProps.next} />
              </div>
            )}
          </div>
        ) : (
          <div
            data-selector="slider-wrapper"
            className={styles["slider-wrapper"]}
          >
            <img
              className={styles.slideImg}
              style={{ width: "100%" }}
              src={
                isMinTablet ? items[0].photoSource : items[0].photoSourceMobile
              }
              alt=""
            />
          </div>
        )}
        <div
          data-selector="table=wrapper"
          className={styles["table-wrapper"]}
          ref={ref}
          {...events}
        >
          <table className={styles["table"]}>
            <thead className={styles["table-head"]}>
              <ColorsInjector
                background={settings.tableHeadBackground}
                borderColor={settings.tableBorderColor}
              >
                <tr className={styles["table-title-row"]}>
                  {table.head.map((item, index) => (
                    <ColorsInjector borderColor={settings.tableBorderColor}>
                      <th className={styles["table-title"]} key={index}>
                        <Typography as={"p"} {...settings.tableTitle}>
                          {item}
                        </Typography>
                      </th>
                    </ColorsInjector>
                  ))}
                </tr>
              </ColorsInjector>
            </thead>

            <tbody className={styles["table-body"]}>
              {table.body.map((item, index) => (
                <ColorsInjector
                  key={index}
                  borderColor={
                    index === currentIndex
                      ? settings.activeTableBorderColor
                      : settings.tableBorderColor
                  }
                >
                  <tr
                    className={styles["table-body-row"]}
                    onClick={() => currentIndex !== -1 && goTo(index)}
                    key={index}
                  >
                    {item.map((item, indexChild) => (
                      <ColorsInjector
                        key={indexChild}
                        borderColor={
                          index === currentIndex
                            ? settings.activeTableBorderColor
                            : settings.tableBorderColor
                        }
                      >
                        <td className={styles["table-body-title"]}>
                          <Typography
                            as={"p"}
                            {...settings.tableBodyTitle}
                            color={
                              index === currentIndex
                                ? settings.activeTableRowColorTitle
                                : settings.tableBodyTitle.color
                            }
                          >
                            {item}
                          </Typography>
                        </td>
                      </ColorsInjector>
                    ))}
                  </tr>
                </ColorsInjector>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles["button-wrapper"]}>
          <Button
            data-selector="button-link"
            href={buttonLink}
            type={settings.linkButtonType}
          >
            {buttonName}
          </Button>
          <Button
            data-selector="button-call"
            href={buttonLinkCall}
            type={settings.callButtonType}
          >
            {buttonCallName}
          </Button>
        </div>
      </div>
    </ColorsInjector>
  );
};

export const Table = ({
  title,
  settings,
  tabs,
  buttonLink,
  buttonLinkCall,
  buttonCallName,
  buttonName,
  subTitle,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const isMinTablet = useMediaQuery(mediaQueries.minTablet);
  const isMinLaptop = useMediaQuery(mediaQueries.minLaptop);

  return (
    <Section {...settings.section}>
      <ContentContainer className={styles.container}>
        {subTitle && (
          <Typography
            data-selector="subTitle"
            as={"h3"}
            {...settings.subTitle}
            className={styles.subTitle}
          >
            {subTitle}
          </Typography>
        )}
        <Typography
          data-selector="title"
          as={"h2"}
          className={styles.title}
          {...settings.title}
        >
          {title}
        </Typography>
        <div data-selector="tabs-wrapper" className={styles["tabs-wrapper"]}>
          {tabs.map(({ title }, index) => (
            <div data-selector="tab" key={index} className={styles.tab}>
              <Typography
                data-selector="tab-title"
                className={styles["tab-item"]}
                key={index}
                onClick={setActiveTab.bind(null, index)}
                {...settings.tabTitle}
              >
                {title}
              </Typography>
              <ColorsInjector background={settings.tabProgressColorActive}>
                <div
                  data-selector="tab-progress"
                  className={styles.tabProgress}
                  data-is-active={index === activeTab}
                />
              </ColorsInjector>
            </div>
          ))}
          <ColorsInjector background={settings.tabProgressColor}>
            <div
              data-selector="tabs-progress"
              className={styles.tabsListProgressFull}
            />
          </ColorsInjector>
        </div>
        {tabs.map(
          ({ table, items }, index) =>
            activeTab === index && (
              <Tab
                isMinTablet={isMinTablet}
                buttonLink={buttonLink}
                buttonLinkCall={buttonLinkCall}
                buttonCallName={buttonCallName}
                buttonName={buttonName}
                isMinLaptop={isMinLaptop}
                settings={settings}
                table={table}
                items={items}
                key={index}
              />
            )
        )}
      </ContentContainer>
    </Section>
  );
};
