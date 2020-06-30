import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import LogoHeader from './'

test('display AuthBox with text', async () => {
    const { queryByTestId } = render(<LogoHeader />)

    expect(queryByTestId('logoHeader')).toBeTruthy()
})
