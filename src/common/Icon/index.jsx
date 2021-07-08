import React from "react";
import PropTypes from "prop-types";

const Icon = ({ name, regular, solid, duotone, brand }) => {
  const style = regular
    ? "far"
    : solid
    ? "fas"
    : duotone
    ? "fad"
    : brand
    ? "fab"
    : "fal";

  return <i className={`${style} fa-${name} pt-icon ${name}`}></i>;
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  regular: PropTypes.bool,
  solid: PropTypes.bool,
  duotone: PropTypes.bool,
  brand: PropTypes.bool
};

Icon.defaultProps = {
  regular: false,
  solid: false,
  duotone: false,
  brand: false
};

export default Icon;