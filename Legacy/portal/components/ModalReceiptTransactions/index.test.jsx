import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import { openModal, closeModal } from '../ModalContent'
import ModalSpinner from '../ModalSpinner'

import ModalReceiptTransactions from './'

import { transactions } from '../../../test-data'

test('modal open and close', async () => {
	const createNewMember = jest.fn()
	const setStatusMessage = jest.fn()

	const { getByText, queryByTestId } = render(
		<div className="spinner-wrapper">
			<div className="modal-wrapper">
				<div id="container" />
				<ModalReceiptTransactions
					school="test-school"
					account="test-account"
					transactions={transactions}
				/>
			</div>
			<ModalSpinner />
		</div>
	)

	expect(getByText(transactions[0].student_id)).toBeInTheDocument()
	expect(getByText(transactions[0].student_id)).not.toBeVisible()
	openModal()
	expect(getByText(transactions[0].student_id)).toBeVisible()
	closeModal()
	expect(getByText(transactions[0].student_id)).not.toBeVisible()
})
