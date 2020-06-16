import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import AccountsTab from './'

import * as BooksHooks from '../../../hooks'

import { accounts } from '../../../test-data'

const viewAccount = jest.fn()
const deleteAccount = jest.fn()

test('display accounts tab', async() => {
	const { getByText, queryAllByTestId } = render(
		<BooksHooks.context.accounts.Provider value={accounts}>
			<AccountsTab
				id="test-id"
				visibility="visible"
				viewAccount={viewAccount}
				deleteAccount={deleteAccount}
			/>
		</BooksHooks.context.accounts.Provider>
	)

	fireEvent.click(queryAllByTestId('view-action')[0])
	expect(viewAccount).toHaveBeenCalledTimes(1)

	fireEvent.click(queryAllByTestId('delete-action')[0])
	expect(deleteAccount).toHaveBeenCalledTimes(1)
})
