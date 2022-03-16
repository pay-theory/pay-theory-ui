import React from "react";
import PropTypes from "prop-types";

const BasicCol = ({ className, row, col, content, grey }) => {
  return (
    <td
      className={`cell ${className}`}
      key={`${className}-${row}-${col}`}
      data-testid="unlinked-column"
    >
      {typeof content === "string" ? (
        <p className={`content ${grey ? "grey" : ""}`}>{content}</p>
      ) : (
        <span className={`content ${grey ? "grey" : ""}`}>{content}</span>
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
