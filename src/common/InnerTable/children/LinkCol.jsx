import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button";

const LinkCol = ({ className, row, col, view, content }) => {
  return (
    <td
      className={`${className} cell link`}
      key={`${className}-${row}-${col}`}
      data-testid="linked-column"
    >
      <Button
        onClick={(e) => {
          e.stopPropagation();
          view();
        }}
        label={content}
        text
      />
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
