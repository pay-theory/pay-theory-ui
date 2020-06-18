import React from 'react'
import PropTypes from 'prop-types'

import Column from './Column'
import CopyAction from './CopyAction'
import ViewAction from './ViewAction'
import ViewDeleteAction from './ViewDeleteAction'

const Row = props => {
	const columns = props.columns.map((column, col) => {
		const className = `cell ${column.className}`
		if (col === 0 && props.view) {
			return (
				<Column
					key={`${props.itemKey}-${col}`}
					className={column.className}
					row={props.row}
					col={col}
					view={props.view}
					content={column.content}
					locked={props.locked}
					linked
				/>
			)
		} else {
			return (
				<Column
					key={`${props.itemKey}-${col}`}
					className={column.className}
					row={props.row}
					col={col}
					content={column.content}
					locked={props.locked}
				/>
			)
		}
	})
	if (props.hasActions) {
		if (props.canDelete) {
			columns.push(
				<ViewDeleteAction
					key={`${props.itemKey}-delete`}
					row={props.row}
					view={props.view}
					delete={props.delete}
					locked={props.locked}
				/>
			)
		} else if (props.copyOnly) {
			columns.push(
				<CopyAction
					key={`${props.itemKey}-copy`}
					row={props.row}
					copyText={props.copyText}
					callback={props.copyCallback}
					itemKey={props.itemKey}
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
			id={`${props.row}`}
			className="inner-table-row"
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
}

export default Row
