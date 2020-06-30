import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@material/react-button'

// components root
import { ModalContent, TextEntry, openSpinner } from '../../common'

const INITIAL_STATE = {
	partner_name: ''
}

const ModalCreatePartner = (props) => {
	const [state, setState] = useState({
		...INITIAL_STATE
	})

	const onChange = (event) => {
		const changed = { ...state }
		changed[event.target.name] = event.target.value
		setState(changed)
	}

	return (
		<ModalContent text='Add New Partner' data-testid='CreatePartnerModal'>
			<form
				data-testid='create-partner-form'
				onSubmit={(event) => {
					event.preventDefault()
					openSpinner()
					const newPartner = { ...state }
					props.createNewPartner(newPartner).then(() => {
						setState({
							...INITIAL_STATE
						})
					})
				}}
			>
				<TextEntry
					label='Partner Name'
					name='partner_name'
					value={state.partner_name}
					required
					onChange={onChange}
				/>
				<br />
				<div className='modal-submit'>
					<Button
						data-testid='save-button'
						className='primary-button'
						raised
						type='submit'
					>
						Save Partner
					</Button>
				</div>
			</form>
		</ModalContent>
	)
}

ModalCreatePartner.propTypes = {
	createNewPartner: PropTypes.func.isRequired
}

export default ModalCreatePartner
