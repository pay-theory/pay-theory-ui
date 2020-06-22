import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import CardRow from '.'

test('display card row', async () => {
    const { getByText } = render(<CardRow>child</CardRow>)

    expect(getByText('child')).toBeInTheDocument()
})
