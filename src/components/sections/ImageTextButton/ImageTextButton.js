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
}) => {
  const isMinLaptop = useMediaQuery(mediaQueries.minLaptop);

  const renderTextBlock = () => {
    return <></>;
  };
};
