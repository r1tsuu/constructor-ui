import React, { useEffect, useRef, useState } from "react";

import { ColorsInjector } from "../../../containers/ColorsInjector";
import {
  Button,
  ContentContainer,
  Fade,
  Modal,
  Typography,
} from "../../shared";

import useMediaQuery from "../../../hooks/useMediaQuery";
import { mediaQueries } from "../../../utils/constants";

import styles from "./Header.module.scss";
import { resolvePaddings } from "../../../utils/resolvePaddings";
import { useEnvironment } from "../../../contexts/EnvironmentContext";
import { useSection } from "../../../contexts/SectionContext";
import { CSSInjector } from "../../../containers/CSSInjector";
import { useClickOutside } from "../../../hooks/useClickOutside";

const MenuButton = ({ children, onClick, settings }) => {
  return (
    <ColorsInjector
      background={settings.menuButtonBackground}
      backgroundHover={settings.menuButtonBackgroundHover}
      borderColor={settings.menuButtonBorderColor}
      borderHoverColor={settings.menuButtonBorderColorHover}
    >
      <button
        data-selector="menu-button"
        onClick={onClick}
        className={styles.button}
        style={{ borderRadius: settings.menuButtonBorderRadius }}
      >
        {children}
      </button>
    </ColorsInjector>
  );
};

export const Header = ({
  logoSource,
  email,
  phone,
  callbackLink,
  callbackButtonName,
  menu,
  cancelButtonName,
  settings,
  currentLanguage,
  languages,
  onLanguageChange,
  menuList,
  isSticky,
  cssMenu,
  cssCallback,
  menuPhoto,
}) => {
  const { id, css, componentName } = useSection();
  const { Link } = useEnvironment();
  const [isMobileCallbackPopupOpened, setMobileCallbackPopupOpened] =
    useState(false);
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [visibleLanguagesMenu, setVisibleLanguagesMenu] = useState(false);
  const languageSwitcherRef = useRef();

  useClickOutside(languageSwitcherRef, () => {
    if (visibleLanguagesMenu) setVisibleLanguagesMenu(false);
  });

  const isMinLaptop = useMediaQuery(mediaQueries.minLaptop);
  const isMinTablet = useMediaQuery(mediaQueries.minTablet);

  const handleMenuOpen = () => setMenuOpened(true);

  const handleShowLanguagesMenu = () => setVisibleLanguagesMenu(true);

  const handleHideLanguagesMenu = () => setVisibleLanguagesMenu(false);

  const handleToggleLanguagesMenu = () => {
    if (true) {
      if (visibleLanguagesMenu) setVisibleLanguagesMenu(false);
      else setVisibleLanguagesMenu(true);
    }
  };

  const handleMobileCallbackPopupOpen = () =>
    setMobileCallbackPopupOpened(true);

  const handleMenuClose = () => setMenuOpened(false);

  const handleMobileCallbackPopupClose = () =>
    setMobileCallbackPopupOpened(false);

  const phoneIconElement = (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ColorsInjector stroke={settings.phoneIconColor}>
        <path
          d="M15.2988 12.3814V14.4288C15.2996 14.6188 15.2606 14.807 15.1843 14.9811C15.108 15.1553 14.9961 15.3116 14.8557 15.4401C14.7154 15.5686 14.5497 15.6664 14.3693 15.7273C14.1889 15.7882 13.9978 15.8108 13.8081 15.7937C11.7039 15.5655 9.68271 14.8479 7.90687 13.6986C6.25468 12.6508 4.85392 11.2528 3.80405 9.60386C2.6484 7.82349 1.92922 5.79647 1.70477 3.68702C1.68768 3.49831 1.71015 3.3081 1.77076 3.12852C1.83136 2.94895 1.92876 2.78393 2.05677 2.64398C2.18477 2.50403 2.34057 2.39222 2.51425 2.31566C2.68793 2.2391 2.87567 2.19946 3.06554 2.19928H5.11695C5.44881 2.19603 5.77053 2.31331 6.02215 2.52927C6.27377 2.74524 6.43811 3.04514 6.48456 3.3731C6.57115 4.02829 6.73172 4.67161 6.96322 5.29078C7.05523 5.53505 7.07514 5.80051 7.0206 6.05573C6.96606 6.31094 6.83936 6.5452 6.65551 6.73075L5.78708 7.59746C6.76051 9.306 8.17797 10.7207 9.88991 11.6922L10.7583 10.8254C10.9443 10.642 11.179 10.5155 11.4347 10.4611C11.6904 10.4067 11.9564 10.4265 12.2012 10.5183C12.8216 10.7494 13.4662 10.9096 14.1227 10.9961C14.4548 11.0428 14.7582 11.2098 14.975 11.4652C15.1919 11.7207 15.3071 12.0467 15.2988 12.3814Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </ColorsInjector>
    </svg>
  );

  const logoElement = Link ? (
    <Link href="/">
      <a data-selector="logo-container" className={styles.logoContainer}>
        <img src={logoSource} alt="logo" />
      </a>
    </Link>
  ) : (
    <div data-selector="logo-container" className={styles.logoContainer}>
      <img src={logoSource} alt="logo" />
    </div>
  );

  const activeLanguage = languages.find((l) => l === currentLanguage);
  const notActiveLanguages = languages.filter((l) => l !== activeLanguage);

  return (
    <>
      <CSSInjector css={css}>
        <ColorsInjector background={settings.section.bg}>
          <header
            id={id}
            data-component={componentName}
            style={{
              ...resolvePaddings({
                ...settings.section,
                defaultPaddingTop: "20px 20px 20px 20px",
                defaultPaddingBottom: "20px 20px 20px 20px",
              }),
            }}
            className={styles.header}
            data-is-sticky={isSticky}
            data-theme={settings.section.theme}
          >
            <ContentContainer className={styles.container}>
              {logoElement}
              <div data-selector="right" className={styles.right}>
                {languages.length > 1 && (
                  <div data-selector="languages" className={styles.flex}>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ColorsInjector fill={settings.languageIconColor}>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.0022 0.980469C11.4845 0.980469 13.7352 1.98971 15.3662 3.62397C16.9928 5.25381 18 7.50879 18 10.0007C18 12.4879 16.9928 14.7432 15.3662 16.3773C13.7351 18.0072 11.4846 19.0164 9.0022 19.0164C6.5154 19.0164 4.26498 18.0072 2.63823 16.3773C1.0071 14.743 0 12.488 0 10.0007C0 7.50889 1.00723 5.25397 2.63823 3.62397C4.26482 1.98958 6.5153 0.980469 9.0022 0.980469V0.980469ZM14.3723 4.61987C13.8376 4.07954 13.2226 3.62409 12.5496 3.26679C12.6566 3.43198 12.759 3.60168 12.8571 3.78033C13.6547 5.22714 14.1762 7.15628 14.2699 9.29516H16.5649C16.4001 7.4732 15.5933 5.83901 14.3723 4.61997L14.3723 4.61987ZM14.3723 15.3816C15.5934 14.1581 16.4001 12.5237 16.5649 10.7019H14.2699C14.1763 12.8409 13.6549 14.77 12.8571 16.2167C12.759 16.3953 12.6566 16.5695 12.5496 16.7302C13.2226 16.3729 13.8376 15.9175 14.3723 15.3817L14.3723 15.3816ZM3.63209 15.3816C4.16685 15.9174 4.77743 16.3729 5.45481 16.7301C5.34784 16.5693 5.24538 16.3952 5.14732 16.2166C4.34966 14.7698 3.82821 12.8406 3.73014 10.7017H1.43944C1.6043 12.5237 2.41103 14.1579 3.63207 15.3814L3.63209 15.3816ZM3.63209 4.61987C2.41104 5.83898 1.60432 7.47336 1.43946 9.29506H3.73015C3.82822 7.15606 4.34964 5.22698 5.14734 3.78023C5.2454 3.60158 5.34785 3.43188 5.45483 3.26669C4.77745 3.624 4.16686 4.07941 3.6321 4.61978L3.63209 4.61987ZM9.70195 2.52113V9.29525H12.8661C12.7726 7.40196 12.3179 5.70931 11.6273 4.45903C11.0925 3.48551 10.4284 2.79785 9.70205 2.52106L9.70195 2.52113ZM9.70195 10.7017V17.4759C10.4284 17.199 11.0924 16.5113 11.6272 15.5423C12.318 14.2875 12.7725 12.5951 12.866 10.7019H9.70186L9.70195 10.7017ZM8.29808 17.4759V10.7017H5.1384C5.22754 12.595 5.6866 14.2877 6.37728 15.5422C6.91205 16.5111 7.57612 17.1988 8.29808 17.4757V17.4759ZM8.29808 9.29525V2.52113C7.57612 2.79804 6.91205 3.4857 6.37728 4.4591C5.68647 5.70938 5.22753 7.40189 5.1384 9.29532L8.29808 9.29525Z"
                        />
                      </ColorsInjector>
                    </svg>
                    <div
                      style={{ position: "relative" }}
                      className={styles.languageSwitcher}
                      ref={languageSwitcherRef}
                      data-selector="language-switcher"
                      // onMouseEnter={handleShowLanguagesMenu}
                      // onMouseLeave={handleHideLanguagesMenu}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                          cursor: "pointer",
                        }}
                        data-selector="language-switcher-active-arrow"
                        onClick={handleToggleLanguagesMenu}
                      >
                        <Typography
                          style={{
                            textTransform: "uppercase",
                            cursor: "pointer",
                          }}
                          as={"button"}
                          color={settings.languageActiveColor}
                          className={styles.languageButton}
                          {...settings.language}
                          data-is-active={true}
                        >
                          {activeLanguage}
                        </Typography>
                        <div
                          data-selector="language-switcher-arrow"
                          className={styles.arrowLanguage}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="5"
                            viewBox="0 0 9 5"
                            fill="none"
                            style={{
                              rotate: visibleLanguagesMenu ? "180deg" : "",
                              transition: "rotate 0.25s",
                            }}
                          >
                            <path d="M1 1L4.5 4L8 1" stroke="#F5F5F5" />
                          </svg>
                        </div>
                      </div>
                      <Fade isActive={visibleLanguagesMenu}>
                        <div
                          data-selector="language-switcher-not-active"
                          className={styles.notActiveLanguages}
                        >
                          {notActiveLanguages.map((code) => (
                            <Typography
                              key={code}
                              as={"button"}
                              style={{
                                textTransform: "uppercase",
                                cursor: "pointer",
                              }}
                              className={styles.languageButton}
                              {...settings.language}
                              color={
                                code === currentLanguage
                                  ? settings.language.color
                                  : settings.languageActiveColor
                              }
                              onClick={() => {
                                onLanguageChange(code);
                                handleHideLanguagesMenu();
                              }}
                              data-is-active={false}
                            >
                              {code}
                            </Typography>
                          ))}
                        </div>
                      </Fade>
                    </div>
                  </div>
                )}
                {isMinTablet && email && (
                  <a
                    data-selector="email"
                    href={`mailto:${email}`}
                    className={styles.flex}
                  >
                    <svg
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ColorsInjector stroke={settings.emailIconColor}>
                        <path
                          d="M3.05922 3.89844H13.9392C14.6872 3.89844 15.2992 4.51044 15.2992 5.25844V13.4184C15.2992 14.1664 14.6872 14.7784 13.9392 14.7784H3.05922C2.31122 14.7784 1.69922 14.1664 1.69922 13.4184V5.25844C1.69922 4.51044 2.31122 3.89844 3.05922 3.89844Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </ColorsInjector>
                      <ColorsInjector stroke={settings.emailIconColor}>
                        <path
                          d="M15.2992 5.25781L8.49922 10.0178L1.69922 5.25781"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </ColorsInjector>
                    </svg>
                    <Typography {...settings.email}>{email}</Typography>
                  </a>
                )}
                {isMinLaptop && (
                  <a
                    data-selector="phone"
                    href={`tel:${phone}`}
                    className={styles.flex}
                  >
                    {phoneIconElement}
                    <Typography {...settings.phone}>{phone}</Typography>
                  </a>
                )}
                {isMinLaptop ? (
                  <Button
                    data-selector="button-callback"
                    href={callbackLink}
                    type={settings.callbackButtonType}
                    label={callbackButtonName}
                  />
                ) : (
                  <ColorsInjector
                    background={settings.callbackButtonBackground}
                    backgroundHover={settings.callbackButtonBackgroundHover}
                    borderColor={settings.callbackButtonBorderColor}
                    borderHoverColor={settings.callbackButtonBorderColorHover}
                  >
                    <button
                      data-selector="button-callback-popup"
                      style={{
                        borderRadius: settings.callbackButtonBorderRadius,
                      }}
                      onClick={handleMobileCallbackPopupOpen}
                      className={styles.button}
                    >
                      {phoneIconElement}
                    </button>
                  </ColorsInjector>
                )}
                <div
                  data-selector="menu-container"
                  className={styles.menuContainer}
                >
                  {isMinLaptop && menu && (
                    <Typography data-selector="menu-title" {...settings.menu}>
                      {menu}
                    </Typography>
                  )}
                  <MenuButton onClick={handleMenuOpen} settings={settings}>
                    <svg
                      width="48px"
                      height="48px"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ColorsInjector stroke={settings.menuButtonIconColor}>
                        <path
                          d="M19 22.5H31"
                          stroke="white"
                          stroke-width="1.5"
                        />
                      </ColorsInjector>
                      <ColorsInjector stroke={settings.menuButtonIconColor}>
                        <path
                          d="M19 27.5H31"
                          stroke="white"
                          stroke-width="1.5"
                        />
                      </ColorsInjector>
                    </svg>
                  </MenuButton>
                </div>
              </div>
            </ContentContainer>
          </header>
        </ColorsInjector>
      </CSSInjector>

      <Modal
        css={cssCallback}
        isOpen={isMobileCallbackPopupOpened}
        onClose={handleMobileCallbackPopupClose}
        overlayTheme={settings.section.theme}
        backgroundColor={settings.callbackPopupBackgroundColor}
        backgroundOpacity={settings.callbackPopupOpacity}
        className={styles.callbackPopup}
        style={{
          alignItems: "flex-end",
          padding: "20px",
        }}
      >
        <div
          data-selector="callback-popup-container"
          className={styles.callbackPopupContainer}
        >
          <Button
            data-selector="button-phone"
            href={`tel:${phone}`}
            type={settings.callbackPopupPhoneButtonType}
            label={phone}
          />
          <Button
            data-selector="button-callback-link"
            type={settings.callbackPopupLinkButtonType}
            href={callbackLink}
            label={callbackButtonName}
          />
          <Button
            data-selector="button-callback-popup"
            onClick={handleMobileCallbackPopupClose}
            type={settings.callbackPopupCancelButtonType}
            label={cancelButtonName}
          />
        </div>
      </Modal>
      <Modal
        css={cssMenu}
        isOpen={isMenuOpened}
        onClose={handleMenuClose}
        overlayTheme={settings.section.theme}
        {...(menuPhoto
          ? {
              backgroundModal: settings.menuPopupContentBackground,
              noBefore: true,
            }
          : {
              backgroundColor: settings.menuPopupBackgroundColor,
            })}
        style={
          {
            // justifyContent: "flex-end",
          }
        }
      >
        {menuPhoto && isMinLaptop && (
          <div style={{ width: "50%", height: "100%" }}>
            <img
              src={menuPhoto}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
        )}
        <ColorsInjector background={settings.menuPopupContentBackground}>
          <div data-selector="menu-content" className={styles.menuContent}>
            <div data-selector="container" className={styles.container}>
              {logoElement}
              <MenuButton settings={settings} onClick={handleMenuClose}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ColorsInjector stroke={settings.menuButtonIconColor}>
                    <path
                      d="M1.5 1.50001L12.5 12.5M1.5 12.5L12.5 1.5"
                      stroke-width="1.5"
                    />
                  </ColorsInjector>
                </svg>
              </MenuButton>
            </div>
            <div data-selector="nav" className={styles.menuList}>
              {menuList.map(({ link, title, _id }, index) => (
                <ColorsInjector
                  key={_id ?? index}
                  borderColor={settings.menuBorderColor}
                >
                  <div data-selector="nav-item" className={styles.menuItem}>
                    {Link ? (
                      <Link className={styles.link} href={link}>
                        <Typography
                          onClick={handleMenuClose}
                          as="a"
                          data-selector="nav-link"
                          {...settings.menuLink}
                        >
                          {title}
                        </Typography>
                      </Link>
                    ) : (
                      <Typography
                        data-selector="nav-link"
                        {...settings.menuLink}
                      >
                        {title}
                      </Typography>
                    )}
                  </div>
                </ColorsInjector>
              ))}
            </div>
          </div>
        </ColorsInjector>
      </Modal>
    </>
  );
};
