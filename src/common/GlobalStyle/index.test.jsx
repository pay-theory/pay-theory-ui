import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import GlobalStyle from './'

test('display form head', async () => {
	const { queryByTestId } = render(<GlobalStyle />)

	expect(queryByTestId('globalStyle')).toBeTruthy()
})
