import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import Font from './'

test('display AdminPortal', async () => {
    const { queryByTestId } = render(<Font typekit='zcr2jfa' />)

    expect(queryByTestId('font')).toBeInTheDocument()
})
