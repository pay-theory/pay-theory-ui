import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import BodyHead from './'
import * as BooksHooks from '../../../hooks'

import { page } from '../../../test-data'

test('display body head', async() => {
	const { getByText, queryByTestId } = render(
		<BooksHooks.context.page.Provider value={page}>
			<BodyHead />
		</BooksHooks.context.page.Provider>
	)

	expect(getByText(page.subtitle)).toBeInTheDocument()

	expect(getByText(page.title)).toBeInTheDocument()
})
