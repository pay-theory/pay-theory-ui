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
})
