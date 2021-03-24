import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import ReceiptsTable from './'
import * as BooksHooks from '../../hooks'
import { receipts } from '../../test-data'

test('display district table with content', async () => {
    const viewUpload = jest.fn()
    const { queryAllByTestId } = render(
        <BooksHooks.Context.Receipts.Provider value={receipts}>
            <ReceiptsTable viewUpload={viewUpload} />
        </BooksHooks.Context.Receipts.Provider>
    )

    fireEvent.click(queryAllByTestId('view-action')[0])
    expect(viewUpload).toHaveBeenCalledTimes(1)
})

test('display district table without content', async () => {
    const viewUpload = jest.fn()
    const { queryAllByTestId } = render(
        <BooksHooks.Context.Receipts.Provider value={[]}>
            <ReceiptsTable viewUpload={viewUpload} />
        </BooksHooks.Context.Receipts.Provider>
    )
    expect(queryAllByTestId('view-action')).toEqual([])
})
