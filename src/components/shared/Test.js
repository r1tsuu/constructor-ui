import React from "react";
import PropTypes from "prop-types";

export const Test = ({ isRequired }) => <div>{isRequired}</div>;

Test.propTypes = {
  isRequired: PropTypes.bool,
  changed: PropTypes.oneOf(["asd", "fda"]),
  d: PropTypes.shape({
    d: PropTypes.bool,
  }),
};
