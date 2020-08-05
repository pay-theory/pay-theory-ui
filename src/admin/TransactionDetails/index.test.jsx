import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import TransactionDetails from './'
import transactions from '../../test-data/transactions.json'

test('display TransactionDetails w/o messages', async() => {
    // eslint-disable-next-line no-unused-vars
    const { getByText, queryByTestId } = render(
        <TransactionDetails transaction={transactions._embedded.transfers[0]} />
    )

    expect(getByText('No Messages')).toBeInTheDocument();
})

test('display TransactionDetails with messages', async() => {
    // eslint-disable-next-line no-unused-vars
    const { getByText, queryByTestId } = render(
        <TransactionDetails transaction={transactions._embedded.transfers[1]} />
    )

    expect(getByText('This is a test message')).toBeInTheDocument();
})
