import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import AuthBG from './'

test('display form head', async () => {
    const { queryByTestId } = render(<AuthBG />)

    expect(queryByTestId('authBg')).toBeTruthy()
})
