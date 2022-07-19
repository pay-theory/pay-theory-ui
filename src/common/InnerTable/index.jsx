import React, { createContext } from "react";
import PropTypes from "prop-types";

import * as children from "./children";

export const TableContext = createContext();

const InnerTable = ({
  selected,
  setSelected,
  rows,
  columns,
  id,
  emptyMessage
}) => {
  const hasActions = selected && setSelected;

  return (
    <TableContext.Provider
      value={{
        selected,
        setSelected,
        id
      }}
    >
      <table className="inner-table">
        <thead className="table-head">
          <children.HeaderRow
            rows={rows}
            columns={columns}
            hasActions={hasActions}
          />
        </thead>
        <tbody>
          {rows.length === 0 ||
            rows.map((item, rowNum) => {
              return (
                <children.Row
                  columns={item.columns}
                  hasActions={hasActions}
                  itemKey={item.key}
                  key={`${item.key}-row-${rowNum}`}
                  row={rowNum}
                  rowObject={item.item}
                  viewRow={item.viewRow}
                  color={item.color}
                />
              );
            })}
        </tbody>
        <style global="true" jsx="true">
          {`
            .inner-table {
              border-collapse: collapse;
              table-layout: fixed;
              cursor: default;
              display: table;
              width: 100%;
            }

            .inner-table .head:first-child {
              border-radius: 8px 0 0 8px;
            }

            .inner-table .head:last-child {
              border-radius: 0 8px 8px 0;
            }

            .inner-table-wrapper {
              overflow: auto;
              width: 100%;
              -ms-overflow-style: none;
              scrollbar-width: none;
            }

            .inner-table-wrapper::-webkit-scrollbar {
              display: none;
            }

            .inner-table-row-head {
              text-transform: capitalize;
              height: 48px !important;
              background: var(--grey-3);
            }

            .inner-table-row {
              height: 48px;
            }

            .inner-table-row.clickable {
              cursor: pointer;
            }

            .inner-table-row:hover:not(.inner-table-row-head) {
              background: var(--purple-light);
            }

            .inner-table-row .head {
              font-size: 11pt;
              text-align: left;
            }

            .inner-table-row .head.dynamic .content {
              display: flex;
              align-items: flex-end;
              cursor: pointer;
            }

            .inner-table-row .head.dynamic .content .pt-icon {
              padding-left: 8px;
              color: var(--grey);
              cursor: pointer;
            }

            .inner-table-row .head,
            .inner-table-row .cell {
              white-space: nowrap;
              min-width: 50px;
              padding: 0px 10px;
              vertical-align: inherit;
              position: relative;
              display: table-cell;
            }

            .inner-table-row .head .content,
            .inner-table-row .cell .content {
              overflow: hidden;
            }

            .inner-table-row .cell:last-child {
              border-bottom-right-radius: 8px;
              border-top-right-radius: 8px;
            }

            .inner-table-row .cell:first-child {
              border-bottom-left-radius: 8px;
              border-top-left-radius: 8px;
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

            /* Styling the Header Divider*/
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

            .inner-table-row .numeric {
              text-align: right;
              margin-right: 15px;
            }

            .inner-table-row.inner-table-row-head .head.select {
              padding: 4px;
            }

            /* Styling the Link Col*/
            .cell.link .pt-button {
              margin-bottom: -4px;
            }

            .cell.link {
              overflow: hidden;
            }

            /* Styling the Action Col*/
            .cell.action {
              min-width: 48px;
              padding: 0px !important;
              overflow: visible;
            }
            .cell.action .content {
              padding: 4px;
              display: flex;
            }

            /* Styling the Chip Col*/
            .cell.chip .content {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            /* Styling the Click To Copy Col*/

            .cell.click-to-copy {
              overflow: visible;
            }

            .cell.click-to-copy .content {
              display: flex;
              align-items: center;
            }

            /* Styling the Currenct Col*/
            .cell.currency .content,
            .head.currency .content {
              display: flex;
              justify-content: flex-end;
            }

            .cell.currency.negative .content span {
              color: var(--red) !important;
            }

            /* Styling the Icon Col*/
            .cell.icon .content {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            /* Styling the row Selection*/
            .cell.select .content {
              padding: 4px;
            }

            .inner-table-row .cell.select {
              padding: 0px !important;
            }

            .inner-table-row .select {
              position: sticky;
            }

            /* Styling the Action Bar*/
            .table-wrapper .action-bar {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .table-wrapper .action-bar .actions > * {
              padding: 4px;
            }

            .table-wrapper .action-bar .actions {
              display: flex;
            }

            /* Styling the PayMethod Col*/
            .pay-theory-card-badge {
              background-repeat: no-repeat;
              background-size: 100%;
              background-position: 50%;
              min-height: 24px;
              min-width: 38px;
              align-self: center;
              margin-right: 5px;
            }

            .payment-account-detail {
              display: flex;
              align-items: center;
            }

            .pagination-results-div {
              display: flex;
              align-items: center;
            }

            .results-per-page {
              display: flex;
              height: 48px;
              align-items: center;
            }
            .results-per-page > * {
              margin-right: 16px;
            }

            .empty-message {
              text-align: center;
              padding: 8px;
            }

            .inner-table thead {
              position: sticky;
              top: 0;
              z-index: 2;
            }

            /* Styling the ActionMenu Col*/
            .cell.action-menu .content .action-menu-elipses {
              width: 48px;
              height: 42px;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .cell.action-menu {
              padding: 0px;
              position: relative;
            }

            .cell.action-menu .content {
              overflow: hidden;
              position: absolute;
              top: 2px;
              right: 0;
              display: flex;
              height: 44px;
              border: 1px solid transparent;
            }
            .cell.action-menu .content.disabled .action-menu-elipses,
            .cell.action-menu .content:hover .action-menu-elipses {
              color: var(--grey);
            }
            .cell.action-menu .content .row-actions {
              display: flex;
              padding: 0px 0px 0px 2px;
              display: none;
            }

            .cell.action-menu .content:hover {
              background-color: var(--white);
              border: 1px solid var(--black);
              border-radius: 8px;
              overflow: visible;
              width: auto;
            }

            .cell.action-menu .content:hover .row-actions {
              display: flex;
            }
          `}
        </style>
      </table>
      {rows.length > 0 || (
        <h4 className="empty-message grey">{emptyMessage}</h4>
      )}
    </TableContext.Provider>
  );
};

InnerTable.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  groupActions: PropTypes.array,
  id: PropTypes.string.isRequired,
  paginationHook: PropTypes.object,
  emptyMessage: PropTypes.string,
  resultsPerPageHook: PropTypes.object
};

InnerTable.defaultProps = {
  emptyMessage: "No Data Available"
};

export default InnerTable;
