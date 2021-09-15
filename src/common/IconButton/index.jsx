import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Tooltip from "../Tooltip";

const IconButton = ({
  brand,
  icon,
  disabled,
  onClick,
  submit,
  reset,
  label,
  left,
  right,
  bottom
}) => {
  const button = (
    <button
      className={`pt-icon-button ${disabled ? "disabled" : ""}`}
      data-testid={icon}
      disabled={disabled}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={submit ? "submit" : reset ? "reset" : "button"}
    >
      <Icon name={icon} brand={brand} />
      <style jsx="true">{`
        .pt-icon-button {
          align-self: flex-start;
          outline: 0;
          height: 40px;
          width: 40px;
          border-radius: 12px;
          border: 0px solid transparent;
          font-size: 18px;
          color: var(--black);
          background: transparent;
          transition: background 0.15s ease-in-out, color 0.15s ease-in-out;
        }

        .pt-icon-button:not(.disabled):hover {
          color: var(--pt-purple);
          background: var(--grey-1-opaque);
          transition: background 0.15s ease-in-out, color 0.15s ease-in-out;
          cursor: pointer;
        }

        .pt-icon-button.disabled {
          color: var(--grey);
        }
      `}</style>
    </button>
  );

  const createButton = () => {
    if (label) {
      return (
        <Tooltip text={label} left={left} right={right} bottom={bottom}>
          {button}
        </Tooltip>
      );
    } else {
      return <span> {button} </span>;
    }
  };
  return createButton();
};

IconButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  submit: PropTypes.bool,
  reset: PropTypes.bool,
  brand: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool
};

export default IconButton;
