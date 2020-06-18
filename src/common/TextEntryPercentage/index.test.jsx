import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import TextEntryPercentage from '.'

test('display percentage entry', async () => {
	const onChange = jest.fn()
	const { getByText, queryByTestId } = render(
		<TextEntryPercentage
			name="test-name"
			label="test-label"
			value="100"
			onChange={onChange}
		/>
	)

	expect(getByText('test-label')).toBeInTheDocument()

	fireEvent.change(queryByTestId('test-name'), { target: { value: 999 } })
	expect(onChange).toHaveBeenCalledTimes(1)
})

test('display percentage entry NaN', async () => {
	const onChange = jest.fn()
	const { getByText, queryByTestId } = render(
		<TextEntryPercentage
			name="test-name"
			label="test-label"
			value="abc"
			onChange={onChange}
		/>
	)

	expect(getByText('test-label')).toBeInTheDocument()

	fireEvent.change(queryByTestId('test-name'), { target: { value: 'def' } })
	expect(onChange).toHaveBeenCalledTimes(1)
})
