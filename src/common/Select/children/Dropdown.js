import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ items, onClick, reference, value }) => {
  const menuItems = items.map((item, index) => {
    return (
      <p
        onClick={() => {
          if (!item.disabled) {
            onClick(item.value);
          }
        }}
        className={`select-item ${item.disabled ? "disabled" : ""} ${
          item.value === value ? "active" : ""
        }`}
        key={`${item.value}-${item.label}-${index}`}
      >
        {item.label}
      </p>
    );
  });

  return (
    <div ref={reference} className="select-dropdown">
      {menuItems}
    </div>
  );
};

Dropdown.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

export default Dropdown;
