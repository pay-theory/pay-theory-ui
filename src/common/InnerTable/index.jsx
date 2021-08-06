import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

import * as children from "./children";

export const TableContext = createContext();

const InnerTable = ({ groupActions, rows, columns, id }) => {
  const [selected, setSelected] = useState({});
  const hasActions = groupActions ? true : false;

  return (
    <TableContext.Provider value={{ selected, setSelected, id }}>
      <div id={id} className="table-wrapper">
        {hasActions ? (
          <children.ActionBar actions={groupActions} rows={rows} />
        ) : (
          ""
        )}
        <table className="inner-table" style={{ width: `10px` }}>
          <thead className="table-head">
            <children.HeaderRow columns={columns} hasActions={hasActions} />
          </thead>
          <tbody>
            {rows.map((item, rowNum) => {
              return (
                <children.Row
                  columns={item.columns}
                  itemKey={item.key}
                  key={`${item.key}-row-${rowNum}`}
                  row={rowNum}
                  rowObject={item.item}
                  hasActions={hasActions}
                />
              );
            })}
          </tbody>
          <style global="true" jsx="true">
            {`
              .inner-table {
                border-collapse: collapse;
                table-layout: fixed;
                width: 100%;
                cursor: default;
                display: table;
              }

              .inner-table-row-head {
                border-bottom: 1px solid var(--black-opaque-8);
                text-transform: capitalize;
                height: 40px !important;
                background: var(--grey-3);
              }

              .inner-table-row {
                height: 48px;
              }

              .inner-table-row:hover:not(.inner-table-row-head) {
                background: var(--grey-3);
              }

              .inner-table-row .head {
                font-size: 11pt;
                text-align: left;
              }

              .inner-table-row .head,
              .inner-table-row .cell {
                white-space: nowrap;
                min-width: 50px;
                padding: 0px 10px !important;
                vertical-align: inherit;
                position: relative;
                overflow: hidden;
                display: table-cell;
              }

              .inner-table-row .cell:last-child {
                border-bottom-right-radius: 15px;
                border-top-right-radius: 15px;
              }

              .inner-table-row .cell:first-child {
                border-bottom-left-radius: 15px;
                border-top-left-radius: 15px;
              }

              /*Styling the dividers*/
              .inner-table-row .cell:not(:last-child)::after {
                content: " ";
                position: absolute;
                right: 0px;
                top: 25%;
                height: 24px;
                border-left: 1px solid var(--black-opaque-8);
              }

              /* Styling the Header Di*/
              .inner-table-row .head .header-divider {
                position: absolute;
                right: -10px;
                top: 25%;
                height: 24px;
                width: 20px;
              }

              .inner-table-row .head .header-divider::after {
                content: " ";
                position: absolute;
                right: 10px;
                top: 0px;
                height: 24px;
                border-left: 1px solid var(--black-opaque-8);
              }

              .inner-table-row .head:not(.select) .header-divider:hover {
                cursor: col-resize;
              }

              .inner-table-row .head:not(.select) .header-divider:hover::after {
                border-left: 1px solid var(--black);
              }

              .inner-table-row .numeric {
                text-align: right;
                margin-right: 15px;
              }

              /* Styling the Link Col*/
              .cell .link {
                cursor: pointer;
                color: var(--pt-purple);
                text-decoration: none;
              }

              /* Styling the Action Col*/
              .cell.action {
                min-width: 48px;
                padding: 0px !important;
                overflow: visible;
              }
              .cell.action .content {
                padding: 4px;
              }

              /* Styling the Chip Col*/
              .cell.chip .content {
                display: flex;
                align-items: center;
                justify-content: center;
              }

              /* Styling the Currenct Col*/
              .cell.currency .content {
                display: flex;
                justify-content: space-between;
              }

              /* Styling the row Selection*/
              .cell.select .content {
                padding: 4px;
              }

              .inner-table-row .cell.select {
                padding: 0px !important;
              }

              /* Styling the Action Bar*/
              .table-wrapper .action-bar {
                display: flex;
              }
              .table-wrapper .action-bar > * {
                padding: 4px;
              }
            `}
          </style>
        </table>
      </div>
    </TableContext.Provider>
  );
};

InnerTable.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  groupActions: PropTypes.array,
  id: PropTypes.string.isRequired
};

export default InnerTable;
