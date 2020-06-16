import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import FormHead from './'

test('display form head', async () => {
	const { getByText, queryByTestId } = render(<FormHead text="something" />)

	expect(getByText('something')).toBeInTheDocument()
})
