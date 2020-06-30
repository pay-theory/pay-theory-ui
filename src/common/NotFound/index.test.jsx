import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import NotFound from '.'

test('display NotFound', async () => {
    const { getByText } = render(<NotFound />)

    expect(
        getByText('How could anyone get angry at this face?')
    ).toBeInTheDocument()
})
