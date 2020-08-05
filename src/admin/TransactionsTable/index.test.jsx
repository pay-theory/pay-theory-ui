import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import TransactionsTable from '.'
import transactions from '../../test-data/transactions.json'

test('display TransactionsTable w/ working action buttons', async() => {
    const viewTransaction = jest.fn()
    const handleRefund = jest.fn()
    const handleResendingEmail = jest.fn()
    const handleVoid = jest.fn()

    const firstTransaction = 'TRdsQZBp8Fqm535qb82dE4wo'

    const { getByText, queryAllByTestId } = render(
        <TransactionsTable
        transactions={transactions._embedded.transfers}
        viewTransaction={viewTransaction}
        handleRefund={handleRefund}
        handleResendingEmail={handleResendingEmail}
        handleVoid={handleVoid}
        />
    )

    expect(getByText(firstTransaction)).toBeInTheDocument();

    fireEvent.click(getByText(firstTransaction));
    expect(viewTransaction).toBeCalledTimes(1)

    fireEvent.click(queryAllByTestId('Refund-action')[0])
    expect(handleRefund).toBeCalledTimes(1)
})
