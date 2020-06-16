import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import PortalHead from './'
import * as BooksHooks from '../../hooks'
import { account, page } from '../../test-data'

test('display portal head', async () => {
    const logout = jest.fn()
    const { getByText, getAllByText, queryByTestId } = render(
        <BooksHooks.context.account.Provider value={account}>
            <BooksHooks.context.page.Provider value={page}>
                <PortalHead logout={logout} />
            </BooksHooks.context.page.Provider>
        </BooksHooks.context.account.Provider>
    )

    expect(getByText(page.title)).toBeInTheDocument()
    expect(getAllByText(account.display_name)[0]).toBeInTheDocument()

    fireEvent.keyPress(queryByTestId('account-logout'), {
        key: 'Enter',
        code: 13,
        charCode: 13
    })
})
