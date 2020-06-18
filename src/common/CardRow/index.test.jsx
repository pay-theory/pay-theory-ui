import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import CardRow from '.'

test('display card row', async () => {
	const { getByText, queryByTestId } = render(<CardRow>child</CardRow>)

	expect(getByText('child')).toBeInTheDocument()
})
