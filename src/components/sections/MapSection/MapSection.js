import React, { useRef, useState } from "react";
import { Section, Typography } from "../../shared";
import GoogleMapReact from "google-map-react";
import * as Tooltip from "@radix-ui/react-tooltip";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { mediaQueries } from "../../../utils/constants";
import styles from "./MapSection.module.scss";
import { ColorsInjector } from "../../../containers";
import { useClickOutside } from "../../../hooks/useClickOutside";

import iconShow from "./icon_show.svg";
import iconHide from "./icon_hide.svg";

const GOOGLE_API_KEY = "AIzaSyD01Sevf9MJqWV2QZOZt91yxKg5-SOOwoo";

const getRouteURL = (placeID) =>
  `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${placeID}`;

const IconArrow = ({ stroke, isDOWN }) => (
  <ColorsInjector stroke={stroke}>
    <svg
      data-selector="icon-arrow"
      width="11"
      height="11"
      style={{
        transform: isDOWN ? "rotate(180deg)" : "",
        transition: "transform 0.25s",
      }}
      viewBox="0 0 11 11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 11V1M5.5 1L1 4.88889M5.5 1L10 4.88889"
        strokeLinejoin="round"
      />
    </svg>
  </ColorsInjector>
);

const IconRoute = ({ fill }) => (
  <ColorsInjector fill={fill}>
    <svg
      data-selector="icon-route"
      width="20"
      height="18"
      viewBox="0 0 20 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.22196 0.5C4.7571 0.5 3.55531 1.6786 3.55531 3.11519C3.55531 4.55177 4.7571 5.73038 6.22196 5.73038C7.45645 5.73038 8.49956 4.89183 8.79841 3.76904H16.3334C17.6375 3.76904 18.6666 4.77831 18.6666 6.05724C18.6666 7.33633 17.6375 8.34561 16.3334 8.34561H3.66662C1.64684 8.34561 0 9.96067 0 11.9416C0 13.9224 1.64684 15.5375 3.66662 15.5375H7.94443L7.08335 16.3819C6.9147 16.5475 6.84882 16.7886 6.91051 17.0147C6.97221 17.2406 7.15233 17.4172 7.38266 17.4777C7.61316 17.5382 7.85901 17.4736 8.02783 17.3082L10.0278 15.3469C10.1533 15.2242 10.2239 15.0574 10.2239 14.8837C10.2239 14.7099 10.1533 14.5433 10.0278 14.4206L8.02783 12.4591C7.90196 12.3325 7.72897 12.2612 7.54869 12.2617C7.37043 12.2612 7.1993 12.3308 7.07373 12.455C6.94817 12.5791 6.87857 12.7474 6.88028 12.9222C6.88214 13.097 6.9553 13.2638 7.08334 13.3854L7.94442 14.2298H3.66661C2.36251 14.2298 1.33337 13.2206 1.33337 11.9416C1.33337 10.6625 2.36251 9.65326 3.66661 9.65326H16.3334C18.3532 9.65326 20 8.03821 20 6.05725C20 4.07645 18.3532 2.46139 16.3334 2.46139H8.7984C8.49954 1.33843 7.45649 0.5 6.22196 0.5ZM6.22196 1.80754C6.96617 1.80754 7.55522 2.38522 7.55522 3.11523C7.55522 3.84508 6.96617 4.42276 6.22196 4.42276C5.47759 4.42276 4.88853 3.84508 4.88853 3.11523C4.88853 2.38522 5.47759 1.80754 6.22196 1.80754ZM13.7776 12.2685C12.3127 12.2685 11.1109 13.4471 11.1109 14.8836C11.1109 16.3202 12.3127 17.4988 13.7776 17.4988C15.2424 17.4988 16.4442 16.3202 16.4442 14.8836C16.4442 13.4471 15.2424 12.2685 13.7776 12.2685ZM13.7776 13.5761C14.5219 13.5761 15.111 14.1538 15.111 14.8837C15.111 15.6137 14.5219 16.1914 13.7776 16.1914C13.0334 16.1914 12.4443 15.6137 12.4443 14.8837C12.4443 14.1538 13.0334 13.5761 13.7776 13.5761Z" />
    </svg>
  </ColorsInjector>
);

const ButtonRoute = ({ settings, main, isMinTablet, routeLabel }) => (
  <ColorsInjector
    background={settings.buttonRouteBg}
    textColor={settings.buttonRouteText}
    borderColor={settings.buttonRouteBorderColor}
  >
    <a
      data-selector="button-route"
      href={getRouteURL(main.placeID)}
      target={"_blank"}
      style={{
        borderRadius: settings.buttonRouteBorderRadius,
      }}
      className={styles.buttonRoute}
    >
      <IconRoute fill={settings.buttonRouteText} />
      {isMinTablet && <span>{routeLabel}</span>}
    </a>
  </ColorsInjector>
);

const ButtonCategories = ({ isOpened, onClick, settings, label }) => {
  return (
    <ColorsInjector
      background={settings.buttonCategoriesBg}
      textColor={settings.buttonCategoriesText}
      borderColor={settings.buttonRouteBorderColor}
    >
      <button
        data-selector="button-categories"
        className={styles.buttonCategories}
        onClick={onClick}
        style={{
          borderRadius: settings.buttonCategoriesBorderRadius,
        }}
      >
        <span>{label}</span>
        <IconArrow isDOWN={isOpened} stroke={settings.buttonCategoriesText} />
      </button>
    </ColorsInjector>
  );
};

const CustomMarker = ({ title, placeID, settings, routeLabel, icon }) => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div
            data-selector="tooltip-marker-location-icon-wrapper"
            className={styles.locationIcon}
          >
            <img src={icon} alt="" />
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal data-selector="tooltip-marker">
          <ColorsInjector background={settings.toolTipBackground}>
            <Tooltip.Content
              style={{ marginBottom: "15px" }}
              data-theme={settings.section.theme}
              className={styles.tooltipContent}
            >
              <Typography
                data-selector="tooltip-marker-title"
                {...settings.toolTipTitle}
              >
                {title}
              </Typography>
              <ColorsInjector textColor={settings.toolTipRouteColor}>
                <a
                  data-selector="tooltip-marker-route"
                  href={getRouteURL(placeID)}
                  target={"_blank"}
                  className={styles.toolTipRoute}
                >
                  {routeLabel}
                </a>
              </ColorsInjector>
            </Tooltip.Content>
          </ColorsInjector>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

const Map = ({ list, settings, routeLabel, main }) => {
  const markersList = list
    .flatMap(({ list }) => list)
    .filter(({ placeID, location }) => placeID && location);

  return (
    <GoogleMapReact
      defaultCenter={main.location}
      bootstrapURLKeys={{
        key: GOOGLE_API_KEY,
      }}
      zoom={settings.mapZoom}
      options={{
        disableDefaultUI: true,
        zoomControl: false,
        styles: [
          {
            featureType: "administrative",
            elementType: "all",
            stylers: [
              {
                visibility: "on",
              },
              {
                saturation: -100,
              },
              {
                lightness: 20,
              },
            ],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [
              {
                visibility: "on",
              },
              {
                saturation: -100,
              },
              {
                lightness: 40,
              },
            ],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                visibility: "on",
              },
              {
                saturation: -10,
              },
              {
                lightness: 30,
              },
            ],
          },
          {
            featureType: "landscape.man_made",
            elementType: "all",
            stylers: [
              {
                visibility: "simplified",
              },
              {
                saturation: -60,
              },
              {
                lightness: 10,
              },
            ],
          },
          {
            featureType: "landscape.natural",
            elementType: "all",
            stylers: [
              {
                visibility: "simplified",
              },
              {
                saturation: -60,
              },
              {
                lightness: 60,
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
              {
                saturation: -100,
              },
              {
                lightness: 60,
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
              {
                saturation: -100,
              },
              {
                lightness: 60,
              },
            ],
          },
        ],
      }}
    >
      <CustomMarker
        {...main.location}
        isMain
        settings={settings}
        placeID={main.placeID}
        icon={main.locationIcon}
        routeLabel={routeLabel}
        title={main.locationTitle}
      />

      {markersList.map(({ location, placeID, icon, title }, index) => (
        <CustomMarker
          settings={settings}
          placeID={placeID}
          title={title}
          {...location}
          icon={icon}
          routeLabel={routeLabel}
          key={index}
        />
      ))}
    </GoogleMapReact>
  );
};

const Categories = ({ list, value, onShow, onHide, settings, main }) => {
  const getIsActive = (index) => value.includes(index);

  const createHandler = (index) => () =>
    getIsActive(index) ? onHide(index) : onShow(index);

  return (
    <ColorsInjector background={settings.mapCategoriesBackground}>
      <div data-selector="categories" className={styles.categories}>
        <ColorsInjector borderColor={settings.mapCategoriesBorder}>
          <div data-selector="category" className={styles.category}>
            <div data-selector="category-left" className={styles.categoryLeft}>
              <img
                data-selector="category-icon"
                src={main.categoryIcon}
                alt=""
              />
              <Typography
                data-selector="category-text"
                {...settings.categoryText}
              >
                {main.categoryTitle}
              </Typography>
            </div>
          </div>
        </ColorsInjector>
        {list.map(({ title, icon }, index) => (
          <ColorsInjector borderColor={settings.mapCategoriesBorder}>
            <div
              data-selector="category"
              className={styles.category}
              key={index}
            >
              <div
                data-selector="category-left"
                className={styles.categoryLeft}
              >
                <img data-selector="category-icon" src={icon} alt="" />
                <Typography
                  data-selector="category-text"
                  {...settings.categoryText}
                >
                  {title}
                </Typography>
              </div>
              <div
                data-selector="toggle-button"
                data-is-active={getIsActive(index)}
                onClick={createHandler(index)}
                style={{ cursor: "pointer" }}
              >
                <img src={getIsActive(index) ? iconHide : iconShow} alt="" />
              </div>
            </div>
          </ColorsInjector>
        ))}
      </div>
    </ColorsInjector>
  );
};

const CategoriesMobile = ({ list, value, onShow, onHide, settings, main }) => {
  return (
    <div
      data-selector="categories-mobile"
      className={styles.categoriesMobileContainer}
    >
      <Categories
        main={main}
        list={list}
        value={value}
        onShow={onShow}
        onHide={onHide}
        settings={settings}
      />
    </div>
  );
};

const CategoriesMobileContainer = ({
  list,
  value,
  onShow,
  onHide,
  settings,
  main,
  categoriesButtonLabel,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggle = () => {
    if (isOpened) setIsOpened(false);
    else setIsOpened(true);
  };

  const handleClose = () => setIsOpened(false);

  const ref = useRef();
  useClickOutside(ref, handleClose);

  return (
    <div
      data-selector="categories-mobile-container"
      ref={ref}
      className={styles.categoriesButtonMobileContainer}
    >
      <ButtonCategories
        isOpened={isOpened}
        onClick={handleToggle}
        label={categoriesButtonLabel}
        settings={settings}
      />
      {isOpened && (
        <CategoriesMobile
          main={main}
          list={list}
          value={value}
          onShow={onShow}
          onHide={onHide}
          settings={settings}
        />
      )}
    </div>
  );
};

const MapContainer = ({
  list,
  settings,
  routeLabel,
  main,
  categoriesButtonLabel,
}) => {
  const isMinTablet = useMediaQuery(mediaQueries.minTablet);
  const isMinLaptop = useMediaQuery(mediaQueries.minLaptop);
  const [activeCategories, setActiveCategories] = useState(
    list.map((_, index) => index)
  );

  const handleCategoryShow = (index) => {
    setActiveCategories([...activeCategories, index]);
  };

  const handleCategoryHide = (index) => {
    setActiveCategories(
      activeCategories.filter((eachIndex) => eachIndex !== index)
    );
  };

  const filteredList = list.filter((_, index) =>
    activeCategories.includes(index)
  );

  const renderBottom = () => {
    if (isMinLaptop)
      return (
        <>
          <div
            data-selector="categories-desktop-container"
            className={styles.categoriesDesktopContainer}
          >
            <Categories
              main={main}
              list={list}
              value={activeCategories}
              onShow={handleCategoryShow}
              onHide={handleCategoryHide}
              settings={settings}
            />
          </div>
          <div
            data-selector="route-button-desktop-container"
            className={styles.routeButtonDesktopContainer}
          >
            <ButtonRoute
              routeLabel={routeLabel}
              main={main}
              settings={settings}
              isMinTablet
            />
          </div>
        </>
      );

    return (
      <div
        data-selector="mobile-bot-container"
        className={styles.mobileDownContainer}
      >
        <CategoriesMobileContainer
          main={main}
          list={list}
          value={activeCategories}
          onShow={handleCategoryShow}
          onHide={handleCategoryHide}
          settings={settings}
          categoriesButtonLabel={categoriesButtonLabel}
        />
        <ButtonRoute
          routeLabel={routeLabel}
          main={main}
          settings={settings}
          isMinTablet={isMinTablet}
        />
      </div>
    );
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
      data-selector="map-wrapper"
    >
      {renderBottom()}
      <Map
        settings={settings}
        routeLabel={routeLabel}
        list={filteredList}
        main={main}
      />
    </div>
  );
};

const TabsList = ({
  activeTab,
  onChange,
  settings,
  firstLabel,
  secondLabel,
}) => {
  const handleFirstTabClick = () => {
    if (activeTab !== 1) onChange(1);
  };

  const handleSecondTabClick = () => {
    if (activeTab !== 2) onChange(2);
  };

  return (
    <div data-selector="tabs-container" className={styles.tabsContainer}>
      <ColorsInjector
        textColor={settings.swapBarTextColor}
        background={settings.swapBarBackgroundColor}
      >
        <div
          data-selector="tabs"
          className={styles.tabs}
          style={{
            borderRadius: settings.swapBarBorderRadius,
          }}
        >
          <ColorsInjector
            {...(activeTab === 1 && {
              background: settings.swapBarBackgroundColorActive,
              textColor: settings.swapBarTextColorActive,
            })}
          >
            <div
              {...(activeTab === 1 && {
                style: {
                  borderRadius: settings.swapBarActiveBorderRadius,
                },
              })}
              data-selector="tab"
              data-is-active={activeTab === 1}
              className={styles.tab}
              onClick={handleFirstTabClick}
            >
              <span>{firstLabel}</span>
            </div>
          </ColorsInjector>
          <ColorsInjector
            {...(activeTab === 2 && {
              background: settings.swapBarBackgroundColorActive,
              textColor: settings.swapBarTextColorActive,
            })}
          >
            <div
              {...(activeTab === 2 && {
                style: {
                  borderRadius: settings.swapBarActiveBorderRadius,
                },
              })}
              data-selector="tab"
              data-is-active={activeTab === 2}
              className={styles.tab}
              onClick={handleSecondTabClick}
            >
              <span>{secondLabel}</span>
            </div>
          </ColorsInjector>
        </div>
      </ColorsInjector>
    </div>
  );
};

export const MapSection = ({
  tabFirstLabel,
  tabSecondLabel,
  routeLabel,
  categoriesButtonLabel,
  photo,
  settings,
  list,
  mainLocationIcon,
  mainLocation,
  mainCategoryIcon,
  mainPlaceID,
  mainLocationTitle,
  mainCategoryTitle,
}) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Section {...settings.section}>
      <div data-selector="container" className={styles.container}>
        <TabsList
          activeTab={activeTab}
          settings={settings}
          onChange={setActiveTab}
          firstLabel={tabFirstLabel}
          secondLabel={tabSecondLabel}
        />
        {activeTab === 2 ? (
          <MapContainer
            list={list}
            settings={settings}
            routeLabel={routeLabel}
            categoriesButtonLabel={categoriesButtonLabel}
            main={{
              locationIcon: mainLocationIcon,
              location: mainLocation,
              categoryIcon: mainCategoryIcon,
              placeID: mainPlaceID,
              locationTitle: mainLocationTitle,
              categoryTitle: mainCategoryTitle,
            }}
          />
        ) : (
          <div
            data-selector="photo-wrapper"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={photo}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        )}
      </div>
    </Section>
  );
};
