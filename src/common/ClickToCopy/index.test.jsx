import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import ClickToCopyText from '.'

test('display click to copy text', async () => {
    const { getByText, queryByTestId } = render(
        <ClickToCopyText
            label='API Key'
            name='partner_apikey'
            value='something'
            message='API key'
        />
    )

    expect(getByText('API Key')).toBeInTheDocument()

    fireEvent.focus(queryByTestId('click-to-copy'))

    fireEvent.click(queryByTestId('click-to-copy'))

    fireEvent.focus(queryByTestId('click-to-copy'))
})

test('display click to copy blank', async () => {
    const { getByText, queryByTestId } = render(
        <ClickToCopyText label='API Key' name='partner_apikey' value='' />
    )

    expect(getByText('API Key')).toBeInTheDocument()

    fireEvent.focus(queryByTestId('click-to-copy'))

    fireEvent.click(queryByTestId('click-to-copy'))

    fireEvent.focus(queryByTestId('click-to-copy'))
})
