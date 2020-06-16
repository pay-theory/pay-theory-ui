/* eslint-disable no-undef */

import '@testing-library/jest-dom/extend-expect'

import { render, waitForElement } from '@testing-library/react'

import { StockTags } from './'

test('display success message row', async () => {
    const { queryByTestId } = render(
        StockTags.success('success message', () => {})
    )

    await waitForElement(() => queryByTestId('success-content'))
})

test('display default success message row', async () => {
    const { queryByTestId } = render(
        StockTags.success({ reason: 'something' }, () => {})
    )

    await waitForElement(() => queryByTestId('success-content'))
})

test('display default success message row', async () => {
    const { queryByTestId } = render(
        StockTags.success({ message: 'something' }, () => {})
    )

    await waitForElement(() => queryByTestId('success-content'))
})

test('display default success message row', async () => {
    const { queryByTestId } = render(
        StockTags.success({ invalid: 'something' }, () => {})
    )

    await waitForElement(() => queryByTestId('success-content'))
})

test('display default success message row', async () => {
    const { queryByTestId } = render(StockTags.success(undefined, () => {}))

    await waitForElement(() => queryByTestId('success-content'))
})
