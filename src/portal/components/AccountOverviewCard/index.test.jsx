import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import AccountOverviewCard from './'

import * as BooksHooks from '../../../hooks'
import { member } from '../../../test-data'

test('display district overview card', async() => {
	const { getByText, queryByTestId } = render(
		<BooksHooks.context.member.Provider value={member}>
			<div id="container">
				<AccountOverviewCard />
			</div>
		</BooksHooks.context.member.Provider>
	)
	expect(getByText(member.UID)).toBeInTheDocument()
	expect(
		getByText(`${member.first_name} ${member.last_name}`)
	).toBeInTheDocument()
	expect(getByText(member.phone_number)).toBeInTheDocument()
	expect(getByText(member.email)).toBeInTheDocument()
})
