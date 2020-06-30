import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import PaymentsOverview from './'
import { sales } from '../../test-data'

test('display sales overview without content', async () => {
	const viewItem = jest.fn()
	const { queryAllByTestId } = render(
		<PaymentsOverview
			allItems={[]}
			uncapturedItems={[]}
			refundedItems={[]}
			succeededItems={[]}
			viewItem={viewItem}
		/>
	)
	expect(queryAllByTestId('view-action')).toEqual([])
})

test('display sales overview with content', async () => {
	const viewItem = jest.fn()
	const { queryAllByTestId, queryByTestId } = render(
		<PaymentsOverview
			allItems={sales.allItems}
			uncapturedItems={sales.uncaptured}
			refundedItems={sales.refunded}
			succeededItems={sales.succeeded}
			viewItem={viewItem}
		/>
	)

	fireEvent.click(queryAllByTestId('view-action')[0])
	expect(viewItem).toHaveBeenCalledTimes(1)

	expect(queryByTestId('all-payments-menu')).toHaveClass('active-tab')
	expect(queryByTestId('uncaptured-payments-menu')).not.toHaveClass(
		'active-tab'
	)
	expect(queryByTestId('refunded-payments-menu')).not.toHaveClass('active-tab')

	fireEvent.click(queryByTestId('uncaptured-payments-menu'))
	expect(queryByTestId('uncaptured-payments-menu')).toHaveClass('active-tab')
	expect(queryByTestId('all-payments-menu')).not.toHaveClass('active-tab')
	expect(queryByTestId('refunded-payments-menu')).not.toHaveClass('active-tab')

	expect(queryByTestId('refunded-payments-menu')).not.toHaveClass('active-tab')
	fireEvent.click(queryByTestId('refunded-payments-menu'))
	expect(queryByTestId('refunded-payments-menu')).toHaveClass('active-tab')
	expect(queryByTestId('uncaptured-payments-menu')).not.toHaveClass(
		'active-tab'
	)

	expect(queryByTestId('all-payments-menu')).not.toHaveClass('active-tab')
	fireEvent.click(queryByTestId('all-payments-menu'))
	expect(queryByTestId('refunded-payments-menu')).not.toHaveClass('active-tab')
	expect(queryByTestId('uncaptured-payments-menu')).not.toHaveClass(
		'active-tab'
	)
	expect(queryByTestId('all-payments-menu')).toHaveClass('active-tab')
})
