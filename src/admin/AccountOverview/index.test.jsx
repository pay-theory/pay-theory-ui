import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import AccountOverview from '.'
import * as BooksHooks from '../../hooks'
import { member, roles } from '../../test-data'

const saveAccount = jest.fn()
const onChange = jest.fn()

test('display account overview', async() => {
    const { queryByTestId } = render(
        <BooksHooks.Context.Roles.Provider value={roles.systemRoles}>
            <BooksHooks.Context.Member.Provider value={member}>
                <AccountOverview
                    onChange={onChange}
                    saveAccount={saveAccount}
                />
            </BooksHooks.Context.Member.Provider>
        </BooksHooks.Context.Roles.Provider>
    )

    expect(queryByTestId('nickname').value).toBe(member.nickname)

    fireEvent.change(queryByTestId('nickname'), { target: { value: '001' } })
    expect(onChange).toHaveBeenCalledTimes(1)

    fireEvent.click(queryByTestId('submit-account-detail'))
    expect(saveAccount).toHaveBeenCalledTimes(1)
})
