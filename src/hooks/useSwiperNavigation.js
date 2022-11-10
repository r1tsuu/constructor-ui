import { useRef } from "react";

export const useSwiperNavigation = ({ type = "cube-default" }) => {
  const swiperRef = useRef(null);

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return {
    swiperProps: {
      onBeforeInit: handleSwiper,
    },
    arrowProps: {
      prev: {
        isPrev: true,
        onClick: handlePrev,
        type,
      },
      next: {
        onClick: handleNext,
        type,
      },
    },
  };
};