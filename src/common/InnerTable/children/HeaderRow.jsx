import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";

const HeaderRow = ({ columns, hasActions }) => {
  const mappedColumns = columns.map((column, col) => {
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
      />
    );
  });
  if (hasActions) {
    mappedColumns.unshift(
      <th className="head select" key="select-header" style={{ width: `48px` }}>
        <span className="header-divider" />
      </th>
    );
  }
  return (
    <tr className="inner-table-row inner-table-row-head">{mappedColumns}</tr>
  );
};

HeaderRow.propTypes = {
  columns: PropTypes.array.isRequired,
  hasActions: PropTypes.bool
};

export default HeaderRow;
