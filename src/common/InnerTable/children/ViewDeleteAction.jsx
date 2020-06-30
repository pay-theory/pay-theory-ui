import React from 'react'
import PropTypes from 'prop-types'

const ViewDeleteAction = (props) => {
	const trashClass = props.locked
		? 'fal fa-trash-alt disabled'
		: 'fal fa-trash-alt'
	const deleteActionClass = props.locked ? 'action disabled' : 'action delete'
	return (
		<span className='cell actions' key={`actions-${props.row}`}>
			<div
				className='action view'
				title='view'
				onClick={props.view}
				data-testid={`view-action`}
				key={`view-action-${props.row}`}
			>
				<span>
					<i className='fal fa-eye' />
				</span>
			</div>
			<div
				className={deleteActionClass}
				title='delete'
				onClick={props.locked ? () => {} : props.delete}
				data-testid={`delete-action`}
				key={`delete-action-${props.row}`}
			>
				<span>
					<i className={trashClass} />
				</span>
			</div>
		</span>
	)
}

ViewDeleteAction.propTypes = {
	view: PropTypes.any.isRequired,
	delete: PropTypes.any.isRequired,
	row: PropTypes.number.isRequired,
	locked: PropTypes.bool
}

export default ViewDeleteAction
