import React, { useState } from "react";
import { ColorsInjector } from "../../../containers";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { mediaQueries } from "../../../utils/constants";
import {
  Button,
  ContentContainer,
  Fade,
  Section,
  Typography,
} from "../../shared";

import styles from "./Location.module.scss";

const TabButton = ({
  name,
  isActive,
  background,
  activeBackground,
  textColor,
  activeTextColor,
  onClick,
}) => {
  return (
    <ColorsInjector
      background={isActive ? activeBackground : background}
      textColor={isActive ? activeTextColor : textColor}
      borderColor={activeBackground}
    >
      <button
        data-selector="tab-button"
        onClick={onClick}
        disabled={isActive}
        className={styles.tabButton}
      >
        {name}
      </button>
    </ColorsInjector>
  );
};

const TabContent = ({ isActive, isMobile, photoSource, photoSourceMobile }) => {
  return (
    <Fade isActive={isActive}>
      <div data-selector="tab-content" className={styles.tabContent}>
        <img alt="" src={isMobile ? photoSourceMobile : photoSource} />
      </div>
    </Fade>
  );
};

export const Location = ({
  firstTab,
  secondTab,
  subTitle,
  title,
  buttonName,
  buttonLink,
  settings,
}) => {
  const isMobile = !useMediaQuery(mediaQueries.minTablet);
  const isMinLaptop = useMediaQuery(mediaQueries.minLaptop);
  const [activeTab, setActiveTab] = useState("first");

  const isActiveFirst = activeTab === "first";
  const isActiveSecond = activeTab === "second";

  const setToFirstTab = () => setActiveTab("first");
  const setToSecondTab = () => setActiveTab("second");

  const buttonElement = (
    <div data-selector="button">
      <Button href={buttonLink} label={buttonName} type={settings.buttonType} />
    </div>
  );

  const typographyElement = (
    <Typography
      data-selector="title"
      as={"h2"}
      {...settings.title}
      className={styles.title}
    >
      {title}
    </Typography>
  );

  const tabButtonsElement = (
    <div data-selector="tab-buttons" className={styles.tabButtons}>
      <TabButton
        name={firstTab.name}
        isActive={isActiveFirst}
        {...settings.tab}
        onClick={setToFirstTab}
      />
      <TabButton
        name={secondTab.name}
        isActive={isActiveSecond}
        {...settings.tab}
        onClick={setToSecondTab}
      />
    </div>
  );

  return (
    <Section {...settings.section}>
      <ContentContainer className={styles.grid}>
        {subTitle && (
          <Typography
            data-selector="subtitle"
            className={styles.subTitle}
            as={"h3"}
            {...settings.subTitle}
          >
            {subTitle}
          </Typography>
        )}
        {isMinLaptop ? (
          <div
            data-selector="min-laptop-top-panel"
            className={styles.minLaptopTopPanel}
          >
            {typographyElement}
            <div
              data-selector="tab-buttons-button-wrapper"
              className={styles.tabButtonsButtonWrapperContainer}
            >
              {tabButtonsElement}
              {buttonElement}
            </div>
          </div>
        ) : (
          [typographyElement, tabButtonsElement]
        )}

        <div
          data-selector="tab-content-wrapper"
          className={styles.tabContentWrapper}
        >
          <TabContent
            {...firstTab}
            isMobile={isMobile}
            isActive={activeTab === "first"}
          />
          <TabContent
            {...secondTab}
            isMobile={isMobile}
            isActive={activeTab === "second"}
          />
        </div>
        {!isMinLaptop && buttonElement}
      </ContentContainer>
    </Section>
  );
};
