import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import PortalHead from './'
import * as BooksHooks from '../../hooks'
import { account, page } from '../../test-data'

import { AccountMenuButton, AccountMenuItems, PortalLabel } from './children'

test('display portal head', async() => {
    const logout = jest.fn()
    const { getByText, getAllByText, queryByTestId } = render(
        <BooksHooks.Context.Account.Provider value={account}>
            <BooksHooks.Context.Page.Provider value={page}>
                <PortalHead logout={logout} />
            </BooksHooks.Context.Page.Provider>
        </BooksHooks.Context.Account.Provider>
    )

    expect(getByText(page.title)).toBeInTheDocument()
    expect(getAllByText(account.nickname)[0]).toBeInTheDocument()

    fireEvent.keyPress(queryByTestId('account-logout'), {
        key: 'Enter',
        code: 13,
        charCode: 13
    })

    expect(queryByTestId("account-menu")).toBeInTheDocument()
})

test('PortalLabel shows title from page context', async() => {
    const { getByText } = render(
        <BooksHooks.Context.Page.Provider value={page}>
            <PortalLabel />
        </BooksHooks.Context.Page.Provider>
    )

    expect(getByText(page.title)).toBeInTheDocument()
})

test('AccountMenuButton shows display name from account context', async() => {
    const { getByText } = render(
        <BooksHooks.Context.Account.Provider value={account}>
            <AccountMenuButton />
        </BooksHooks.Context.Account.Provider>
    )

    expect(getByText(account.nickname)).toBeInTheDocument()
})

test('AccountMenuButton shows display name from account context', async() => {
    const logout = jest.fn()
    const { getByText, queryByTestId } = render(
        <BooksHooks.Context.Account.Provider value={account}>
            <AccountMenuItems logout={logout} />
        </BooksHooks.Context.Account.Provider>
    )

    expect(getByText(account.nickname)).toBeInTheDocument()

    fireEvent.click(queryByTestId('account-logout'))
    expect(logout).toHaveBeenCalled()
})

test('display portal head without account menu', async() => {
    const logout = jest.fn()
    const { getByText, getAllByText, queryByTestId } = render(
        <BooksHooks.Context.Account.Provider value={account}>
            <BooksHooks.Context.Page.Provider value={page}>
                <PortalHead />
            </BooksHooks.Context.Page.Provider>
        </BooksHooks.Context.Account.Provider>
    )

    expect(queryByTestId("account-menu")).not.toBeInTheDocument()
})
