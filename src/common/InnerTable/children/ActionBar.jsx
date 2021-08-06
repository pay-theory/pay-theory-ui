import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Checkbox from "../../Checkbox";
import IconButton from "../../IconButton";
import { TableContext } from "../index";

const getAllItems = (rows) => {
  const allItems = {};
  rows.forEach((row, index) => {
    allItems[`row${index}`] = row.item;
  });
  return allItems;
};

const ActionBar = ({ actions, rows }) => {
  const [allItems] = useState(getAllItems(rows));
  const context = useContext(TableContext);
  const [indeterminate, setIndeterminate] = useState(false);

  const actionButtons = actions.map((item) => {
    return (
      <IconButton
        label={item.label}
        icon={item.icon}
        bottom
        onClick={() => {
          item.action(context.selected);
        }}
      />
    );
  });

  useEffect(() => {
    if (
      Object.keys(context.selected).length > 0 &&
      Object.keys(context.selected).length !== rows.length
    ) {
      setIndeterminate(true);
    } else {
      setIndeterminate(false);
    }
  }, [context.selected, rows]);

  const onChange = (e) => {
    if (e.target.checked) {
      context.setSelected(allItems);
    } else {
      context.setSelected({});
    }
  };

  return (
    <span className="action-bar" data-testid="action-bar">
      <Checkbox
        id={`checkbox-${context.id}`}
        indeterminate={indeterminate}
        inputProps={{
          "data-testid": "select-item",
          checked:
            Object.keys(context.selected).length > 0 &&
            Object.keys(context.selected).length === rows.length,
          onChange: onChange
        }}
      />
      {actionButtons}
    </span>
  );
};

ActionBar.propTypes = {
  rows: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired
};

export default ActionBar;
