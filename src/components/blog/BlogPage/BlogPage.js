import React, { useEffect, useState } from "react";
import {
  Arrow,
  Button,
  ContentContainer,
  ResponsiveVideoPlayer,
  Typography,
} from "../../shared";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useSwiperNavigation } from "../../../hooks/useSwiperNavigation";
import styles from "./BlogPage.module.scss";

import { ColorsInjector } from "../../../containers";
import { Swiper, SwiperSlide } from "swiper/react";
import { mediaQueries } from "../../../utils/constants";

const BlogImage = ({ photoSource, photoSourceMobile }) => {
  const isMobile = !useMediaQuery(mediaQueries.minTablet);
  return (
    <section data-component="blog-image">
      <img src={isMobile ? photoSourceMobile : photoSource} />
    </section>
  );
};

const BlogList = ({ list, settings }) => {
  return (
    <section data-component="blog-list">
      <ul className={styles.list}>
        {list.map((title, index) => (
          <li key={index} className={styles.item}>
            <ColorsInjector background={settings.iconColor}>
              <span data-selector="list-icon" className={styles.listIcon} />
            </ColorsInjector>
            <Typography data-selector="title" {...settings.title}>
              {title}
            </Typography>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Pagination = ({ currentIndex, maxIndex, onButtonClick, settings }) => {
  return (
    <div data-selector="paginaton" className={styles.pagination}>
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
              data-is-active={index === currentIndex}
              onClick={onButtonClick.bind(null, index)}
            />
          </ColorsInjector>
        ))}
    </div>
  );
};
const BlogSlider = ({ photos, settings }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { goTo, arrowProps, swiperProps } = useSwiperNavigation({
    type: settings.arrowsType,
  });

  const handleRealIndexChange = (swiper) => setCurrentIndex(swiper.realIndex);

  const handlePaginationClick = (index) => goTo(index);
  return (
    <section data-component="blog-slider">
      <div data-selector="slider" className={styles.slider}>
        <Swiper
          onRealIndexChange={handleRealIndexChange}
          {...swiperProps}
          spaceBetween={20}
          slidesPerView={1}
          rewind
        >
          {photos.map(({ source }, index) => (
            <SwiperSlide key={index}>
              <img src={source} alt="" />{" "}
            </SwiperSlide>
          ))}
        </Swiper>
        <div data-selector="arrows-wrapper" className={styles.arrowsWrapper}>
          <Arrow {...arrowProps.prev} />
          <Arrow {...arrowProps.next} />
        </div>
      </div>
      <Pagination
        currentIndex={currentIndex}
        onButtonClick={handlePaginationClick}
        settings={settings}
        maxIndex={photos.length}
      />
    </section>
  );
};

const BlogQuote = ({ title, settings }) => {
  return (
    <ColorsInjector borderColor={settings.borderColor}>
      <section data-component="blog-quote" className={styles.quotes}>
        <ColorsInjector fill={settings.fill}>
          <svg
            width="20"
            height="46"
            viewBox="0 0 20 46"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.0207 46C9.76023 45.6618 9.53531 45.264 9.34591 44.8064C11.9502 43.2747 13.7259 41.9319 14.673 40.7782C15.5963 39.6443 16.058 38.8287 16.058 38.3313C16.058 38.033 15.6318 37.5058 14.7795 36.7499C13.9035 36.0138 13.4655 35.2977 13.4655 34.6015C13.4655 33.3681 13.9508 32.1646 14.9215 30.9909C15.4187 30.3742 15.9633 30.0659 16.5552 30.0659C17.2891 30.0659 17.9876 30.4339 18.6505 31.17C19.5502 32.1646 20 33.4178 20 34.9297C20 36.2824 19.6212 37.5953 18.8636 38.8684C18.0823 40.1416 16.9103 41.4147 15.3477 42.6879C14.5191 43.3443 12.7434 44.4484 10.0207 46Z" />
            <path d="M0 44.8599C0.0947035 45.1384 0.295947 45.4567 0.603732 45.8147C3.61055 44.5615 6.01364 42.9104 7.813 40.8614C9.58868 38.8324 10.4765 36.7834 10.4765 34.7146C10.4765 33.1629 10.0622 31.9197 9.23355 30.9847C8.64165 30.3282 7.94322 30 7.13824 30C6.45165 30 5.8124 30.3282 5.22051 30.9847C4.3445 31.9594 3.9065 33.0535 3.9065 34.267C3.9065 34.7046 4.02488 35.1423 4.26164 35.5799C4.38002 35.7788 4.74699 36.117 5.36256 36.5944C5.95446 37.0918 6.29775 37.42 6.39246 37.5791C6.53451 37.8179 6.60554 38.0765 6.60554 38.355C6.60554 39.8867 4.40369 42.055 0 44.8599Z" />
          </svg>
        </ColorsInjector>
        <Typography data-selector="title" {...settings.title}>
          {title}
        </Typography>
      </section>
    </ColorsInjector>
  );
};

const BlogVideo = ({ src, previewPhotoSrc }) => (
  <section data-component="blog-video">
    <ResponsiveVideoPlayer src={src} previewPhotoSrc={previewPhotoSrc} />
  </section>
);

const BlogButton = ({ buttonName, buttonLink, settings }) => (
  <section data-component="blog-button">
    <Button href={buttonLink} label={buttonName} type={settings.buttonType} />
  </section>
);

const BlogText = ({ title, settings }) => {
  return (
    <section data-component="blog-text">
      <Typography {...settings.title}>{title}</Typography>
    </section>
  );
};

const Socials = ({ settings }) => {};

export const BlogPage = ({
  title,
  photoSource,
  dateText,
  categoryLabel,
  categoryColor,
  categoryBorderColor,
  categoryBackground,
  settings,
  contentData: content,
}) => {
  const socials = [
    {
      renderIcon: (color) => (
        <svg
          data-component="social-icon"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ColorsInjector stroke={color}>
            <path
              d="M14 5.29602H14.75V4.54602V1.79002V1.14352L14.1106 1.04822C13.8171 1.00448 12.9131 0.917969 11.8722 0.917969C10.6419 0.917969 9.54015 1.34243 8.75255 2.21157C7.97195 3.07299 7.57381 4.28902 7.57381 5.74058V7.41797H6H5.25V8.16797V11.249V11.999H6H7.57381V19.0013V19.7513H8.32381H11.1729H11.9229V19.0013V11.9997H13.4027H14.0715L14.1478 11.3353L14.5018 8.25429L14.5978 7.41869H13.7567H11.9222V6.04664C11.9226 5.62384 11.9847 5.46777 12.0258 5.41326C12.0258 5.41321 12.0259 5.4131 12.026 5.41293C12.0307 5.4057 12.1028 5.29602 12.5395 5.29602H14Z"
              stroke-width="1.5"
            />
          </ColorsInjector>
        </svg>
      ),
    },
    {
      renderIcon: (color) => (
        <svg
          data-component="social-icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ColorsInjector stroke={color}>
            <path
              d="M1.22949 18.9999H5.08697V6.85487H1.22949V18.9999Z"
              stroke-width="1.3"
            />
          </ColorsInjector>
          <ColorsInjector stroke={color}>
            <path
              d="M3.13274 5.19722H3.15823C4.504 5.19722 5.34074 4.26428 5.34074 3.09819C5.31549 1.9065 4.504 1 3.18349 1C1.86326 1 1 1.9065 1 3.09819C1 4.26428 1.83874 5.19722 3.13274 5.19722Z"
              stroke-width="1.3"
            />
          </ColorsInjector>
          <ColorsInjector stroke={color}>
            <path
              d="M15.1415 18.9999H19V12.0354C19 8.30519 17.0967 6.5698 14.5575 6.5698C12.5078 6.5698 11.5927 7.75025 11.08 8.5759V6.85493H7.22074C7.27246 7.99429 7.22074 19 7.22074 19H11.08V12.2172C11.08 11.8532 11.1065 11.4924 11.208 11.2329C11.4872 10.5064 12.121 9.75629 13.1875 9.75629C14.584 9.75629 15.1415 10.8703 15.1415 12.5023V18.9999Z"
              stroke-width="1.3"
            />
          </ColorsInjector>
        </svg>
      ),
    },
    {
      renderIcon: (color) => (
        <svg
          data-component="social-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ColorsInjector stroke={color} fill={color}>
            <path
              d="M19 8H10C8.89543 8 8 8.89543 8 10V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V10C21 8.89543 20.1046 8 19 8Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </ColorsInjector>
          <ColorsInjector stroke={color}>
            <path
              d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </ColorsInjector>
        </svg>
      ),
    },
  ];

  return (
    <ColorsInjector background={settings.backgroundColor}>
      <main data-theme={settings.theme} className={styles.page}>
        <ContentContainer className={styles.wrapper}>
          <div data-selector="left" className={styles.left}>
            <div
              data-selector="intro-category-date"
              className={styles.introCategoryDate}
            >
              <div
                data-component="category-card"
                className={styles.categoryCard}
                style={{
                  color: categoryColor,
                  backgroundColor: categoryBackground,
                  borderColor: categoryBorderColor,
                }}
              >
                {categoryLabel}
              </div>
              <Typography data-selector="date" {...settings.createdAt}>
                {dateText}
              </Typography>
            </div>
            <Typography
              data-selector="title"
              className={styles.title}
              as={"h1"}
              {...settings.title}
            >
              {title}
            </Typography>
            <div data-selector="intro-socials" className={styles.introSocials}>
              {socials.map(({ renderIcon }, index) => (
                <ColorsInjector
                  background={settings.socialBackgroundColor}
                  backgroundHover={settings.socialBackgroundColorHover}
                  borderColor={settings.socialBorderColor}
                  borderHoverColor={settings.socialBorderColorHover}
                >
                  <button
                    data-selector="social-button"
                    style={{
                      borderRadius: settings.socialBorderRadius,
                    }}
                    key={index}
                    className={styles.social}
                  >
                    {renderIcon(settings.socialIconColor)}
                  </button>
                </ColorsInjector>
              ))}
            </div>
          </div>
          <div data-selector="constructor-blog" className={styles.constructor}>
            <div data-selector="photo-wrapper" className={styles.photoWrapper}>
              <img src={photoSource} alt="" />
            </div>
            {content?.map(({ blockType, ...blockContent }, index) => {
              switch (blockType) {
                case "text":
                  return (
                    <BlogText
                      key={index}
                      settings={settings.blockText}
                      {...blockContent}
                    />
                  );
                case "title":
                  return (
                    <BlogText
                      key={index}
                      settings={settings.blockTitle}
                      {...blockContent}
                    />
                  );
                case "button":
                  return (
                    <BlogButton
                      key={index}
                      settings={settings.blockButton}
                      {...blockContent}
                    />
                  );
                case "quote":
                  return (
                    <BlogQuote
                      key={index}
                      settings={settings.blockQuote}
                      {...blockContent}
                    />
                  );
                case "video":
                  return (
                    <BlogVideo
                      key={index}
                      settings={settings.blockVideo}
                      {...blockContent}
                    />
                  );
                case "slider":
                  return (
                    <BlogSlider
                      key={index}
                      settings={settings.blockSlider}
                      {...blockContent}
                    />
                  );
                case "list":
                  return (
                    <BlogList
                      key={index}
                      settings={settings.blockList}
                      {...blockContent}
                    />
                  );
                case "image":
                  return <BlogImage key={index} {...blockContent} />;
                default:
                  return null;
              }
            })}
          </div>
        </ContentContainer>
      </main>
    </ColorsInjector>
  );
};
