import React from "react";
import PropTypes from "prop-types";

const PayMethodCol = ({ className, row, col, lastFour, brand, color }) => {
  const brandClasses = {
    VISA: "pay-theory-card-visa",
    DISCOVER: "pay-theory-card-discover",
    MASTERCARD: "pay-theory-card-mastercard",
    AMERICAN_EXPRESS: "pay-theory-card-american-express",
    CASH: "pay-theory-cash-badge",
    ACH: "pay-theory-ach-badge"
  };

  return (
    <td
      className={`cell payment-method ${className}`}
      key={`${className}-${row}-${col}`}
      data-testid="unlinked-column"
    >
      <span className="content">
        <span className="payment-account-detail">
          <span
            className={`pay-theory-card-badge ${
              brandClasses[brand] || "pay-theory-card-default"
            }`}
          />
          <p style={{ color: `var(--${color})` }}>
            {brand === "CASH" ? "CASH" : `••${lastFour}`}
          </p>
        </span>
      </span>
    </td>
  );
};

PayMethodCol.propTypes = {
  className: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  lastFour: PropTypes.string,
  brand: PropTypes.string
};

export default PayMethodCol;
