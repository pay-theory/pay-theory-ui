import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import GlobalStyle from './'

test('display form head', async () => {
	const { getByText, queryByTestId } = render(<GlobalStyle />)
})
