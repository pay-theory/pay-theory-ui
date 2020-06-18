import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import PortalHead from './'
import * as BooksHooks from '../../hooks'
import { account, page } from '../../test-data'

import { AccountMenuButton, AccountMenuItems, PortalLabel } from './children'

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

test('PortalLabel shows title from page context', async () => {
    const { getByText } = render(
        <BooksHooks.context.page.Provider value={page}>
            <PortalLabel />
        </BooksHooks.context.page.Provider>
    )

    expect(getByText(page.title)).toBeInTheDocument()
})

test('AccountMenuButton shows display name from account context', async () => {
    const { getByText } = render(
        <BooksHooks.context.account.Provider value={account}>
            <AccountMenuButton />
        </BooksHooks.context.account.Provider>
    )

    expect(getByText(account.display_name)).toBeInTheDocument()
})

test('AccountMenuButton shows display name from account context', async () => {
    const logout = jest.fn()
    const { getByText, queryByTestId } = render(
        <BooksHooks.context.account.Provider value={account}>
            <AccountMenuItems logout={logout} />
        </BooksHooks.context.account.Provider>
    )

    expect(getByText(account.display_name)).toBeInTheDocument()

    fireEvent.click(queryByTestId('account-logout'))
    expect(logout).toHaveBeenCalled()
})
