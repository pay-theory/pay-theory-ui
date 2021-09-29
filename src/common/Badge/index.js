import React from "react";
import PropTypes from "prop-types";

const Badge = ({ number, color }) => {
  return (
    <div className="pt-badge">
      <p className="badge-atom" style={{ backgroundColor: `var(--${color})` }}>
        {number}
        <style jsx="true" global="true">
          {`
            .badge-atom {
              display: inline-block;
              font-size: 0.55rem;
              color: white;
              border-radius: 500px;
              padding: 0.55em;
              line-height: 0.55em;
              font-weight: var(--medium-weight);
            }

            .pt-badge {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </p>
    </div>
  );
};
Badge.propTypes = {
  number: PropTypes.string.isRequired,
  color: PropTypes.string
};

Badge.defaultProps = {
  color: "raspberry"
};

export default Badge;
