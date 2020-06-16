import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@material/react-button'

//components root
import { ModalContent, TextEntry } from '../'
import { closeModal } from '../ModalContent'
import { openSpinner, closeSpinner } from '../ModalSpinner'

import { formatAccountCode, padAccountCode } from '../accountCodeUtils'

const INITIAL_STATE = {
	item_title: '',
	item_account_code: '',
	item_description: '',
}

const ModalCreatePaymentItem = props => {
	const [state, setState] = useState({
		item_type: props.itemType,
		...INITIAL_STATE,
	})

	const onChange = event => {
		let changed = { ...state }
		changed[event.target.name] =
			event.target.name === 'item_account_code'
				? formatAccountCode(event.target.value)
				: event.target.value
		setState(changed)
	}

	const onBlur = event => {
		let changed = { ...state }
		changed[event.target.name] =
			/* istanbul ignore next */
			event.target.name === 'item_account_code'
				? padAccountCode(event.target.value)
				: event.target.value
		setState(changed)
	}
	return (
		<ModalContent
			text={`Add New ${props.itemType}`}
			data-testid="CreatePaymentItemModal"
		>
			<form
				data-testid="create-payment-item-form"
				onSubmit={event => {
					event.preventDefault()
					props.createPaymentItem(state)
					setState({
						item_type: props.itemType,
						...INITIAL_STATE,
					})
				}}
			>
				<TextEntry
					label="Title"
					name="item_title"
					value={state.item_title}
					required
					onChange={onChange}
				/>
				<TextEntry
					label="Account Code"
					name="item_account_code"
					value={state.item_account_code}
					required
					onChange={onChange}
					onBlur={onBlur}
				/>
				<br />
				<div className="modal-submit">
					<Button
						data-testid="save-button"
						className="primary-button"
						raised
						type="submit"
					>
						Save {props.itemType}
					</Button>
				</div>
			</form>
		</ModalContent>
	)
}

ModalCreatePaymentItem.propTypes = {
	itemType: PropTypes.string.isRequired,
	createPaymentItem: PropTypes.func.isRequired,
}

export default ModalCreatePaymentItem
