import React from "react";
import PropTypes from "prop-types";

const LinkCol = ({ className, row, col, view, content }) => {
  return (
    <td
      className={`${className} cell`}
      key={`${className}-${row}-${col}`}
      data-testid="linked-column"
    >
      <p onClick={view} className="link content">
        {content}
      </p>
    </td>
  );
};

LinkCol.propTypes = {
  className: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  view: PropTypes.func.isRequired
};

export default LinkCol;
