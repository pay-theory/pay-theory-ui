import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import BasicCol from './BasicCol'
import ActionCol from './ActionCol'
import LinkCol from './LinkCol'
import ChipCol from './ChipCol'
import CurrencyCol from './CurrencyCol'
import Checkbox from '../../Checkbox'
import PayMethodCol from './PayMethodCol'
import ClickToCopyCol from './ClickToCopyCol'
import { TableContext } from '../index'

const generateBasicCol = (column, col, row, itemKey) => {
    return (
        <BasicCol
            className={column.className}
            col={col}
            content={column.content}
            key={`${itemKey}-column-${col}`}
            row={row}
        />
    )
}

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
    )
}

const generateClickToCopyCol = (column, col, row, itemKey) => {
    return (
        <ClickToCopyCol
            className={column.className}
            col={col}
            content={column.content}
            key={`${itemKey}-column-${col}`}
            row={row}
        />
    )
}

const generateActionCol = (column, col, row, itemKey) => {
    return (
        <ActionCol
            action={column.action}
            className={column.className}
            col={col}
            disabled={column.disabled}
            icon={column.icon}
            key={`${itemKey}-column-${col}`}
            label={column.label}
            row={row}
            rowObject={column.rowObject}
        />
    )
}

const generateChipCol = (column, col, row, itemKey) => {
    return (
        <ChipCol
            className={column.className}
            col={col}
            color={column.color}
            key={`${itemKey}-column-${col}`}
            row={row}
            text={column.text}
            textColor={column.textColor}
        />
    )
}

const generateCurrencyCol = (column, col, row, itemKey) => {
    return (
        <CurrencyCol
            className={column.className}
            col={col}
            content={column.content}
            key={`${itemKey}-column-${col}`}
            row={row}
        />
    )
}

const generatePaymentMethod = (column, col, row, itemKey) => {
    return (
        <PayMethodCol
            brand={column.brand}
            className={column.className}
            col={col}
            key={`${itemKey}-column-${col}`}
            lastFour={column.lastFour}
            row={row}
        />
    )
}

const colGenerator = {
    link: generateLinkCol,
    basic: generateBasicCol,
    chip: generateChipCol,
    currency: generateCurrencyCol,
    action: generateActionCol,
    paymentMethod: generatePaymentMethod,
    clickToCopy: generateClickToCopyCol
}

const Row = ({ row, itemKey, hasActions, columns, rowObject }) => {
    const selectKey = `row${row}`
    const context = useContext(TableContext)

    const updateSelected = (key, object, isSelected) => {
        const newCopy = { ...context.selected }
        if (isSelected) {
            newCopy[key] = object
        } else {
            delete newCopy[key]
        }
        context.setSelected(newCopy)
    }

    const mappedColumns = columns.map((column, col) => {
        // eslint-disable-next-line no-unused-vars
        return column.type
            ? colGenerator[column.type](column, col, row, itemKey)
            : colGenerator.basic(column, col, row, itemKey)
    })

    if (hasActions) {
        mappedColumns.unshift(
            <td
                className='cell select'
                data-testid='select-column'
                key={`${itemKey}-select`}
            >
                <span className='content'>
                    <Checkbox
                        id={`checkbox-${itemKey}`}
                        inputProps={{
                            'data-testid': 'select-item',
                            checked: !!context.selected[selectKey],
                            onChange: (e) => {
                                updateSelected(
                                    selectKey,
                                    rowObject,
                                    e.target.checked
                                )
                            }
                        }}
                    />
                </span>
            </td>
        )
    }
    return (
        <tr className='inner-table-row' id={`${row}`} key={`${row}-${itemKey}`}>
            {mappedColumns}
        </tr>
    )
}

Row.propTypes = {
    itemKey: PropTypes.string.isRequired,
    hasActions: PropTypes.bool,
    columns: PropTypes.array.isRequired,
    row: PropTypes.number.isRequired,
    rowObject: PropTypes.object.isRequired
}

export default Row
