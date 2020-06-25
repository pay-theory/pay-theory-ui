import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import AuthStyle from './'

test('display form head', async () => {
    const { queryByTestId } = render(<AuthStyle />)

    expect(queryByTestId('authStyle')).toBeTruthy()
})
