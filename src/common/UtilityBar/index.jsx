import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material/react-button'

const UtilityBar = (props) => {
	return (
		<div className='utility-bar'>
			{props.children}
			{props.addButton ? (
				<Button
					raised
					className='primary-button'
					onClick={props.clickAction}
					data-testid='addButton'
				>
					<i className='fal fa-plus-circle' />
					{props.addButton}
				</Button>
			) : (
				''
			)}
			<style jsx='true'>{`
				.utility-bar {
					display: flex;
					flex-direction: row;
					justify-content: flex-end;
					align-items: center;
					max-height: 200px;
					padding: 12px 24px;
					width: auto;
					height: auto;
				}
			`}</style>
		</div>
	)
}

UtilityBar.propTypes = {
	addButton: PropTypes.string,
	clickAction: PropTypes.func
}
export default UtilityBar
