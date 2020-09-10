import React, { useState } from "react";
import PropTypes from "prop-types";

import Checkbox from "../../Checkbox";

import Header from "./Header";

const HeaderRow = (props) => {

  const columns = props.columns.map((column, col) => {
    return (
      <Header
        className={`${column.className} ${column.sortable ? "sortable" : ""}`}
        itemKey={col}
        key={`header-${col}`}
        label={column.label}
        sort={column.sortable ? props.sort : null}
        setSort={column.sortable ? props.setSort : null}
      />
    );
  });
  if (props.hasActions) {
    columns.push(
      <Header
        className="actions"
        itemKey="actions"
        key="header-actions"
        label="actions"
      />
    );
  }
  if (props.select) {
    const { selected, setSelected, tableData } = props.select;
    columns.unshift(
      <span className="table-select" key="header-select">
        <Checkbox
          id="header-checkbox"
          indeterminate={
            selected.length < tableData.length && selected.length > 0
              ? true
              : undefined
          }
          inputProps={{
            "data-testid": "header-select-item",
            checked:
              selected.length > 0 && selected.length === tableData.length,
            onChange: (e) => {
              if (e.target.checked) {
                setSelected(Array.from(Array(tableData.length).keys()));
              } else {
                setSelected([]);
              }
            }
          }}
        />
      </span>
    );
  }
  return <div className="inner-table-row inner-table-row-head">{columns}</div>;
};

HeaderRow.propTypes = {
  columns: PropTypes.array.isRequired,
  hasActions: PropTypes.bool,
  select: PropTypes.object,
  setSort: PropTypes.func,
  sort: PropTypes.object
};

export default HeaderRow;
