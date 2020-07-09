import React from 'react'
import PropTypes from 'prop-types'

import Column from './Column'
import CopyAction from './CopyAction'
import ViewAction from './ViewAction'
import ViewDeleteAction from './ViewDeleteAction'
import OtherAction from './OtherAction'

const Row = (props) => {
    const columns = props.columns.map((column, col) => {
        // eslint-disable-next-line no-unused-vars
        const className = `cell ${column.className}`
        if (col === 0 && props.view) {
            return (
                <Column
                    className={column.className}
                    col={col}
                    content={column.content}
                    key={`${props.itemKey}-${col}`}
                    linked
                    locked={props.locked}
                    row={props.row}
                    view={props.view}
                />
            )
        } else {
            return (
                <Column
                    className={column.className}
                    col={col}
                    content={column.content}
                    key={`${props.itemKey}-${col}`}
                    locked={props.locked}
                    row={props.row}
                />
            )
        }
    })
    if (props.hasActions) {
        if (props.canDelete) {
            columns.push(
                <ViewDeleteAction
                    delete={props.delete}
                    key={`${props.itemKey}-delete`}
                    locked={props.locked}
                    row={props.row}
                    view={props.view}
                />
            )
        } else if (props.otherActions) {
            columns.push(
                <OtherAction
                    actions={props.otherActions}
                    key={`${props.itemKey}-other`}
                    row={props.row}
                    rowObject={props.rowObject}
                />
            )
        } else if (props.copyOnly) {
            columns.push(
                <CopyAction
                    callback={props.copyCallback}
                    copyText={props.copyText}
                    itemKey={props.itemKey}
                    key={`${props.itemKey}-copy`}
                    row={props.row}
                />
            )
        } else {
            columns.push(
                <ViewAction
                    key={`${props.itemKey}-view`}
                    row={props.row}
                    view={props.view}
                />
            )
        }
    }
    return (
        <div
            className='inner-table-row'
            id={`${props.row}`}
            key={`${props.row}-${props.itemKey}`}
        >
            {columns}
        </div>
    )
}

Row.propTypes = {
    columns: PropTypes.array.isRequired,
    row: PropTypes.number.isRequired,
    itemKey: PropTypes.any.isRequired,
    locked: PropTypes.bool,
    hasActions: PropTypes.bool,
    canDelete: PropTypes.bool,
    copyOnly: PropTypes.bool,
    copyText: PropTypes.string,
    view: PropTypes.any,
    delete: PropTypes.any,
    copyCallback: PropTypes.any,
    otherActions: PropTypes.array,
    rowObject: PropTypes.object
}

export default Row
