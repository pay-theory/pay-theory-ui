import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import AccountOverviewCard from '.'

import * as BooksHooks from '../../hooks'
import { member } from '../../test-data'

test('display district overview card', async() => {
    const { getByText } = render(
        <BooksHooks.Context.Member.Provider value={member}>
            <div id='container'>
                <AccountOverviewCard />
            </div>
        </BooksHooks.Context.Member.Provider>
    )
    expect(getByText(member.user_id)).toBeInTheDocument()
    expect(
        getByText(`${member.given_name} ${member.family_name}`)
    ).toBeInTheDocument()
    expect(getByText(member.email)).toBeInTheDocument()
})
