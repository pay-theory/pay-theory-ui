import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import DonationItemEntry from './'
import * as BooksHooks from '../../hooks'
import { classicDistrict, checkout, paymentItem } from '../../test-data'

test('display indefinite donation item entry with custom amount and no quick pay', async () => {
	const changePayment = jest.fn()
	const { queryByTestId, findByTestId } = render(
		<BooksHooks.context.checkout.Provider value={checkout}>
			<BooksHooks.context.district.Provider value={classicDistrict}>
				<BooksHooks.context.paymentItem.Provider value={paymentItem}>
					<DonationItemEntry changePayment={changePayment} />
				</BooksHooks.context.paymentItem.Provider>
			</BooksHooks.context.district.Provider>
		</BooksHooks.context.checkout.Provider>
	)
	fireEvent.change(queryByTestId('item_title'), {
		target: { value: 'invalid' }
	})

	findByTestId('warning-content')
	// await waitForElement(() => queryByTestId('status-cleared'))
	expect(changePayment).toHaveBeenCalledTimes(0)

	fireEvent.blur(queryByTestId('item_title'))

	fireEvent.change(queryByTestId('item_description'), {
		target: { value: 'something new' }
	})
	expect(changePayment).toHaveBeenCalledTimes(1)

	fireEvent.change(queryByTestId('item_account_code'), {
		target: { value: '001' }
	})
	expect(changePayment).toHaveBeenCalledTimes(2)

	fireEvent.blur(queryByTestId('item_account_code'))

	// fireEvent.click(queryByTestId('item_has_quick_pay_options'))
	// expect(changePayment).toHaveBeenCalledTimes(3)

	// fireEvent.click(queryByLabelText('Publish Indefintely'))
	// expect(changePayment).toHaveBeenCalledTimes(4)

	// fireEvent.click(queryByLabelText('Allow Anonymous Payments'))
	// expect(changePayment).toHaveBeenCalledTimes(5)

	// fireEvent.click(queryByLabelText('Publicly Available'))
	// expect(changePayment).toHaveBeenCalledTimes(6)
})

test('display donation item entry with custom amount and quick pay', async () => {
	const payment = { ...paymentItem }
	payment.item_has_quick_pay_options = true

	const changePayment = jest.fn()
	const { queryByTestId, queryByLabelText } = render(
		<BooksHooks.context.checkout.Provider value={checkout}>
			<BooksHooks.context.district.Provider value={classicDistrict}>
				<BooksHooks.context.paymentItem.Provider value={payment}>
					<DonationItemEntry changePayment={changePayment} />
				</BooksHooks.context.paymentItem.Provider>
			</BooksHooks.context.district.Provider>
		</BooksHooks.context.checkout.Provider>
	)

	fireEvent.change(queryByTestId('payment_option_1'), {
		target: { value: 3 }
	})
	expect(changePayment).toHaveBeenCalledTimes(1)

	fireEvent.change(queryByTestId('payment_option_2'), {
		target: { value: 4 }
	})
	expect(changePayment).toHaveBeenCalledTimes(2)

	fireEvent.change(queryByTestId('payment_option_3'), {
		target: { value: 5 }
	})
	expect(changePayment).toHaveBeenCalledTimes(3)

	fireEvent.click(queryByTestId('fixed-pay-option'))
	expect(changePayment).toHaveBeenCalledTimes(4)

	// make sure the checkbox uses both id and nativeControlId
	// with distinct values
	fireEvent.click(queryByLabelText('Provide Quick Pay Options'))
	expect(changePayment).toHaveBeenCalledTimes(5)
})

test('display donation item entry with fixed amount', async () => {
	const payment = { ...paymentItem }
	payment.item_has_fixed_amount = true

	const changePayment = jest.fn()
	const { queryByTestId } = render(
		<BooksHooks.context.checkout.Provider value={checkout}>
			<BooksHooks.context.district.Provider value={classicDistrict}>
				<BooksHooks.context.paymentItem.Provider value={payment}>
					<DonationItemEntry changePayment={changePayment} />
				</BooksHooks.context.paymentItem.Provider>
			</BooksHooks.context.district.Provider>
		</BooksHooks.context.checkout.Provider>
	)

	fireEvent.change(queryByTestId('fixed_amount'), {
		target: { value: 3 }
	})
	expect(changePayment).toHaveBeenCalledTimes(1)

	fireEvent.click(queryByTestId('custom-pay-option'))
	expect(changePayment).toHaveBeenCalledTimes(2)
})

test('display finite donation item entry', async () => {
	const dated = new Date()
	const payment = { ...paymentItem }
	payment.item_start_date = dated
	payment.item_end_date = dated
	payment.item_is_indefinite = false

	const changePayment = jest.fn()
	const { queryByLabelText } = render(
		<BooksHooks.context.checkout.Provider value={checkout}>
			<BooksHooks.context.district.Provider value={classicDistrict}>
				<BooksHooks.context.paymentItem.Provider value={payment}>
					<DonationItemEntry changePayment={changePayment} />
				</BooksHooks.context.paymentItem.Provider>
			</BooksHooks.context.district.Provider>
		</BooksHooks.context.checkout.Provider>
	)
	// fireEvent.change(queryByLabelText('Begin Date'), {
	//     target: { value: moment() },
	// })
	// expect(changePayment).toHaveBeenCalledTimes(1)

	// fireEvent.change(queryByLabelText('End Date'), {
	//     target: { value: moment() },
	// })
	// expect(changePayment).toHaveBeenCalledTimes(2)

	fireEvent.click(queryByLabelText('Publish Indefintely'))
	expect(changePayment).toHaveBeenCalledTimes(1)
})
