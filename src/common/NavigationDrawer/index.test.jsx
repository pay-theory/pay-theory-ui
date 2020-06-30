import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import { BrowserRouter as Router } from 'react-router-dom'

import * as BooksHooks from '../../hooks'
import NavigationDrawer from '.'
import { menu, menuStyle } from '../../test-data'
import { NavigationCategory, NavigationItem } from './children'

test('nav drawer renders', async () => {
	const { queryByTestId, getByText } = render(
		<Router>
			<BooksHooks.context.menu.Provider value={menu}>
				<NavigationDrawer style={menuStyle} />
			</BooksHooks.context.menu.Provider>
		</Router>
	)

	expect(queryByTestId('nav-drawer')).toBeTruthy()
	expect(getByText(menu[0].label)).toBeInTheDocument()
})

test('nav item renders', async () => {
	const item = menu[0]
	const { queryByTestId, queryByText } = render(
		<Router>
			<NavigationItem item={item} className='' />
		</Router>
	)

	expect(queryByTestId(item.tag)).toBeTruthy()
	expect(queryByText(item.label)).toBeInTheDocument()
})

test('nav category renders', async () => {
	const item = menu[1]
	const createItem = jest.fn()
	const { queryByTestId, queryByText } = render(
		<NavigationCategory
			item={item}
			detailsOpen={false}
			createItem={createItem}
		/>
	)

	expect(queryByTestId(item.tag)).toBeTruthy()
	expect(queryByText(item.label)).toBeInTheDocument()
	expect(createItem).toHaveBeenCalled()
})
