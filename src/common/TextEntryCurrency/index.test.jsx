import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import TextEntryCurrency from '.'

test('display currency entry', async () => {
	const onChange = jest.fn()
	const { getByText, queryByTestId } = render(
		<TextEntryCurrency
			name='test-name'
			label='test-label'
			value='100'
			onChange={onChange}
		/>
	)

	expect(getByText('test-label')).toBeInTheDocument()

	fireEvent.change(queryByTestId('test-name'), { target: { value: 999 } })
	expect(onChange).toHaveBeenCalledTimes(1)
})
