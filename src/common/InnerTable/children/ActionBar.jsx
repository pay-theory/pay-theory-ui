import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Checkbox from "../../Checkbox";
import IconButton from "../../IconButton";
import { TableContext } from "../index";
import Pagination from "../../Pagination";

const getAllItems = (rows) => {
  const allItems = {};
  rows.forEach((row, index) => {
    allItems[`row${index}`] = row.item;
  });
  return allItems;
};

const ActionBar = ({ actions, rows, paginationHook }) => {
  const [allItems] = useState(getAllItems(rows));
  const context = useContext(TableContext);
  const [indeterminate, setIndeterminate] = useState(false);

  const actionButtons = actions.map((item, index) => {
    return (
      <IconButton
        label={item.label}
        icon={item.icon}
        bottom
        key={`${item.icon}-${index}`}
        onClick={() => {
          item.action(Object.values(context.selected));
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
      {actions.length > 0 ? (
        <div className="actions">
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
        </div>
      ) : (
        <div />
      )}
      {paginationHook ? (
        <Pagination paginationHook={paginationHook} />
      ) : (
        <div />
      )}
    </span>
  );
};

ActionBar.propTypes = {
  rows: PropTypes.array.isRequired,
  actions: PropTypes.array,
  paginationHook: PropTypes.object
};

ActionBar.defaultProps = {
  actions: []
};

export default ActionBar;
