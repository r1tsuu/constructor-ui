import React from "react";

import styles from "./PhotoQuote.module.scss";

export const QuotesIcon = ({ isEnd = false }) => (
  <svg
    viewBox="0 0 88 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-is-end={isEnd}
    className={styles.quotesIcon}
  >
    <path
      d="M58.142 62.1005C31.9224 40.9743 64.9518 11.7555 83.2143 1.5C83.3175 1.70718 83.6476 2.30801 84.1429 3.05386C71.1425 11.7555 63.7136 21.0786 65.2613 34.131C66.809 47.1834 82.5952 51.2235 86.0001 52.4666C83.8334 71.4236 65.856 68.3159 58.142 62.1005Z"
      fill="#A07F5D"
    />
    <path
      d="M10.7397 62.1005C-15.48 40.9743 17.5494 11.7555 35.812 1.5C35.9152 1.70718 36.2453 2.30801 36.7406 3.05386C23.7401 11.7555 16.3113 21.0786 17.859 34.131C19.4066 47.1834 35.1929 51.2235 38.5978 52.4666C36.431 71.4236 18.4536 68.3159 10.7397 62.1005Z"
      fill="#A07F5D"
    />
  </svg>
);
