import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import { PT_COLORS } from "../constants";

const Chip = ({ text, color, textColor, action, actionIcon }) => {
  return (
    <p
      className={`pt-chip no-select`}
      style={{ color: `var(--${textColor})`, background: `var(--${color})` }}
    >
      {text}
      {action ? (
        <span onClick={action}>
          <Icon name={actionIcon} />
        </span>
      ) : (
        ""
      )}
      <style jsx="true">{`
        .pt-chip {
          height: 32px;
          border-radius: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: flex-start;
          padding: 5px 16px;
        }

        .pt-chip .pt-icon {
          margin: 0px 0px 0px 8px;
          cursor: pointer;
        }
      `}</style>
    </p>
  );
};
Chip.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(PT_COLORS),
  textColor: PropTypes.oneOf(["white", "black", "grey-1", "grey"]),
  action: PropTypes.func,
  actionIcon: PropTypes.string
};

Chip.defaultProps = {
  actionIcon: "times",
  color: "grey-2",
  textColor: "black"
};

export default Chip;
