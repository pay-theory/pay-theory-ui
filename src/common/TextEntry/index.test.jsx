import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import TextEntry from './'

test('TextEntry renders w/o helper', async() => {
    const changer = jest.fn()

    const { queryByTestId } = render(
        <TextEntry
        name="first-name"
        label="First Name"
        onChange={changer}
        value="test-value"
        />
    )

    fireEvent.change(queryByTestId('first-name'), {
        target: { value: '111111' }
    })
    expect(changer).toBeCalledTimes(1)

    expect(queryByTestId("helpless")).toBeInTheDocument()

    expect(queryByTestId('first-name').value).toBe('test-value')
})

test('TextEntry renders and helper shows on focus', async() => {
    const changer = jest.fn()

    const { queryByTestId } = render(
        <TextEntry
        name="last-name"
        label="Last Name"
        onChange={changer}
        helperText="Test"
        />
    )

    fireEvent.focus(queryByTestId('last-name'))
    expect(queryByTestId('helper')).toHaveClass('opaque')


    expect(queryByTestId('last-name').value).toBe("")
})
