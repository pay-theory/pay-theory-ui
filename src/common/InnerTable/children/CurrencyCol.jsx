import React from "react";
import PropTypes from "prop-types";
import { formatFee } from "../../generalUtils";

const CurrencyCol = ({ className, row, col, content, color, parenthesis }) => {
  const formatContent = (item) => {
    // if no value we want a dash in the cell
    if (!item) return "-";

    let number = `$${formatFee(item)}`;
    if (parenthesis) return `(${number})`;
    return number;
  };
  return (
    <td
      className={`cell currency ${className} ${content < 0 ? "negative" : ""}`}
      key={`${className}-${row}-${col}`}
      data-testid="unlinked-column"
    >
      <p className={`content`} style={{ color: `var(--${color})` }}>
        {formatContent(content)}
      </p>
    </td>
  );
};

CurrencyCol.propTypes = {
  className: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  content: PropTypes.number
};

export default CurrencyCol;
