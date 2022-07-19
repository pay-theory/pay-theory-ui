import React from "react";
import PropTypes from "prop-types";
import Icon from "../../Icon";

const IconCol = ({ className, row, col, icon, color }) => {
  return (
    <td
      className={`cell icon ${className}`}
      key={`${className}-${row}-${col}`}
      data-testid="unlinked-column"
    >
      <span className={`content`} style={{ color: `var(--${color})` }}>
        <Icon name={icon} />
      </span>
    </td>
  );
};

IconCol.propTypes = {
  className: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  content: PropTypes.any
};

export default IconCol;
