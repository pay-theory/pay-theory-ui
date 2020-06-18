import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import { Merchant, Usas } from './'

import { usasConnection, merchantConnection } from '../../test-data'

test('display USAS connection', async () => {
    const postUsas = jest.fn()
    const changeConnectionData = jest.fn()
    const { queryByTestId } = render(
        <Usas
            connection={usasConnection}
            postUSAS={postUsas}
            changeConnectionData={changeConnectionData}
        />
    )

    expect(queryByTestId('usas_user_name').value).toBe(
        usasConnection.usas_user_name
    )
    expect(queryByTestId('usas_password').value).toBe(
        usasConnection.usas_password
    )

    expect(queryByTestId('usas_district').value).toBe(
        usasConnection.usas_district
    )
    expect(queryByTestId('usas_endpoint').value).toBe(
        usasConnection.usas_endpoint
    )
})

test('display USAS connection with status', async () => {
    const postUsas = jest.fn()
    const changeConnectionData = jest.fn()
    const { getByText, queryByTestId } = render(
        <Usas
            connection={usasConnection}
            postUSAS={postUsas}
            changeConnectionData={changeConnectionData}
            statusMessage={<div>status here</div>}
        />
    )

    expect(queryByTestId('usas_user_name').value).toBe(
        usasConnection.usas_user_name
    )
    expect(queryByTestId('usas_password').value).toBe(
        usasConnection.usas_password
    )

    expect(queryByTestId('usas_district').value).toBe(
        usasConnection.usas_district
    )
    expect(queryByTestId('usas_endpoint').value).toBe(
        usasConnection.usas_endpoint
    )
    expect(getByText('status here')).toBeInTheDocument()
})

test('display Merchant connection', async () => {
    const postMerchant = jest.fn()
    const changeConnectionData = jest.fn()
    const { queryByTestId } = render(
        <Merchant
            connection={merchantConnection}
            postMerchant={postMerchant}
            changeConnectionData={changeConnectionData}
        />
    )

    expect(queryByTestId('merchant_user_name').value).toBe(
        merchantConnection.merchant_user_name
    )
    expect(queryByTestId('merchant_password').value).toBe(
        merchantConnection.merchant_password
    )

    expect(queryByTestId('merchant_id').value).toBe(
        merchantConnection.merchant_id
    )
    expect(queryByTestId('merchant_processor').value).toBe(
        merchantConnection.merchant_processor
    )
})

test('display USAS connection with status', async () => {
    const postMerchant = jest.fn()
    const changeConnectionData = jest.fn()
    const { getByText, queryByTestId } = render(
        <Merchant
            connection={merchantConnection}
            postMerchant={postMerchant}
            changeConnectionData={changeConnectionData}
            statusMessage={<div>status here</div>}
        />
    )

    expect(queryByTestId('merchant_user_name').value).toBe(
        merchantConnection.merchant_user_name
    )
    expect(queryByTestId('merchant_password').value).toBe(
        merchantConnection.merchant_password
    )

    expect(queryByTestId('merchant_id').value).toBe(
        merchantConnection.merchant_id
    )
    expect(queryByTestId('merchant_processor').value).toBe(
        merchantConnection.merchant_processor
    )
    expect(getByText('status here')).toBeInTheDocument()
})
