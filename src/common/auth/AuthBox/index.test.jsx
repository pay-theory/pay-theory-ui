import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import AuthBox from './'

test('display AuthBox with text', async () => {
    const { queryByTestId, getByText } = render(
        <AuthBox formHead='test' formText='test text' />
    )

    expect(queryByTestId('authBox')).toBeTruthy()
    expect(getByText('test')).toBeInTheDocument()
})
