import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import FormLoginAlternative from './'

test('FormLoginAlternative renders and buttons work', () => {
    const forgot = jest.fn()
    const submit = jest.fn()
    const { queryByTestId } = render(
        <FormLoginAlternative onSubmit={submit} forgotPassword={forgot} />
    )

    expect(queryByTestId('form-login-alternative')).toBeTruthy()

    fireEvent.click(queryByTestId('password-login-link'))
    expect(submit).toHaveBeenCalledTimes(1)

    fireEvent.click(queryByTestId('forgot-password'))
    expect(forgot).toHaveBeenCalledTimes(1)

    fireEvent.change(queryByTestId('login-password'), {
        target: { value: '111111' }
    })
    expect(queryByTestId('login-password').value).toBe('111111')

    expect(queryByTestId("no-error")).toBeInTheDocument()
})

test('FormLoginAlternative renders error', () => {
    const forgot = jest.fn()
    const submit = jest.fn()
    const { queryByTestId, getByText } = render(
        <FormLoginAlternative onSubmit={submit} forgotPassword={forgot} error="test error" />
    )

    expect(queryByTestId("no-error")).not.toBeInTheDocument()

})
