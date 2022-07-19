import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import DynamicHeader from "./DynamicHeader";
import Checkbox from "../../Checkbox";
import { TableContext } from "../index";

const getAllItems = (rows) => {
  const allItems = {};
  rows.forEach((row, index) => {
    allItems[`row${index}`] = row.item;
  });
  return allItems;
};

const HeaderRow = ({ rows, columns, hasActions }) => {
  const context = useContext(TableContext);
  const [indeterminate, setIndeterminate] = useState(false);

  const onChange = (e) => {
    if (e.target.checked) {
      context.setSelected(getAllItems(rows));
    } else {
      context.setSelected({});
    }
  };

  useEffect(() => {
    if (context.selected) {
      if (
        Object.keys(context.selected).length > 0 &&
        Object.keys(context.selected).length !== rows.length
      ) {
        setIndeterminate(true);
      } else {
        setIndeterminate(false);
      }
    }
  }, [context.selected, rows]);

  const createHeaderRow = () => {
    const mappedColumns = columns.map((column, col) => {
      if (column.isDynamic) {
        return (
          <DynamicHeader
            className={`${column.className} ${column.type} ${
              column.sortable ? "sortable" : ""
            }`}
            itemKey={col}
            key={`header-${col}`}
            label={column.label}
            type={column.type}
            width={column.width}
            minWidth={column.minWidth}
            auto={column.auto}
            last={columns.length === col + 1}
            options={column.options}
            selected={column.selected}
            onSelect={column.onSelect}
          />
        );
      }
      return (
        <Header
          className={`${column.className} ${column.type} ${
            column.sortable ? "sortable" : ""
          }`}
          itemKey={col}
          key={`header-${col}`}
          label={column.label}
          type={column.type}
          width={column.width}
          minWidth={column.minWidth}
          auto={column.auto}
          last={columns.length === col + 1}
        />
      );
    });
    if (hasActions) {
      mappedColumns.unshift(
        <th
          className="head select"
          key="select-header"
          style={{ width: `48px` }}
        >
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
          <span className="header-divider" />
        </th>
      );
    }
    return mappedColumns;
  };

  return (
    <tr className="inner-table-row inner-table-row-head">
      {createHeaderRow()}
    </tr>
  );
};

HeaderRow.propTypes = {
  columns: PropTypes.array.isRequired,
  hasActions: PropTypes.bool
};

export default HeaderRow;
