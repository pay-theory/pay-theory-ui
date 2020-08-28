import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'

import Checkbox from "../../Checkbox";

const HeaderRow = (props) => {
    const columns = props.columns.map((column, col) => {
        return (
            <Header
                className={column.className}
                itemKey={col}
                key={`header-${col}`}
                label={column.label}
            />
        )
    })
    if (props.hasActions) {
        columns.push(
            <Header
                className='actions'
                itemKey='actions'
                key='header-actions'
                label='actions'
            />
        )
    }
    if (props.select) {
        const { selected, setSelected, tableData } = props.select;

        const selectAll = [...Array(tableData.length).keys()];
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
                setSelected(selectAll);
              } else {
                setSelected([]);
              }
            }
          }}
        />
      </span>
        );
    }
    return <div className='inner-table-row inner-table-row-head'>{columns}</div>
}

HeaderRow.propTypes = {
    columns: PropTypes.array.isRequired,
    hasActions: PropTypes.bool
}

export default HeaderRow
