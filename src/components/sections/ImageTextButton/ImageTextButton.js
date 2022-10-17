import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { mediaQueries } from "../../../utils/constants";
import { Button, Typography } from "../../shared";

import "./ImageTextButton.scss";

export const ImageTextButton = ({
  theme,
  isReverse,
  buttonType,
  title,
  subTitle,
  description,
  photoSource,
  photoMobileSource,
  buttonName,
  colors,
  typographies,
  buttonPosition,
}) => {
  const isMinLaptop = useMediaQuery(mediaQueries.minLaptop);
  return <section className="image-text-button"></section>;
};
