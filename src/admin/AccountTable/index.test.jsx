import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import AccountTable from '.'
import * as BooksHooks from '../../hooks'

import { accounts } from '../../test-data'

const viewAccount = jest.fn()
const deleteAccount = jest.fn()

test('display account table', async() => {
    const { queryAllByTestId } = render(
        <BooksHooks.Context.Accounts.Provider value={accounts}>
            <AccountTable
                deleteAccount={deleteAccount}
                id='test-id'
            />
        </BooksHooks.Context.Accounts.Provider>
    )

    fireEvent.click(queryAllByTestId('delete-action')[0])
    expect(deleteAccount).toHaveBeenCalledTimes(1)
})
