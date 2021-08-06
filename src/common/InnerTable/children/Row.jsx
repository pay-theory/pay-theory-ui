import React, { useContext } from "react";
import PropTypes from "prop-types";

import BasicCol from "./BasicCol";
import ActionCol from "./ActionCol";
import LinkCol from "./LinkCol";
import ChipCol from "./ChipCol";
import CurrencyCol from "./CurrencyCol";
import Checkbox from "../../Checkbox";
import { TableContext } from "../index";

const generateBasicCol = (column, col, row, itemKey) => {
  return (
    <BasicCol
      className={column.className}
      col={col}
      content={column.content}
      key={`${itemKey}-column-${col}`}
      row={row}
    />
  );
};

const generateLinkCol = (column, col, row, itemKey) => {
  return (
    <LinkCol
      className={column.className}
      col={col}
      content={column.content}
      key={`${itemKey}-column-${col}`}
      row={row}
      view={column.view}
    />
  );
};

const generateActionCol = (column, col, row, itemKey) => {
  return (
    <ActionCol
      className={column.className}
      col={col}
      key={`${itemKey}-column-${col}`}
      row={row}
      label={column.label}
      icon={column.icon}
      action={column.action}
      rowObject={column.rowObject}
    />
  );
};

const generateChipCol = (column, col, row, itemKey) => {
  return (
    <ChipCol
      className={column.className}
      col={col}
      key={`${itemKey}-column-${col}`}
      row={row}
      text={column.text}
      color={column.color}
      textColor={column.textColor}
    />
  );
};

const generateCurrencyCol = (column, col, row, itemKey) => {
  return (
    <CurrencyCol
      className={column.className}
      col={col}
      content={column.content}
      key={`${itemKey}-column-${col}`}
      row={row}
    />
  );
};

const colGenerator = {
  link: generateLinkCol,
  basic: generateBasicCol,
  chip: generateChipCol,
  currency: generateCurrencyCol,
  action: generateActionCol
};

const Row = ({ row, itemKey, hasActions, columns, rowObject }) => {
  const selectKey = `row${row}`;
  const context = useContext(TableContext);

  const updateSelected = (key, object, isSelected) => {
    const newCopy = { ...context.selected };
    if (isSelected) {
      newCopy[key] = object;
    } else {
      delete newCopy[key];
    }
    context.setSelected(newCopy);
  };

  const mappedColumns = columns.map((column, col) => {
    // eslint-disable-next-line no-unused-vars
    return column.type
      ? colGenerator[column.type](column, col, row, itemKey)
      : colGenerator["basic"](column, col, row, itemKey);
  });

  if (hasActions) {
    mappedColumns.unshift(
      <td
        className="cell select"
        data-testid="select-column"
        key={`${itemKey}-select`}
      >
        <span className="content">
          <Checkbox
            id={`checkbox-${itemKey}`}
            inputProps={{
              "data-testid": "select-item",
              checked: context.selected[selectKey] ? true : false,
              onChange: (e) => {
                updateSelected(selectKey, rowObject, e.target.checked);
              }
            }}
          />
        </span>
      </td>
    );
  }
  return (
    <tr className="inner-table-row" id={`${row}`} key={`${row}-${itemKey}`}>
      {mappedColumns}
    </tr>
  );
};

Row.propTypes = {
  itemKey: PropTypes.string.isRequired,
  hasActions: PropTypes.bool,
  columns: PropTypes.array.isRequired,
  row: PropTypes.number.isRequired,
  rowObject: PropTypes.object.isRequired
};

export default Row;
