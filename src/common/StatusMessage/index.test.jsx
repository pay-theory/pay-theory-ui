/* eslint-disable no-undef */

import '@testing-library/jest-dom/extend-expect'

import { render, waitFor } from '@testing-library/react'

import { StockTags } from './'

test('display success message row', async() => {
    const { findByTestId } = render(
        StockTags.success('success message', () => {})
    )

    await waitFor(() => findByTestId('success-content'))
})

test('display default success message row', async() => {
    const { findByTestId } = render(
        StockTags.success({ reason: 'some reason' }, () => {})
    )

    findByTestId('success-content')
})

test('display default success message row', async() => {
    const { findByTestId } = render(
        StockTags.success({ message: 'some message' }, () => {})
    )

    findByTestId('success-content')
})

test('display default success message row', async() => {
    const { findByTestId } = render(
        StockTags.success({ invalid: 'success message' }, () => {})
    )

    findByTestId('success-content')
})

test('display default success message row', async() => {
    const { findByTestId } = render(StockTags.success(undefined, () => {}))

    findByTestId('success-content')
})
