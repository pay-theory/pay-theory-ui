import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import AccountOverview from './'
import * as BooksHooks from '../../../hooks'
import { member, roles } from '../../../test-data'

const saveAccount = jest.fn()
const onChange = jest.fn()

test('display account overview', async() => {
	const { queryByTestId } = render(
		<BooksHooks.context.roles.Provider value={roles.systemRoles}>
			<BooksHooks.context.member.Provider value={member}>
				<AccountOverview
					saveAccount={saveAccount}
					onChange={onChange}
				/>
			</BooksHooks.context.member.Provider>
		</BooksHooks.context.roles.Provider>
	)

	expect(queryByTestId('first_name').value).toBe(member.first_name)

	fireEvent.change(queryByTestId('first_name'), { target: { value: '001' } })
	expect(onChange).toHaveBeenCalledTimes(1)

	fireEvent.click(queryByTestId('submit-account-detail'))
	expect(saveAccount).toHaveBeenCalledTimes(1)
})
