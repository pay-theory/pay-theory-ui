import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import NavigationDrawer from './'
import * as BooksHooks from '../../../hooks'

import { menu } from '../../../test-data'

test('display navigation drawer expanded', async() => {
	delete window.location
	window.location = { pathname: '/transactions/sales' }
	const { getByText, queryByTestId } = render(
		<Router>
			<BooksHooks.context.menu.Provider value={menu}>
				<NavigationDrawer />
			</BooksHooks.context.menu.Provider>
		</Router>
	)

	expect(queryByTestId(`${menu[1].tag}-details`).open).toBe(true)
})

test('display navigation drawer collapsed', async() => {
	delete window.location
	window.location = { pathname: '/donations' }
	const { getByText, queryByTestId } = render(
		<Router>
			<BooksHooks.context.menu.Provider value={menu}>
				<NavigationDrawer />
			</BooksHooks.context.menu.Provider>
		</Router>
	)
	expect(queryByTestId(`${menu[1].tag}-details`).open).toBe(false)
})
