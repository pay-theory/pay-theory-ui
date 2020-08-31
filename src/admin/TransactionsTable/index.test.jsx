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
    let selected = []
    const setSelected = newSelected => selected = newSelected

    const firstTransaction = 'TRbiLuFNX3XFREN83oZDSEdm'

    const { getByText, queryAllByTestId } = render(
        <TransactionsTable
        transactions={transactions}
        viewTransaction={viewTransaction}
        handleRefund={handleRefund}
        handleResendingEmail={handleResendingEmail}
        handleVoid={handleVoid}
        selected={selected}
        setSelected={setSelected}
        sort={{}}
        />
    )

    expect(getByText(firstTransaction)).toBeInTheDocument();

    fireEvent.click(getByText(firstTransaction));
    expect(viewTransaction).toBeCalledTimes(1)

    fireEvent.click(queryAllByTestId('Refund-action')[0])
    expect(handleRefund).toBeCalledTimes(1)
})
