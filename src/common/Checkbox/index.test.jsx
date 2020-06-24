import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import Checkbox from '.'

test('display checkbox', async () => {
    const { getByText, getByTestId } = render(
        <Checkbox id='test' label='Test' />
    )

    expect(getByText('Test')).toBeInTheDocument()
    expect(getByTestId('test')).toBeInTheDocument()
})
