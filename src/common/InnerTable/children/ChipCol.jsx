import React from "react";
import PropTypes from "prop-types";
import Chip from "../../Chip";

const ChipCol = ({ className, row, col, text, color, textColor }) => {
  return (
    <td
      className={`cell chip ${className}`}
      key={`${className}-${row}-${col}`}
      data-testid="unlinked-column"
    >
      <span className="content">
        <Chip text={text} color={color} textColor={textColor} />
      </span>
    </td>
  );
};

ChipCol.propTypes = {
  className: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  textColor: PropTypes.string
};

export default ChipCol;
