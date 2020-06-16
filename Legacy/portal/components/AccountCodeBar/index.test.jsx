import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import AccountCodeBar from './'

const searchHandler = jest.fn()

test('display district list without actions', async () => {
	const { getByText, queryByTestId } = render(
		<AccountCodeBar searchHandler={searchHandler} />
	)

	fireEvent.change(queryByTestId('fund'), { target: { value: '001' } })
	fireEvent.click(queryByTestId('searchButton'))
	expect(searchHandler).toHaveBeenCalledTimes(1)
})
