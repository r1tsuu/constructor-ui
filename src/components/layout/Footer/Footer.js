import React from "react";
import { ColorsInjector } from "../../../containers";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { mediaQueries } from "../../../utils/constants";
import { resolvePaddings } from "../../../utils/resolvePaddings";
import FormSubscribeContainer from "../../sections/FormSubcribe/FormSubscribe";
import { Button, ContentContainer, Typography } from "../../shared";

import styles from "./Footer.module.scss";

const RosseryLogo = ({ fill }) => (
  <svg
    width="63"
    height="11"
    viewBox="0 0 63 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ColorsInjector fill={fill}>
      <path d="M63.0001 0.179688H61.2362L58.9472 4.46984L56.6447 0.179688H54.8809L58.1662 6.01983V9.86712H59.7147V6.01983L63.0001 0.179688Z" />
    </ColorsInjector>
    <ColorsInjector fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.7526 9.86712H52.056L50.0632 6.33813H48.232V9.86712H46.6836V4.91269H50.4537C51.2751 4.91269 51.9348 4.19305 51.9348 3.29351C51.9348 2.38012 51.2751 1.67432 50.4537 1.67432H46.6836V0.179688H50.4537C52.1368 0.179688 53.4833 1.56361 53.4833 3.29351C53.4833 4.53903 52.7158 5.64617 51.6117 6.10286L53.7526 9.86712Z"
      />
    </ColorsInjector>
    <ColorsInjector fill={fill}>
      <path d="M40.0152 5.7292V8.34481H44.1893V9.86712H38.4668V0.179688H44.122V1.702H40.0152V4.22073H43.7853V5.7292H40.0152Z" />
    </ColorsInjector>
    <ColorsInjector fill={fill}>
      <path d="M32.7819 10.0473C34.7478 10.0473 36.1212 8.9678 36.1212 7.19638C36.1212 5.27273 34.5458 4.77452 32.9839 4.26247C31.6105 3.81962 31.0854 3.50132 31.0854 2.754C31.0854 2.02052 31.6644 1.54999 32.5665 1.54999C33.6168 1.54999 34.2092 2.13124 34.5458 2.90623L35.8519 2.13124C35.2595 0.844191 34.115 0 32.5665 0C30.9777 0 29.537 1.01026 29.537 2.79552C29.537 4.62229 30.9642 5.17586 32.4319 5.63255C33.8322 6.07541 34.5728 6.36603 34.5728 7.22406C34.5728 7.92986 34.0476 8.49727 32.8223 8.49727C31.5432 8.49727 30.8161 7.84682 30.4795 6.86424L29.1465 7.66691C29.6447 9.10619 30.9238 10.0473 32.7819 10.0473Z" />
    </ColorsInjector>
    <ColorsInjector fill={fill}>
      <path d="M24.196 10.0473C26.1619 10.0473 27.5353 8.9678 27.5353 7.19638C27.5353 5.27273 25.9599 4.77452 24.398 4.26247C23.0246 3.81962 22.4995 3.50132 22.4995 2.754C22.4995 2.02052 23.0784 1.54999 23.9806 1.54999C25.0308 1.54999 25.6233 2.13124 25.9599 2.90623L27.266 2.13124C26.6735 0.844191 25.529 0 23.9806 0C22.3917 0 20.951 1.01026 20.951 2.79552C20.951 4.62229 22.3783 5.17586 23.8459 5.63255C25.2463 6.07541 25.9868 6.36603 25.9868 7.22406C25.9868 7.92986 25.4617 8.49727 24.2364 8.49727C22.9573 8.49727 22.2302 7.84682 21.8936 6.86424L20.5605 7.66691C21.0587 9.10619 22.3379 10.0473 24.196 10.0473Z" />
    </ColorsInjector>
    <ColorsInjector fill={fill}>
      <path d="M14.0361 10.0473C16.7695 10.0473 18.9238 7.83299 18.9238 5.02363C18.9238 2.21427 16.7695 0 14.0361 0C11.3163 0 9.14844 2.21427 9.14844 5.02363C9.14844 7.83299 11.3163 10.0473 14.0361 10.0473ZM14.0361 8.49727C12.1511 8.49727 10.6969 7.01647 10.6969 5.02363C10.6969 3.03078 12.1511 1.54999 14.0361 1.54999C15.9212 1.54999 17.3754 3.03078 17.3754 5.02363C17.3754 7.01647 15.9212 8.49727 14.0361 8.49727Z" />
    </ColorsInjector>
    <ColorsInjector fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.42052 9.86712H5.72397L3.7312 6.33813H1.9V9.86712H0.351562V4.91269H4.12168C4.94302 4.91269 5.60279 4.19305 5.60279 3.29351C5.60279 2.38012 4.94302 1.67432 4.12168 1.67432H0.351562V0.179688H4.12168C5.80476 0.179688 7.15123 1.56361 7.15123 3.29351C7.15123 4.53903 6.38374 5.64617 5.27964 6.10286L7.42052 9.86712Z"
      />
    </ColorsInjector>
  </svg>
);

export const Footer = ({
  socials,
  firstText,
  secondText,
  thirdText,
  downTextFirst,
  downTextSecond,
  downTextThird,
  handcraftedText,
  scrollUpText,
  socialsTitle,
  settings,
  buttonName,
  buttonLink,
  subscribe,
}) => {
  const isMobile = !useMediaQuery(mediaQueries.minTablet);
  const upperItems = [
    {
      ...firstText,
      props: settings.firstText,
    },
    {
      ...secondText,
      props: settings.secondText,
    },
    {
      ...thirdText,
      props: settings.thirdText,
    },
  ].filter(({ title }) => Boolean(title));

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  const privacyEl = (
    <div className={styles.privacy}>
      <Typography {...settings.downTextSecond} as={"span"}>
        {downTextSecond}
      </Typography>
      <Typography {...settings.downTextThird} as={"span"}>
        {downTextThird}
      </Typography>
    </div>
  );

  return (
    <ColorsInjector background={settings.section.bg}>
      <footer
        style={{
          ...resolvePaddings({
            ...settings.section,
            defaultPaddingBottom: "10px 10px 10px 10px",
            defaultPaddingTop: "40px 50px 60px 60px",
          }),
          backgroundImage:
            settings.section.bgImage && `url("${settings.section.bgImage}")`,
          backgroundPosition: settings.section.bgPosition,
        }}
        className={styles.footer}
        data-theme={settings.section.theme}
      >
        <ContentContainer>
          <div className={styles.upperContainer}>
            {upperItems.map(({ title, description, props }, index) => (
              <div className={styles.upperItem} key={index}>
                <Typography {...props.title} as={"h4"}>
                  {title}
                </Typography>
                <Typography {...props.description} as={"p"}>
                  {description}
                </Typography>
              </div>
            ))}
            <div className={styles.upperItem}>
              <Typography {...settings.socialsTitle} as={"h4"}>
                {socialsTitle}
              </Typography>
              <div className={styles.socials}>
                {socials.map(({ link, icon }, index) => (
                  <a target={"_blank"} href={link} key={index}>
                    <img src={icon} alt="" />
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.upperItem}>
              <Button
                className={styles.button}
                type={settings.buttonType}
                href={buttonLink}
                label={buttonName}
              />
            </div>
          </div>
          {settings.enableSubscribe && (
            <div className={styles.subscribeWrapper}>
              <FormSubscribeContainer
                isSection={false}
                settings={settings.subscribe}
                {...subscribe}
              />
            </div>
          )}
          {
            <div className={styles.preBottom}>
              <div>{isMobile && privacyEl}</div>
              <button onClick={scrollToTop} className={styles.toUp}>
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ColorsInjector stroke={settings.toUpIconColor}>
                    <path d="M5 12V1M5 1L1 4.66667M5 1L9 4.66667" />
                  </ColorsInjector>
                </svg>
                <Typography {...settings.scrollUpText} as={"span"}>
                  {scrollUpText}
                </Typography>
              </button>
            </div>
          }
          <ColorsInjector borderColor={settings.borderColor}>
            <div className={styles.bottom}>
              <Typography {...settings.downTextFirst} as={"span"}>
                {downTextFirst}
              </Typography>
              {!isMobile && privacyEl}
              <a
                href={"https://rossery.com"}
                target={"_blank"}
                className={styles.handcrafted}
              >
                <Typography {...settings.handcraftedText} as={"span"}>
                  {handcraftedText}
                </Typography>
                <RosseryLogo fill={settings.rosseryColor} />
              </a>
            </div>
          </ColorsInjector>
        </ContentContainer>
      </footer>
    </ColorsInjector>
  );
};
