import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import Unauthorized from '.'

test('display Unauthorized', async () => {
    const { getByText } = render(<Unauthorized />)

    expect(getByText('You seem to be lost...')).toBeInTheDocument()
})
