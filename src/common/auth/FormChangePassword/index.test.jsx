import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import FormChangePassword from './'

test('FormChangePassword renders', async () => {
    const submit = jest.fn()
    const { queryByTestId } = render(<FormChangePassword onSubmit={submit} />)

    expect(queryByTestId('form-change-password')).toBeInTheDocument()

    fireEvent.click(queryByTestId('code-login-link'))
    expect(submit).toHaveBeenCalledTimes(1)
})
