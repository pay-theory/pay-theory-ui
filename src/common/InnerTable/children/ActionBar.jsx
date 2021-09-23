import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Checkbox from "../../Checkbox";
import IconButton from "../../IconButton";
import { TableContext } from "../index";
import Pagination from "../../Pagination";
import ChipDropdown from "../../ChipDropdown";

const getAllItems = (rows) => {
  const allItems = {};
  rows.forEach((row, index) => {
    allItems[`row${index}`] = row.item;
  });
  return allItems;
};

const ActionBar = ({ actions, rows, paginationHook, resultsPerPageHook }) => {
  // const [allItems] = useState(getAllItems(rows))
  const context = useContext(TableContext);
  const [indeterminate, setIndeterminate] = useState(false);
  const { totalItems, results, setResults } = resultsPerPageHook || {};

  const selectOptions = [
    {
      value: 10,
      label: "10"
    },
    {
      value: 25,
      label: "25",
      disabled: totalItems < 11
    },
    {
      value: 50,
      label: "50",
      disabled: totalItems < 26
    },
    {
      value: 100,
      label: "100",
      disabled: totalItems < 51
    }
  ];

  const actionButtons = actions.map((item, index) => {
    return (
      <IconButton
        bottom
        disabled={Object.keys(context.selected).length === 0}
        icon={item.icon}
        key={`${item.icon}-${index}`}
        label={Object.keys(context.selected).length === 0 ? "" : item.label}
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
      context.setSelected(getAllItems(rows));
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
      <div className="pagination-results-div">
        {resultsPerPageHook ? (
          <div className="results-per-page">
            <p>Results Per Page:</p>
            <ChipDropdown
              options={selectOptions}
              value={results}
              onChange={(v) => setResults(v)}
              disabled={totalItems < 11}
            />
          </div>
        ) : (
          <div />
        )}
        {paginationHook ? (
          <Pagination paginationHook={paginationHook} />
        ) : (
          <div />
        )}
      </div>
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
