/* eslint-disable no-undef */

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import { StockTags } from './'

test('display success message row', async () => {
    const { findByTestId } = render(
        StockTags.success('success message', () => {})
    )

    findByTestId('success-content')
})

test('display default success message row', async () => {
    const { findByTestId } = render(
        StockTags.success({ reason: 'something' }, () => {})
    )

    findByTestId('success-content')
})

test('display default success message row', async () => {
    const { findByTestId } = render(
        StockTags.success({ message: 'something' }, () => {})
    )

    findByTestId('success-content')
})

test('display default success message row', async () => {
    const { findByTestId } = render(
        StockTags.success({ invalid: 'something' }, () => {})
    )

    findByTestId('success-content')
})

test('display default success message row', async () => {
    const { findByTestId } = render(StockTags.success(undefined, () => {}))

    findByTestId('success-content')
})
