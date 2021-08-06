import React from "react";
import PropTypes from "prop-types";
import { formatFee } from "../../generalUtils";

const CurrencyCol = ({ className, row, col, content }) => {
  return (
    <td
      className={`cell currency ${className}`}
      key={`${className}-${row}-${col}`}
      data-testid="unlinked-column"
    >
      <p className="content">
        <span className="grey">$</span>
        <span className="fee">{formatFee(content)}</span>
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
