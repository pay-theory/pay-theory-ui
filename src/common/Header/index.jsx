import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

const Header = ({ header, subheader, leadingIcon, trailingIcon, width }) => {
  return (
    <div className="pt-header" style={{ width: width ? width : "auto" }}>
      <span className="header-start">
        {leadingIcon ? (
          <span className="header-leading-icon">
            <Icon name={leadingIcon} solid />{" "}
          </span>
        ) : (
          ""
        )}
        <span className="header-text">
          {header ? <h4 className="strong">{header}</h4> : ""}
          {subheader ? <h5 className="alt-text">{subheader}</h5> : ""}
        </span>
      </span>
      {trailingIcon ? (
        <span className="header-trailing-icon">
          <Icon name={trailingIcon} />{" "}
        </span>
      ) : (
        ""
      )}
      <style jsx="true" global="true">
        {`
          .pt-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .pt-header .header-start {
            display: flex;
          }

          .pt-header .header-start .header-text {
            display: flex;
            flex-direction: column;
          }

          .pt-header .header-leading-icon,
          .pt-header .header-trailing-icon {
            height: 40px;
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .pt-header .header-leading-icon {
            border-radius: 16px;
            background: var(--grey-2);
            color: var(--grey);
            margin-right: 12px;
          }
        `}
      </style>
    </div>
  );
};
Header.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  leadingIcon: PropTypes.string,
  trailingIcon: PropTypes.string,
  width: PropTypes.string
};

export default Header;
