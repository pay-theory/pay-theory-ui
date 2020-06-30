import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import TabMenu from '.'

const testFunc = jest.fn()

const items = [
	{
		id: 'test',
		active: 'active-tab',
		action: testFunc,
		label: 'Test'
	}
]

test('display TabMenu', async () => {
	const { getByText, getByTestId } = render(<TabMenu items={items} />)

	expect(getByText('Test')).toBeInTheDocument()
	expect(getByTestId('test')).toBeInTheDocument()

	fireEvent.click(getByTestId('test'))
	expect(testFunc).toHaveBeenCalledTimes(1)
})
