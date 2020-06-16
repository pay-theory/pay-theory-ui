import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import CardTable from './'

test('display card table', async () => {
	const { getByText, queryByTestId } = render(<CardTable>child</CardTable>)

	expect(getByText('child')).toBeInTheDocument()
})
