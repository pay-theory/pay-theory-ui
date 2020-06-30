import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import TransactionItems from '.'
import * as BooksHooks from '../../hooks'
import { invoiceItems, payment } from '../../test-data'

test('display transaction line items select all', async () => {
	const onRefund = jest.fn()
	const { getByText, queryByTestId, findByTestId } = render(
		<BooksHooks.context.payment.Provider value={payment}>
			<BooksHooks.context.paymentItems.Provider value={invoiceItems}>
				<TransactionItems onRefund={onRefund} />
			</BooksHooks.context.paymentItems.Provider>
		</BooksHooks.context.payment.Provider>
	)

	expect(getByText('test-item')).toBeInTheDocument()

	fireEvent.click(queryByTestId('refund-button'))
	expect(onRefund).toBeCalledTimes(0)

	expect(Boolean(queryByTestId('select-all-items').checked)).toEqual(false)

	fireEvent.click(queryByTestId('select-all-items'))
	findByTestId('selection-active')

	expect(Boolean(queryByTestId('select-all-items').checked)).toEqual(true)

	fireEvent.click(queryByTestId('refund-button'))
	expect(onRefund).toBeCalledTimes(1)

	fireEvent.click(queryByTestId('select-all-items'))
	findByTestId('selection-inactive')

	expect(Boolean(queryByTestId('select-all-items').checked)).toEqual(false)

	fireEvent.click(queryByTestId('refund-button'))
	expect(onRefund).toBeCalledTimes(1)
})

test('display transaction line items select one', async () => {
	const onRefund = jest.fn()
	const { getByText, queryByTestId, queryAllByTestId, findByTestId } = render(
		<BooksHooks.context.payment.Provider value={payment}>
			<BooksHooks.context.paymentItems.Provider value={invoiceItems}>
				<TransactionItems onRefund={onRefund} />
			</BooksHooks.context.paymentItems.Provider>
		</BooksHooks.context.payment.Provider>
	)

	expect(getByText('test-item')).toBeInTheDocument()

	fireEvent.click(queryByTestId('refund-button'))
	expect(onRefund).toBeCalledTimes(0)

	expect(Boolean(queryByTestId('select-all-items').checked)).toEqual(false)

	expect(Boolean(queryAllByTestId('select-item')[0].checked)).toEqual(false)

	fireEvent.click(queryAllByTestId('select-item')[0])
	findByTestId('selection-active')

	expect(Boolean(queryAllByTestId('select-item')[0].checked)).toEqual(true)

	fireEvent.click(queryByTestId('refund-button'))
	expect(onRefund).toBeCalledTimes(1)

	fireEvent.click(queryAllByTestId('select-item')[0])
	findByTestId('selection-inactive')

	expect(Boolean(queryAllByTestId('select-item')[0].checked)).toEqual(false)

	fireEvent.click(queryByTestId('refund-button'))
	expect(onRefund).toBeCalledTimes(1)
})
