import React from 'react'
import PropTypes from 'prop-types'

const CopyAction = (props) => {
	const copyMe = (key, callback) => {
		const node = document.getElementById(key)
		node.style.display = 'block'
		node.select()
		/* istanbul ignore else */
		if (!document.execCommand) {
		} else {
			document.execCommand('copy')
		}
		node.style.display = 'none'
		callback()
	}

	return (
		<span className='cell actions' key={`actions-${props.row}`}>
			<div
				className='action copy'
				title='copy'
				onClick={(e) => {
					copyMe(props.itemKey, props.callback)
				}}
				data-testid='copy-action'
				key={`copy-action-${props.row}`}
			>
				<span>
					<i className='fal fa-copy' />
				</span>
				<textarea
					id={props.itemKey}
					className='copySpace'
					value={props.copyText}
					readOnly
				/>
			</div>
			<style jsx='true'>{`
				textarea {
					display: none;
					width: 1px;
				}
			`}</style>
		</span>
	)
}

CopyAction.propTypes = {
	callback: PropTypes.any.isRequired,
	row: PropTypes.number.isRequired,
	itemKey: PropTypes.any.isRequired,
	copyText: PropTypes.any.isRequired
}

export default CopyAction
