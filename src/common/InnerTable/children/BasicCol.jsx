import React from "react";
import PropTypes from "prop-types";

const BasicCol = ({ className, row, col, content }) => {
  return (
    <td
      className={`cell ${className}`}
      key={`${className}-${row}-${col}`}
      data-testid="unlinked-column"
    >
      {typeof content === "string" ? (
        <p className="content">{content}</p>
      ) : (
        <span className="content">{content}</span>
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
