import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import FormHead from '.'

test('display form head', async () => {
	const { getByText } = render(<FormHead text='something' />)

	expect(getByText('something')).toBeInTheDocument()
})
