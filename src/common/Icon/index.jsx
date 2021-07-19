import React from "react";
import PropTypes from "prop-types";

const Icon = ({ name, regular, solid, duotone, brand, label, tag }) => {
  const style = regular
    ? "far"
    : solid
    ? "fas"
    : duotone
    ? "fad"
    : brand
    ? "fab"
    : "fal";

  return (
    <i className={`${style} ${tag} fa-${name} pt-icon ${label}`}>
      <style jsx="true">{`
        .pt-icon::before {
          vertical-align: middle;
        }
      `}</style>
    </i>
  );
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  regular: PropTypes.bool,
  solid: PropTypes.bool,
  duotone: PropTypes.bool,
  brand: PropTypes.bool,
  label: PropTypes.string,
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "p", ""])
};

Icon.defaultProps = {
  regular: false,
  solid: false,
  duotone: false,
  brand: false,
  string: ""
};

export default Icon;
