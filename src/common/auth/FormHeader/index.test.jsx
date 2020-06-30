import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import FormHeader from '.'

test('display form head', async () => {
	const { getByText } = render(<FormHeader text='something' />)

	expect(getByText('something')).toBeInTheDocument()
})
