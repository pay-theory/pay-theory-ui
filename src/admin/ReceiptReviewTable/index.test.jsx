/* eslint-disable camelcase */
import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent, waitForElement } from '@testing-library/react'

import ReceiptReviewTable from './'
import * as BooksHooks from '../../hooks'
import { receipt_excel, receipt_csv, classicDistrict } from '../../test-data'

test('display receipt review preview table with content', async () => {
    const viewDetails = jest.fn()
    const onAccept = jest.fn()
    const { queryByTestId, queryAllByTestId } = render(
        <BooksHooks.context.district.Provider value={classicDistrict}>
            <BooksHooks.context.receiptReview.Provider value={receipt_excel}>
                <ReceiptReviewTable
                    goBackTo='/'
                    history={[]}
                    viewDetails={viewDetails}
                    onAccept={onAccept}
                    isPreview
                />
            </BooksHooks.context.receiptReview.Provider>
        </BooksHooks.context.district.Provider>
    )
    await waitForElement(() => queryByTestId('success-content'))
    // await waitForElement(() => queryByTestId('status-cleared'))

    expect(queryByTestId('upload-button')).toBeInTheDocument()

    fireEvent.click(queryAllByTestId('view-action')[0])

    expect(viewDetails).toHaveBeenCalledTimes(1)

    fireEvent.click(queryByTestId('upload-button'))

    expect(onAccept).toHaveBeenCalledTimes(1)
})

test('display csv receipt review table with content', async () => {
    const viewDetails = jest.fn()
    const onAccept = jest.fn()
    const { queryByTestId } = render(
        <BooksHooks.context.district.Provider value={classicDistrict}>
            <BooksHooks.context.receiptReview.Provider value={receipt_csv}>
                <ReceiptReviewTable
                    goBackTo='/'
                    history={[]}
                    viewDetails={viewDetails}
                    onAccept={onAccept}
                />
            </BooksHooks.context.receiptReview.Provider>
        </BooksHooks.context.district.Provider>
    )

    expect(queryByTestId('upload-button')).not.toBeInTheDocument()
})

test('display excel receipt review table with content', async () => {
    const viewDetails = jest.fn()
    const onAccept = jest.fn()
    const { queryByTestId } = render(
        <BooksHooks.context.district.Provider value={classicDistrict}>
            <BooksHooks.context.receiptReview.Provider value={receipt_excel}>
                <ReceiptReviewTable
                    goBackTo='/'
                    history={[]}
                    viewDetails={viewDetails}
                    onAccept={onAccept}
                />
            </BooksHooks.context.receiptReview.Provider>
        </BooksHooks.context.district.Provider>
    )

    expect(queryByTestId('upload-button')).not.toBeInTheDocument()
})

test('display receipt review table with invalid content', async () => {
    const viewDetails = jest.fn()
    const onAccept = jest.fn()
    const { queryByTestId } = render(
        <BooksHooks.context.district.Provider value={classicDistrict}>
            <BooksHooks.context.receiptReview.Provider
                // eslint-disable-next-line no-undef
                value={btoa('invalid-receipt')}
            >
                <ReceiptReviewTable
                    goBackTo='/'
                    history={[]}
                    viewDetails={viewDetails}
                    onAccept={onAccept}
                    isPreview
                />
            </BooksHooks.context.receiptReview.Provider>
        </BooksHooks.context.district.Provider>
    )
    await waitForElement(() => queryByTestId('error-content'))
    // await waitForElement(() => queryByTestId('status-cleared'))
})
