import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import FormLoginCode from './'

test('FormLoginCode renders and calls submit', async() => {
    const password = jest.fn()
    const submit = jest.fn()
    const { queryByTestId } = render(
        <FormLoginCode
            onSubmit={submit}
            onPassword={password}
            validate={() => {}}
            user=''
        />
    )

    expect(queryByTestId('form-login-code')).toBeTruthy()

    fireEvent.click(queryByTestId('code-login-link'))
    expect(submit).toHaveBeenCalledTimes(1)

    fireEvent.click(queryByTestId('password-link'))
    expect(password).toHaveBeenCalledTimes(1)

    fireEvent.change(queryByTestId('auth-code'), {
        target: { value: '111111' }
    })
    expect(queryByTestId('auth-code').value).toBe('111111')

    expect(queryByTestId("no-error")).toBeInTheDocument()
})

test('FormLoginAlternative renders error', () => {
    const forgot = jest.fn()
    const submit = jest.fn()
    const { queryByTestId, getByText } = render(
        <FormLoginCode onSubmit={submit} onPassword={forgot} validate={() => {}} error="test error" />
    )

    expect(queryByTestId("no-error")).not.toBeInTheDocument()


})
