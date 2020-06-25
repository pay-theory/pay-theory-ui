import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import FormLoginEmail from './'

test('FormLoginCode renders and calls submit', async () => {
    const password = jest.fn()
    const submit = jest.fn()
    const { queryByTestId } = render(
        <FormLoginEmail
            onSubmit={submit}
            onPassword={password}
            validate={() => {
                return true
            }}
            user=''
        />
    )

    expect(queryByTestId('form-login-email')).toBeTruthy()

    fireEvent.click(queryByTestId('email-login-link'))
    expect(submit).toHaveBeenCalledTimes(1)

    fireEvent.click(queryByTestId('password-link'))
    expect(password).toHaveBeenCalledTimes(1)
})

test('FormLoginCode wont submit if invalid', async () => {
    const password = jest.fn()
    const submit = jest.fn()
    const { queryByTestId } = render(
        <FormLoginEmail
            onSubmit={submit}
            onPassword={password}
            validate={() => {
                return false
            }}
            user=''
        />
    )

    expect(queryByTestId('form-login-email')).toBeTruthy()

    fireEvent.click(queryByTestId('email-login-link'))
    expect(submit).toHaveBeenCalledTimes(0)
})
