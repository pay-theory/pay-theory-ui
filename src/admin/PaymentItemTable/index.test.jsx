import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import PaymentItemTable from './'
import * as BooksHooks from '../../hooks'
import { paymentItems } from '../../test-data'

test('display payment item', async () => {
	const viewPaymentItem = jest.fn()
	const deletePaymentItem = jest.fn()
	const { queryAllByTestId } = render(
		<BooksHooks.context.paymentItems.Provider value={paymentItems}>
			<PaymentItemTable
				viewPaymentItem={viewPaymentItem}
				deletePaymentItem={deletePaymentItem}
			/>
		</BooksHooks.context.paymentItems.Provider>
	)

	fireEvent.click(queryAllByTestId('view-action')[0])
	expect(viewPaymentItem).toHaveBeenCalledTimes(1)

	fireEvent.click(queryAllByTestId('delete-action')[0])
	expect(deletePaymentItem).toHaveBeenCalledTimes(1)
})
