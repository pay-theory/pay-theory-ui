import React from "react";
import PropTypes from "prop-types";
import IconButton from "../../IconButton";

const ActionCol = ({ className, row, col, label, icon, action, rowObject, disabled }) => {
  return (
    <td
      className={`cell action ${className}`}
      key={`${className}-${row}-${col}`}
      data-testid="unlinked-column"
    >
      <span className="content">
        <IconButton
          label={label}
          icon={icon}
          top
          onClick={() => {
            action(rowObject);
          }}
          disabled={disabled}
        />
      </span>
    </td>
  );
};

ActionCol.propTypes = {
  className: PropTypes.string.isRequired,
  col: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  row: PropTypes.number.isRequired,
  rowObject: PropTypes.object.isRequired,
  disabled: PropTypes.bool
};

export default ActionCol;
