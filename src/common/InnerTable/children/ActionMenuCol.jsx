import React from "react";
import PropTypes from "prop-types";
import IconButton from "../../IconButton";
import Icon from "../../Icon";

const createActions = (actions, rowObject) => {
  return actions.map((action) => {
    return (
      <IconButton
        icon={action.icon}
        label={!action.disabled && action.label}
        bottom
        key={action.label}
        onClick={(e) => {
          e.stopPropagation();
          action.action(rowObject);
        }}
        disabled={action.disabled}
      />
    );
  });
};

const ActionMenuCol = ({ className, row, col, actions, rowObject }) => {
  const disabled = actions.length > 0;
  return (
    <td
      className={`cell action-menu ${className}`}
      data-testid="unlinked-column"
      key={`${className}-${row}-${col}`}
      onClick={e => e.stopPropagation()}
    >
      <span className={`content ${disabled ? "" : "disabled"}`}>
        <div className="row-actions" style={{ left: "-80px" }}>
          {createActions(actions, rowObject)}
        </div>
        <div
          className="action-menu-elipses no-select"
          onClick={(e) => e.stopPropagation()}
        >
          <Icon name="ellipsis" regular />
        </div>
      </span>
    </td>
  );
};

ActionMenuCol.propTypes = {
  className: PropTypes.string.isRequired,
  col: PropTypes.number.isRequired,
  actions: PropTypes.array.isRequired,
  row: PropTypes.number.isRequired,
  rowObject: PropTypes.object.isRequired
};

export default ActionMenuCol;
