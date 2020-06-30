import React from 'react'
import PropTypes from 'prop-types'

const Column = (props) => {
	const className = `cell ${props.className}`

	const lock = props.locked ? <i className={`fal fa-lock locked`} /> : <i />

	if (props.linked) {
		return (
			<span
				className={`${className} link-column`}
				key={`${props.className}-${props.row}-${props.col}`}
				onClick={props.view}
				data-testid='linked-column'
			>
				{props.content}
			</span>
		)
	} else {
		return (
			<span
				className={`${className}`}
				key={`${props.className}-${props.row}-${props.col}`}
				data-testid='unlinked-column'
			>
				{props.content}
				{lock}
			</span>
		)
	}
}

Column.propTypes = {
	className: PropTypes.string.isRequired,
	row: PropTypes.number.isRequired,
	col: PropTypes.number.isRequired,
	content: PropTypes.any,
	linked: PropTypes.bool,
	locked: PropTypes.bool,
	view: PropTypes.func
}

export default Column
