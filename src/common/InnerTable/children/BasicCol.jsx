import React from "react";
import PropTypes from "prop-types";

const BasicCol = ({ className, row, col, content, color }) => {
  return (
    <td
      className={`cell ${className}`}
      key={`${className}-${row}-${col}`}
      data-testid="unlinked-column"
    >
      {typeof content === "string" ? (
        <p className={`content`} style={{ color: `var(--${color})` }}>
          {content}
        </p>
      ) : (
        <span className={`content`} style={{ color: `var(--${color})` }}>
          {content}
        </span>
      )}
    </td>
  );
};

BasicCol.propTypes = {
  className: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  content: PropTypes.any
};

export default BasicCol;
