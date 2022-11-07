import React from "react";
import PropTypes from "prop-types";

const Header = ({ className, itemKey, label, type, width, minWidth, last }) => {
  const name = `head ${className} no-select`;
  const setStyle = () => {
    const style = {
      width: ["action", "actionMenu"].includes(type)
        ? "48px"
        : width
        ? `${width}px`
        : "auto",
      minWidth: ["action", "actionMenu"].includes(type) ? "48px" : "96px"
    };
    if (minWidth)
      style.minWidth = `${
        ["action", "actionMenu"].includes(type) ? 48 : minWidth
      }px`;
    if (["action", "actionMenu"].includes(type)) style.maxWidth = "48px";
    return style;
  };
  return (
    <th
      className={name}
      data-testid={`${className.split(/\s/)[0]}-${itemKey}`}
      key={`${className}-${itemKey}`}
      style={setStyle()}
    >
      {type !== "action" && <p className="content">{label}</p>}
      {!last && <span className={`header-divider`} />}
    </th>
  );
};

Header.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.number,
  minWidth: PropTypes.number,
  className: PropTypes.string.isRequired,
  label: PropTypes.string,
  itemKey: PropTypes.any,
  auto: PropTypes.bool,
  resizable: PropTypes.bool
};

export default Header;
