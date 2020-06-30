import React from 'react'
import PropTypes from 'prop-types'

const ViewAction = (props) => {
	return (
		<span className='cell actions' key={`actions-${props.row}`}>
			<div
				className='action view'
				title='view'
				onClick={props.view}
				data-testid='view-action'
			>
				<span>
					<i className='fal fa-eye' />
				</span>
			</div>
		</span>
	)
}

ViewAction.propTypes = {
	view: PropTypes.any.isRequired,
	row: PropTypes.number.isRequired
}

export default ViewAction
