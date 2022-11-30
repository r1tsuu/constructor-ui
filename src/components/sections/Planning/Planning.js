import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as Tabs from "@radix-ui/react-tabs";

import { useTranslation } from "../../../contexts/LanguageContext";
import {
  ContentContainer,
  Section,
  Typography,
  Arrow,
  Button,
  Modal,
} from "../../shared";

import useMediaQuery from "../../../hooks/useMediaQuery";
import { useSwiperNavigation } from "../../../hooks/useSwiperNavigation";
import { toStrZeroes } from "../../../utils";
import { mediaQueries } from "../../../utils/constants";

import styles from "./Planning.module.scss";
import { ColorsInjector } from "../../../containers";

const ArrowsProgress = ({ arrowProps, current, max, settings }) => {
  return (
    <div className={styles.arrowsProgress}>
      <Arrow {...arrowProps.prev} />
      <div className={styles.progress}>
        <Typography as={"span"} {...settings.sliderProgress}>
          {toStrZeroes(current + 1)}
        </Typography>
        <ColorsInjector background={settings.sliderProgressSeparatorBg}>
          <div className={styles.progressSeparator} />
        </ColorsInjector>
        <Typography as={"span"} {...settings.sliderProgress}>
          {toStrZeroes(max)}
        </Typography>
      </div>
      <Arrow {...arrowProps.next} />
    </div>
  );
};

const ModalSliderContent = ({
  data,
  settings,
  initialIndex,
  onIndexChange,
}) => {
  const { swiperProps, arrowProps } = useSwiperNavigation({
    type: settings.modalSliderArrowType,
  });

  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const handleRealIndexChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    onIndexChange(swiper.realIndex);
  };

  return (
    <div className={styles.modalSliderContent}>
      <Swiper
        rewind
        className={styles.swiper}
        initialSlide={initialIndex}
        onRealIndexChange={handleRealIndexChange}
        slidesPerView={"auto"}
        spaceBetween={40}
        {...swiperProps}
      >
        {data.map(({ photo, area, _id }, index) => (
          <SwiperSlide key={_id ?? index}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {area && (
                <Typography
                  as={"div"}
                  {...settings.modalSliderArea}
                  className={styles.modalSliderArea}
                >
                  {area}
                </Typography>
              )}
              <img
                style={{
                  width: "auto",
                }}
                src={photo}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowsProgress
        arrowProps={arrowProps}
        current={activeIndex}
        settings={settings}
        max={data.length}
      />
    </div>
  );
};

const ModalSlider = ({
  data,
  isOpen,
  overlayTheme,
  settings,
  initialIndex = 0,
  onIndexChange,
  onClose,
}) => {
  return (
    <Modal
      overlayTheme={overlayTheme}
      isOpen={isOpen}
      withCloseButton
      onClose={onClose}
    >
      <ModalSliderContent
        data={data}
        settings={settings}
        initialIndex={initialIndex}
        onIndexChange={onIndexChange}
      />
    </Modal>
  );
};

const RoomBlock = ({
  isMinLaptop,
  title,
  description,
  characteristics,
  advantages,
  plans,
  interiors,
  staticTexts,
  initedPlanIndex,
  settings,
}) => {
  const [isModalPlansOpened, setModalPlansOpened] = useState(false);
  const [isModalInteriorsOpened, setModalInteriorsOpened] = useState(false);

  const { swiperProps, arrowProps, goTo } = useSwiperNavigation({
    type: settings.plansArrowType,
    arrowClassName: styles.arrow,
  });
  const [activePlanIndex, setActivePlanIndex] = useState(initedPlanIndex);

  const handleModalPlansOpen = () => setModalPlansOpened(true);
  const handleInteriorsModalOpen = () => setModalInteriorsOpened(true);

  const handlePlansModalClose = () => setModalPlansOpened(false);
  const handleInteriorsModalClose = () => setModalInteriorsOpened(false);

  const handleActiveIndexChange = (swiper) =>
    setActivePlanIndex(swiper.realIndex);

  const handleModalActiveIndexChange = (index) => goTo(index);

  const activePlan = plans[activePlanIndex];

  return (
    <div className={styles.roomTabContent}>
      <div className={styles.roomLeft}>
        <Typography
          as={"h3"}
          {...settings.blockTitle}
          className={styles.roomTitle}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            as={"p"}
            {...settings.blockDescription}
            className={styles.roomDescription}
          >
            {description}
          </Typography>
        )}
        <ul className={styles.roomCharacteristics}>
          {characteristics.map(({ title, value, _id }, index) => (
            <li className={styles.roomCharacteristic} key={_id ?? index}>
              <Typography as={"h5"} {...settings.blockCharacteristicTitle}>
                {title}
              </Typography>
              {isMinLaptop && (
                <ColorsInjector
                  background={settings.blockCharacteristicSeparatorColor}
                >
                  <div className={styles.roomCharacteristicSeparator} />
                </ColorsInjector>
              )}
              <Typography as={"span"} {...settings.blockCharacteristicValue}>
                {value}
              </Typography>
            </li>
          ))}
        </ul>
        <ColorsInjector borderColor={settings.blockAdvantagesBorderColor}>
          <ui className={styles.roomAdvantages}>
            {advantages.map(({ icon, title, _id }, index) => (
              <li className={styles.roomAdvantage} key={_id ?? index}>
                <div className={styles.roomAdvantageIconWrapper}>
                  <img src={icon} alt="" />
                </div>
                <Typography as={"span"} {...settings.blockAdvantageTitle}>
                  {title}
                </Typography>
              </li>
            ))}
          </ui>
        </ColorsInjector>
        <div className={styles.roomButtonsWrapper}>
          <Button
            type={settings.roomReserveButtonType}
            label={staticTexts.reserve}
          />
          <Button
            type={settings.roomInteriorsButtonType}
            onClick={handleInteriorsModalOpen}
            label={staticTexts.interiors}
          />
        </div>
      </div>
      <div className={styles.roomRight}>
        <div className={styles.roomRightContent}>
          <Typography
            {...settings.blockPlansTotalAreaValue}
            as={"p"}
            className={styles.roomPlansTotalArea}
          >
            {activePlan.area}
          </Typography>
          <Typography as={"h4"} {...settings.blockPlansTotalAreaTitle}>
            {staticTexts.totalArea}
          </Typography>
          <div className={styles.roomPlansSliderWrapper}>
            <Swiper
              rewind
              {...swiperProps}
              slidesPerView={"auto"}
              initialSlide={initedPlanIndex}
              onRealIndexChange={handleActiveIndexChange}
              spaceBetween={30}
            >
              {plans.map(({ photo, _id }, index) => (
                <SwiperSlide
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={handleModalPlansOpen}
                  key={_id ?? index}
                >
                  <img className={styles.roomPlanPhoto} src={photo} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <ArrowsProgress
            arrowProps={arrowProps}
            current={activePlanIndex}
            max={plans.length}
            settings={settings}
          />
        </div>
        {isMinLaptop && (
          <ColorsInjector
            background={settings.zoomButtonBackground}
            borderColor={settings.zoomButtonBorderColor}
          >
            <button
              onClick={handleModalPlansOpen}
              className={styles.roomPlansZoomButton}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ColorsInjector
                  stroke={settings.zoomButtonStroke}
                  fill={settings.zoomButtonFill}
                >
                  <path
                    d="M34.372 33.128L34.3726 33.1286C34.4546 33.21 34.5197 33.3068 34.5641 33.4134C34.6085 33.52 34.6314 33.6344 34.6314 33.7499C34.6314 33.8654 34.6085 33.9798 34.5641 34.0864C34.5197 34.193 34.4546 34.2898 34.3726 34.3711L34.3711 34.3726C34.2898 34.4546 34.193 34.5197 34.0864 34.5641C33.9798 34.6085 33.8654 34.6314 33.7499 34.6314C33.6344 34.6314 33.52 34.6085 33.4134 34.5641C33.3068 34.5197 33.21 34.4546 33.1286 34.3726L33.128 34.372L25.433 26.6657L25.2693 26.5018L25.0934 26.6526C22.2713 29.0716 18.6219 30.3034 14.9111 30.0895C11.2003 29.8756 7.71654 28.2326 5.19104 25.5054C2.66554 22.7782 1.2946 19.1787 1.36593 15.4624C1.43726 11.7461 2.94533 8.20192 5.57362 5.57362C8.20192 2.94533 11.7461 1.43726 15.4624 1.36593C19.1787 1.2946 22.7782 2.66554 25.5054 5.19104C28.2326 7.71654 29.8756 11.2003 30.0895 14.9111C30.3034 18.6219 29.0716 22.2713 26.6526 25.0934L26.5018 25.2693L26.6657 25.433L34.372 33.128ZM5.25258 8.73581C3.86533 10.812 3.12489 13.2529 3.12489 15.7499C3.12489 19.0982 4.45502 22.3095 6.82266 24.6771C9.19031 27.0448 12.4015 28.3749 15.7499 28.3749C18.2469 28.3749 20.6878 27.6344 22.764 26.2472C24.8401 24.8599 26.4583 22.8882 27.4139 20.5813C28.3694 18.2743 28.6194 15.7359 28.1323 13.2869C27.6452 10.8379 26.4428 8.5883 24.6771 6.82266C22.9115 5.05703 20.6619 3.85461 18.2129 3.36747C15.7639 2.88033 13.2254 3.13035 10.9185 4.08591C8.61159 5.04146 6.63984 6.65964 5.25258 8.73581Z"
                    fill="#FCFCFC"
                    stroke="#F3F2F1"
                    strokeWidth="0.5"
                  />
                </ColorsInjector>
                <ColorsInjector
                  stroke={settings.zoomButtonStroke}
                  fill={settings.zoomButtonFill}
                >
                  <path
                    d="M16.625 14.625V14.875H16.875H22.5C22.7321 14.875 22.9546 14.9672 23.1187 15.1313C23.2828 15.2954 23.375 15.5179 23.375 15.75C23.375 15.9821 23.2828 16.2046 23.1187 16.3687C22.9546 16.5328 22.7321 16.625 22.5 16.625H16.875H16.625V16.875V22.5C16.625 22.7321 16.5328 22.9546 16.3687 23.1187C16.2046 23.2828 15.9821 23.375 15.75 23.375C15.5179 23.375 15.2954 23.2828 15.1313 23.1187C14.9672 22.9546 14.875 22.7321 14.875 22.5V16.875V16.625H14.625H9C8.76794 16.625 8.54538 16.5328 8.38128 16.3687C8.21719 16.2046 8.125 15.9821 8.125 15.75C8.125 15.5179 8.21719 15.2954 8.38128 15.1313C8.54538 14.9672 8.76794 14.875 9 14.875H14.625H14.875V14.625V9C14.875 8.76794 14.9672 8.54538 15.1313 8.38128C15.2954 8.21719 15.5179 8.125 15.75 8.125C15.9821 8.125 16.2046 8.21719 16.3687 8.38128C16.5328 8.54538 16.625 8.76794 16.625 9V14.625Z"
                    fill="#FCFCFC"
                    stroke="#F3F2F1"
                    strokeWidth="0.5"
                  />
                </ColorsInjector>
              </svg>
            </button>
          </ColorsInjector>
        )}
      </div>

      <ModalSlider
        overlayTheme={settings.section.theme}
        isOpen={isModalPlansOpened}
        onClose={handlePlansModalClose}
        initialIndex={activePlanIndex}
        data={plans}
        onIndexChange={handleModalActiveIndexChange}
        settings={settings}
      />
      <ModalSlider
        overlayTheme={settings.section.theme}
        isOpen={isModalInteriorsOpened}
        onClose={handleInteriorsModalClose}
        data={interiors}
        settings={settings}
      />
    </div>
  );
};

const Planning = ({
  title,
  subTitle,
  rooms,
  settings,
  goToMarketLink,
  staticTexts,
  initedRoomIndex,
  initedPlanIndex,
}) => {
  const isMinLaptop = useMediaQuery(mediaQueries.minLaptop);
  const [activeRoomIndex, setActiveRoomIndex] = useState(initedRoomIndex ?? 0);

  const handleActiveRoomChange = (index) => setActiveRoomIndex(index);
  return (
    <Section {...settings.section}>
      <ContentContainer>
        {subTitle && (
          <Typography
            as={"h3"}
            {...settings.subTitle}
            className={styles.subTitle}
          >
            {subTitle}
          </Typography>
        )}
        <Typography as={"h2"} {...settings.title} className={styles.title}>
          {title}
        </Typography>
        <Tabs.Root
          onValueChange={handleActiveRoomChange}
          value={activeRoomIndex}
          className={styles.roomTabs}
        >
          <Tabs.List className={styles.roomTabsList}>
            {rooms.map(({ _id, roomTitle }, index) => (
              <Tabs.Trigger
                className={styles.roomTabTrigger}
                value={index}
                key={_id ?? index}
              >
                <Typography
                  as={"span"}
                  {...settings.roomTitle}
                  color={
                    index === activeRoomIndex
                      ? settings.roomTitleActiveColor
                      : settings.roomTitle.color
                  }
                >
                  {roomTitle}
                </Typography>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {rooms.map(({ _id, ...roomBlockProps }, index) => (
            <Tabs.Content value={index} key={_id ?? index}>
              <RoomBlock
                index={index}
                isMinLaptop={isMinLaptop}
                {...roomBlockProps}
                staticTexts={staticTexts}
                settings={settings}
                initedPlanIndex={
                  index === initedRoomIndex ? initedPlanIndex : 0
                }
              />
            </Tabs.Content>
          ))}
        </Tabs.Root>
        <div className={styles.goToMarketButtonWrapper}>
          <Button
            label={staticTexts.goToMarket}
            href={goToMarketLink}
            type={settings.goToMarketButtonType}
          />
        </div>
      </ContentContainer>
    </Section>
  );
};

export const PlanningStaticContainer = ({ staticTexts = {}, ...props }) => {
  const t = useTranslation();

  return (
    <Planning
      {...props}
      staticTexts={{
        goToMarket: staticTexts.gotToMarket || t("PLANNING_GO_TO_MARKET"),
        reserve: staticTexts.reserve || t("PLANNING_RESERVE"),
        interiors: staticTexts.interiors || t("PLANNING_INTERIORS"),
        totalArea: staticTexts.totalArea || t("PLANNING_TOTAL_AREA"),
      }}
    />
  );
};

export const PlanningInitedPlanContainer = ({
  initedRoomIndex = 0,
  initedPlanIndex = 0,
  ...props
}) => {
  return (
    <PlanningStaticContainer
      initedPlanIndex={initedPlanIndex}
      initedRoomIndex={initedRoomIndex}
      {...props}
    />
  );
};
