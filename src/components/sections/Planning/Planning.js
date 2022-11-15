import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";

import { useTranslation } from "../../../contexts/LanguageContext";
import {
  ContentContainer,
  Section,
  Typography,
  Arrow,
  Button,
} from "../../shared";

import styles from "./Planning.module.scss";
import { useSwiperNavigation } from "../../../hooks/useSwiperNavigation";
import { toStrZeroes } from "../../../utils";
import { Swiper, SwiperSlide } from "swiper/react";

const ZoomIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.372 33.128L34.3726 33.1286C34.4546 33.21 34.5197 33.3068 34.5641 33.4134C34.6085 33.52 34.6314 33.6344 34.6314 33.7499C34.6314 33.8654 34.6085 33.9798 34.5641 34.0864C34.5197 34.193 34.4546 34.2898 34.3726 34.3711L34.3711 34.3726C34.2898 34.4546 34.193 34.5197 34.0864 34.5641C33.9798 34.6085 33.8654 34.6314 33.7499 34.6314C33.6344 34.6314 33.52 34.6085 33.4134 34.5641C33.3068 34.5197 33.21 34.4546 33.1286 34.3726L33.128 34.372L25.433 26.6657L25.2693 26.5018L25.0934 26.6526C22.2713 29.0716 18.6219 30.3034 14.9111 30.0895C11.2003 29.8756 7.71654 28.2326 5.19104 25.5054C2.66554 22.7782 1.2946 19.1787 1.36593 15.4624C1.43726 11.7461 2.94533 8.20192 5.57362 5.57362C8.20192 2.94533 11.7461 1.43726 15.4624 1.36593C19.1787 1.2946 22.7782 2.66554 25.5054 5.19104C28.2326 7.71654 29.8756 11.2003 30.0895 14.9111C30.3034 18.6219 29.0716 22.2713 26.6526 25.0934L26.5018 25.2693L26.6657 25.433L34.372 33.128ZM5.25258 8.73581C3.86533 10.812 3.12489 13.2529 3.12489 15.7499C3.12489 19.0982 4.45502 22.3095 6.82266 24.6771C9.19031 27.0448 12.4015 28.3749 15.7499 28.3749C18.2469 28.3749 20.6878 27.6344 22.764 26.2472C24.8401 24.8599 26.4583 22.8882 27.4139 20.5813C28.3694 18.2743 28.6194 15.7359 28.1323 13.2869C27.6452 10.8379 26.4428 8.5883 24.6771 6.82266C22.9115 5.05703 20.6619 3.85461 18.2129 3.36747C15.7639 2.88033 13.2254 3.13035 10.9185 4.08591C8.61159 5.04146 6.63984 6.65964 5.25258 8.73581Z"
      fill="#FCFCFC"
      stroke="#F3F2F1"
      strokeWidth="0.5"
    />
    <path
      d="M16.625 14.625V14.875H16.875H22.5C22.7321 14.875 22.9546 14.9672 23.1187 15.1313C23.2828 15.2954 23.375 15.5179 23.375 15.75C23.375 15.9821 23.2828 16.2046 23.1187 16.3687C22.9546 16.5328 22.7321 16.625 22.5 16.625H16.875H16.625V16.875V22.5C16.625 22.7321 16.5328 22.9546 16.3687 23.1187C16.2046 23.2828 15.9821 23.375 15.75 23.375C15.5179 23.375 15.2954 23.2828 15.1313 23.1187C14.9672 22.9546 14.875 22.7321 14.875 22.5V16.875V16.625H14.625H9C8.76794 16.625 8.54538 16.5328 8.38128 16.3687C8.21719 16.2046 8.125 15.9821 8.125 15.75C8.125 15.5179 8.21719 15.2954 8.38128 15.1313C8.54538 14.9672 8.76794 14.875 9 14.875H14.625H14.875V14.625V9C14.875 8.76794 14.9672 8.54538 15.1313 8.38128C15.2954 8.21719 15.5179 8.125 15.75 8.125C15.9821 8.125 16.2046 8.21719 16.3687 8.38128C16.5328 8.54538 16.625 8.76794 16.625 9V14.625Z"
      fill="#FCFCFC"
      stroke="#F3F2F1"
      strokeWidth="0.5"
    />
  </svg>
);

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
  settings: { block: blockSettings, ...settings },
  index,
}) => {
  const { swiperProps, arrowProps } = useSwiperNavigation({
    type: settings.arrowType,
    arrowClassName: styles.arrow,
  });
  const [activePlanIndex, setActivePlanIndex] = useState(initedPlanIndex ?? 0);

  const handleActiveIndexChange = (swiper) =>
    setActivePlanIndex(swiper.realIndex);

  const activePlan = plans[activePlanIndex];

  return (
    <div className={styles.roomTabContent}>
      <div className={styles.roomLeft}>
        <Typography
          as={"h3"}
          {...blockSettings.title}
          className={styles.roomTitle}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            as={"p"}
            {...blockSettings.description}
            className={styles.roomDescription}
          >
            {description}
          </Typography>
        )}
        <ul className={styles.roomCharacteristics}>
          {characteristics.map(({ title, value, _id }, index) => (
            <li className={styles.roomCharacteristic} key={_id ?? index}>
              <Typography as={"h5"} {...settings.characteristic.title}>
                {title}
              </Typography>
              <Typography as={"span"} {...settings.characteristic.value}>
                {value}
              </Typography>
            </li>
          ))}
        </ul>
        <ui className={styles.roomAdvantages}>
          {advantages.map(({ icon, title, _id }, index) => (
            <li key={_id ?? index}>
              <div className={styles.roomAdvantageIconWrapper}>
                <img src={icon} alt="" />
              </div>
              <Typography as={"span"} {...settings.advantageTitle}>
                {title}
              </Typography>
            </li>
          ))}
        </ui>
      </div>
      <div className={styles.roomRight}>
        <Typography
          {...blockSettings.totalArea}
          as={"p"}
          className={styles.roomPlansTotalArea}
        >
          {activePlan.area}
        </Typography>
        <Typography as={"h4"} {...blockSettings.totalAreaTitle}>
          {staticTexts.totalArea}
        </Typography>
        <div className={styles.roomPlansSliderWrapper}>
          <Swiper
            {...swiperProps}
            lazy
            initialSlide={initedPlanIndex ?? 0}
            onRealIndexChange={handleActiveIndexChange}
          >
            {plans.map(({ photo, _id }, index) => (
              <SwiperSlide key={_id ?? index}>
                <div>
                  <img className={styles.roomPlanPhoto} src={photo} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.roomPlansArrowsProgressWrapper}>
          <Arrow {...arrowProps.prev} />
          <div className={styles.roomPlansProgress}>
            <Typography as={"span"} {...blockSettings.progressNumber}>
              {toStrZeroes(activePlanIndex + 1)}
            </Typography>
            <div className={styles.roomPlansProgressSeparator} />
            <Typography as={"span"} {...blockSettings.progressNumber}>
              {toStrZeroes(plans.length)}
            </Typography>
          </div>
        </div>
      </div>
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
                  type={settings.roomTitle.type}
                  color={
                    index === activeRoomIndex
                      ? settings.roomTitle.activeColor
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
                {...roomBlockProps}
                staticTexts={staticTexts}
                settings={settings}
                initedPlanIndex={index === initedRoomIndex && initedPlanIndex}
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
        goToMarket: staticTexts.gotToMarket ?? t("PLANNING_GO_TO_MARKET"),
        reserve: staticTexts.reserve ?? t("PLANNING_RESERVE"),
        interiors: staticTexts.interiors ?? t("PLANNING_INTERIORS"),
        totalArea: staticTexts.totalArea ?? t("PLANNING_TOTAL_AREA"),
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
