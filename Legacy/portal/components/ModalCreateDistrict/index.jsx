import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@material/react-button'

//components root
import { ModalContent, TextEntry } from '../'
import { closeModal } from '../ModalContent'
import { openSpinner, closeSpinner } from '../ModalSpinner'
import { formatPhone, validPhone, validEmail } from '../accountUtils'

const INITIAL_STATE = {
	district_name: '',
}

const ModalCreateDistrict = props => {
	const [state, setState] = useState({
		...INITIAL_STATE,
	})

	return (
		<ModalContent text="Add New District" data-testid="CreateDistrictModal">
			<form
				data-testid="create-district-form"
				onSubmit={event => {
					event.preventDefault()
					const newDistrict = { ...state }

					newDistrict.district_nickname = newDistrict.district_name
					newDistrict.district_slug = newDistrict.district_nickname
						.toLowerCase()
						.replace(/\s/g, '-')

					props.createNewDistrict(newDistrict).then(() => {
						setState({
							...INITIAL_STATE,
						})
					})
				}}
			>
				<TextEntry
					label="District Name"
					name="district_name"
					value={state.district_name}
					required
					onChange={event => {
						let changed = { ...state }
						changed[event.target.name] = event.target.value
						setState(changed)
					}}
				/>
				<br />
				<div className="modal-submit">
					<Button
						data-testid="save-button"
						className="primary-button"
						raised
						type="submit"
					>
						Save District
					</Button>
				</div>
			</form>
		</ModalContent>
	)
}

ModalCreateDistrict.propTypes = {
	createNewDistrict: PropTypes.func.isRequired,
}

export default ModalCreateDistrict
