import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import { TableContext } from "../index";

const HeaderRow = ({ columns, hasActions }) => {
  const { updateWidth } = useContext(TableContext);
  const [cols, setCols] = useState();

  useEffect(() => {
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
          auto={column.auto}
          resizable={column.resizable}
        />
      );
    });
    if (hasActions) {
      updateWidth("select", 48);
      mappedColumns.unshift(
        <th
          className="head select"
          key="select-header"
          style={{ width: `48px` }}
        >
          <span className="header-divider" />
        </th>
      );
    }
    setCols(mappedColumns);
  }, []);

  return <tr className="inner-table-row inner-table-row-head">{cols}</tr>;
};

HeaderRow.propTypes = {
  columns: PropTypes.array.isRequired,
  hasActions: PropTypes.bool
};

export default HeaderRow;
