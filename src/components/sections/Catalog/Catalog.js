import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as Tabs from "@radix-ui/react-tabs";
import {
  Arrow,
  Button,
  ContentContainer,
  Modal,
  Section,
  Typography,
} from "../../shared";

import styles from "./Catalog.module.scss";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { mediaQueries } from "../../../utils/constants";
import { useSwiperNavigation } from "../../../hooks/useSwiperNavigation";
import clsx from "clsx";
import { useTranslation } from "../../../contexts/LanguageContext";
import { ColorsInjector } from "../../../containers";

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
              data-selector="pagination-item"
              className={styles.paginationButton}
              data-is-active={index === currentIndex}
              onClick={onButtonClick.bind(null, index)}
            />
          </ColorsInjector>
        ))}
    </div>
  );
};

const CardModalContent = ({
  title,
  price,
  buttonLink,
  photos,
  tabsPopup,
  staticTexts,
  settings,
  onIndexChange,
  defaultIndex,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const { goTo, arrowProps, swiperProps } = useSwiperNavigation({
    type: settings.cardsArrowType,
  });

  const handleTabChange = (index) => setActiveTab(index);

  const handleRealIndexChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
    onIndexChange(swiper.realIndex);
  };

  const handlePaginationButtonClick = (index) => goTo(index);

  return (
    <div data-selector="popup-grid" className={styles.cardPopupGrid}>
      <div
        data-selector="popup-wrapper"
        className={styles.cardPopupSliderWrapper}
      >
        <Swiper
          rewind
          slidesPerView={"auto"}
          initialSlide={defaultIndex}
          onRealIndexChange={handleRealIndexChange}
          {...swiperProps}
        >
          {photos.map((source, index) => (
            <SwiperSlide
              style={{
                display: "flex",
                alignItems: "center",
              }}
              key={index}
            >
              <img alt="" style={{ width: "100%" }} src={source} />
            </SwiperSlide>
          ))}
        </Swiper>
        {photos.length > 1 && (
          <Pagination
            settings={settings}
            className={styles.cardPhotosPagination}
            currentIndex={currentIndex}
            maxIndex={photos.length}
            onButtonClick={handlePaginationButtonClick}
          />
        )}
        {photos.length > 1 && (
          <div
            data-selector="arrows-wrapper"
            className={styles.cardPhotosArrows}
          >
            <Arrow {...arrowProps.prev} />
            <Arrow {...arrowProps.next} />
          </div>
        )}
      </div>
      <div data-selector="content" className={styles.cardPopupContent}>
        <div
          data-selector="title-button-wrapper"
          className={styles.cardPopupTitleButton}
        >
          <Typography
            data-selector="title"
            style={{
              width: "100%",
            }}
            as={"h3"}
            {...settings.cardPopupTitle}
          >
            {title}
          </Typography>
          <button
            data-selector="close-button"
            onClick={onClose}
            className={styles.popupCloseButton}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L11 10.8209M1 11L11 1.17907"
                stroke="#FCFCFC"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
        <Tabs.Root value={activeTab} onValueChange={handleTabChange}>
          <Tabs.List className={styles.cardPopupTabsList}>
            {tabsPopup.map(({ title }, index) => (
              <Tabs.Trigger
                className={styles.cardPopupTab}
                key={index}
                value={index}
              >
                <Typography
                  data-selector="tab-title"
                  data-is-active={index === activeTab}
                  {...settings.cardPopupTabTitle}
                  as={"h4"}
                  color={
                    index === activeTab
                      ? settings.tabActiveColor
                      : settings.cardPopupTabTitle.color
                  }
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
              </Tabs.Trigger>
            ))}
            <ColorsInjector background={settings.tabProgressColor}>
              <div
                data-selector="tab-full"
                className={styles.tabsListProgressFull}
              />
            </ColorsInjector>
          </Tabs.List>
          {tabsPopup.map(({ description }, index) => (
            <Tabs.Content value={index} key={index}>
              <Typography
                data-selector="description"
                className={styles.cardPopupDescription}
                {...settings.cardPopupDescription}
                as={"p"}
              >
                {description}
              </Typography>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
      <div
        data-selector="price-button-wrapper"
        className={styles.cardPopupPriceAndBtn}
      >
        <Typography
          data-selector="price"
          as={"h3"}
          {...settings.cardPopupPrice}
        >
          {price}
        </Typography>
        <Button
          href={buttonLink}
          type={settings.cardPopupLinkButtoType}
          label={staticTexts.linkBtn}
        />
      </div>
    </div>
  );
};

const Card = ({
  title,
  description,
  price,
  photos,
  tabsPopup,
  settings,
  staticTexts,
  isMinDesktop,
  buttonLink,
}) => {
  const [isPopupOpened, setPopupOpened] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { goTo, arrowProps, swiperProps } = useSwiperNavigation({
    type: settings.cardsArrowType,
  });

  const handleRealIndexChange = (swiper) => setCurrentIndex(swiper.realIndex);

  const handleOpenPopup = () => setPopupOpened(true);

  const handleClosePopup = () => setPopupOpened(false);

  const handlePaginationButtonClick = (index) => goTo(index);

  return (
    <ColorsInjector background={settings.cardBackground}>
      <div data-selector="card-content" className={styles.cardContent}>
        <div
          data-selector="card-photos-wrapper"
          className={styles.cardPhotosWrapper}
        >
          <Swiper
            rewind
            onRealIndexChange={handleRealIndexChange}
            {...swiperProps}
            className={styles.cardPhotosSwiper}
          >
            {photos.map((source, index) => (
              <SwiperSlide
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "100%" }} src={source} key={index} />
              </SwiperSlide>
            ))}
          </Swiper>
          {photos.length > 1 && (
            <Pagination
              className={styles.cardPhotosPagination}
              currentIndex={currentIndex}
              maxIndex={photos.length}
              onButtonClick={handlePaginationButtonClick}
              settings={settings}
            />
          )}
          {isMinDesktop && photos.length > 1 && (
            <div
              data-selector="card-photos-arrows"
              className={styles.cardPhotosArrows}
            >
              <Arrow {...arrowProps.prev} />
              <Arrow {...arrowProps.next} />
            </div>
          )}
        </div>
        <ColorsInjector borderColor={settings.cardBorderColor}>
          <div data-selector="card-top" className={styles.cardTop}>
            <Typography
              data-selector="card-title"
              as={"h4"}
              className={styles.cardTitle}
              {...settings.cardTitle}
            >
              {title}
            </Typography>
            <Typography
              as={"p"}
              className={styles.cardDescription}
              data-selector="card-description"
              {...settings.cardDescription}
            >
              {description}
            </Typography>
            <Typography
              className={styles.cardPrice}
              {...settings.cardPrice}
              as={"h5"}
              data-selector="card-price"
            >
              {price}
            </Typography>
          </div>
        </ColorsInjector>
        <div className={styles.cardBot}>
          <Button
            data-selector="button-popup"
            onClick={handleOpenPopup}
            label={staticTexts.popupBtn}
            type={settings.cardPopupButtonType}
          />
          <Button
            data-selector="button-link"
            href={buttonLink}
            type={settings.cardLinkButtonType}
          >
            {staticTexts.linkBtn}
          </Button>
        </div>

        <Modal
          overlayTheme={settings.section.theme}
          isOpen={isPopupOpened}
          onClose={handleClosePopup}
          backgroundOpacity={1}
          backgroundColor={settings.cardPopupBackgroundColor}
        >
          <CardModalContent
            buttonLink={buttonLink}
            onClose={handleClosePopup}
            title={title}
            settings={settings}
            staticTexts={staticTexts}
            description={description}
            price={price}
            photos={photos}
            defaultIndex={currentIndex}
            onIndexChange={handlePaginationButtonClick}
            tabsPopup={tabsPopup}
          />
        </Modal>
      </div>
    </ColorsInjector>
  );
};

const CatalogTabItem = ({ settings, tabItems, staticTexts, buttonLink }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { goTo, arrowProps, swiperProps } = useSwiperNavigation({
    type: settings.cardsArrowType,
  });

  const isMinLaptop = useMediaQuery(mediaQueries.minLaptop);
  const isMinDesktop = useMediaQuery(mediaQueries.minDesktop);

  const handleRealIndexChange = (swiper) => setCurrentIndex(swiper.realIndex);
  const handlePaginationButtonClick = (index) => goTo(index);

  return (
    <div data-selector="tab-content" className={styles.tabContent}>
      <Swiper
        rewind
        slidesPerView={"auto"}
        spaceBetween={20}
        {...swiperProps}
        onRealIndexChange={handleRealIndexChange}
        className={styles.tabContentSwiper}
      >
        {tabItems.map((card, index) => (
          <SwiperSlide className={styles.card} key={card._id ?? index}>
            <Card
              buttonLink={buttonLink}
              isMinDesktop={isMinDesktop}
              staticTexts={staticTexts}
              settings={settings}
              {...card}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isMinLaptop && (
        <div
          data-selector="tab-content-arrows"
          className={styles.tabContentArrows}
        >
          <Arrow {...arrowProps.prev} />
          <Arrow {...arrowProps.next} />
        </div>
      )}
      {!isMinLaptop && (
        <Pagination
          settings={settings}
          className={styles.tabContentPagination}
          currentIndex={currentIndex}
          maxIndex={tabItems.length}
          onButtonClick={handlePaginationButtonClick}
        />
      )}
    </div>
  );
};

export const Catalog = ({
  title,
  list,
  settings,
  staticTexts = {},
  buttonLink,
}) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabIndexChange = (index) => setTabIndex(index);

  return (
    <Section {...settings.section}>
      <ContentContainer>
        <Typography
          data-selector="title"
          {...settings.title}
          as={"h2"}
          className={styles.title}
        >
          {title}
        </Typography>
        <Tabs.Root value={tabIndex} onValueChange={handleTabIndexChange}>
          <Tabs.List className={styles.tabsList}>
            {list.map(({ title, _id }, index) => (
              <Tabs.Trigger
                key={_id ?? index}
                className={styles.tab}
                value={index}
              >
                <Typography
                  as={"p"}
                  data-selector="tab"
                  data-is-active={index === tabIndex}
                  {...settings.tab}
                  color={
                    index === tabIndex
                      ? settings.tabActiveColor
                      : settings.tab.color
                  }
                >
                  {title}
                </Typography>
                <ColorsInjector background={settings.tabProgressColorActive}>
                  <div
                    data-selector="tabs-progress"
                    className={styles.tabProgress}
                    data-is-active={index === tabIndex}
                  />
                </ColorsInjector>
              </Tabs.Trigger>
            ))}
            <ColorsInjector background={settings.tabProgressColor}>
              <div className={styles.tabsListProgressFull} />
            </ColorsInjector>
          </Tabs.List>
          {list.map(({ tabItems, _id }, index) => (
            <Tabs.Content value={index} key={_id ?? index}>
              <CatalogTabItem
                buttonLink={buttonLink}
                staticTexts={staticTexts}
                settings={settings}
                tabItems={tabItems}
              />
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </ContentContainer>
    </Section>
  );
};

export const CatalogTranslationsContainer = ({
  staticTexts = {},
  ...props
}) => {
  const t = useTranslation();

  return (
    <Catalog
      {...props}
      staticTexts={{
        popupBtn: staticTexts.popupBtn || t("CATALOG_DETAILS"),
        linkBtn: staticTexts.linkBtn || t("CATALOG_CALLBACK"),
      }}
    />
  );
};
