import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent, wait } from '@testing-library/react'

import { openModal, closeModal } from '../ModalContent'
import ModalSpinner from '../ModalSpinner'

import ModalCreateDistrict from './'

test('modal create district success', async () => {
	act(() => {
		const createNewDistrict = jest.fn(() => Promise.resolve())

		const { getByText, queryByTestId } = render(
			<div className="spinner-wrapper">
				<div className="modal-wrapper">
					<div id="container" />
					<ModalCreateDistrict
						createNewDistrict={createNewDistrict}
					/>
				</div>
				<ModalSpinner />
			</div>
		)
		expect(queryByTestId('district_name')).not.toBeVisible()
		openModal()
		expect(queryByTestId('district_name')).toBeVisible()

		fireEvent.change(queryByTestId('district_name'), {
			target: { value: 'name' },
		})
		fireEvent.submit(queryByTestId('create-district-form'))

		expect(createNewDistrict).toHaveBeenCalledTimes(1)

		closeModal()
		expect(queryByTestId('district_name')).not.toBeVisible()
	})
})
