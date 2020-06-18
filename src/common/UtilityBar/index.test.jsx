import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import UtilityBar from '.'

test('display utility bar without button', async () => {
	const { getByText, queryByTestId } = render(<UtilityBar>child</UtilityBar>)

	expect(getByText('child')).toBeInTheDocument()
})

test('display utility bar with button', async () => {
	const clickAction = jest.fn()
	const { getByText, queryByTestId } = render(
		<UtilityBar addButton="add this" clickAction={clickAction}>
			child
		</UtilityBar>
	)

	expect(getByText('child')).toBeInTheDocument()
	expect(getByText('add this')).toBeInTheDocument()
})
