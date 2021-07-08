import React from "react";
import PropTypes from "prop-types";

const Badge = ({ number }) => {
  return (
    <div className="badge-atom">
      {number}
      <style jsx="true" global="true">
        {`
          .badge-atom {
            display: inline-block;
            font-size: 0.55rem;
            font-family: Halyard Micro;
            color: white;
            background-color: #ff6976;
            border-radius: 500px;
            padding: 0.55em;
            line-height: 0.55em;
          }
        `}
      </style>
    </div>
  );
};
Badge.propTypes = {
  number: PropTypes.string.isRequired
};

export default Badge;
