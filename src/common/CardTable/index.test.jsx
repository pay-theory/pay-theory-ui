import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import CardTable from '.'

test('display card table', async () => {
	const { getByText } = render(<CardTable>child</CardTable>)

	expect(getByText('child')).toBeInTheDocument()
})
