import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import { openModal, closeModal } from '../ModalContent'

import ModalContent from './'

/*
ModalCreateAccount.propTypes = {
	roleLabel: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	createNewMember: PropTypes.func.isRequired,
	setStatusMessage: PropTypes.func.isRequired,
	partner: PropTypes.string,
	district: PropTypes.string,
}
*/

test('modal open and close', async () => {
	const createNewMember = jest.fn()
	const setStatusMessage = jest.fn()

	const { getByText, queryByTestId } = render(
		<div className="modal-wrapper">
			<div id="container" />
			<ModalContent text={`test modal`}>
				<div data-testid="am-i-open" />
			</ModalContent>
		</div>
	)

	expect(queryByTestId('am-i-open')).not.toBeVisible()
	openModal()
	expect(queryByTestId('am-i-open')).toBeVisible()
	closeModal()
	expect(queryByTestId('am-i-open')).not.toBeVisible()
})
