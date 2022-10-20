import { useState } from "react";
import { mediaQueries } from "../utils/constants";
import useMediaQuery from "./useMediaQuery";

export const useMobilePaginationButton = ({ items, type = "default" }) => {
  const minTablet = useMediaQuery(mediaQueries.minTablet);
  const [clicked, setClicked] = useState(false);

  if (minTablet) {
    return {
      showButton: false,
      currentItems: items,
    };
  }

  return {
    buttonProps: {
      type,
      onClick: () => setClicked(true),
    },
    showButton: !clicked,
    currentItems: clicked ? items : items.slice(0, 2),
  };
};
