/*global jest*/
/*global expect*/
import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import SystemTransactions from '.'
import transactions from '../../test-data/transactions.json'

test('display SystemTransactions w/ working action buttons', async() => {
    global.URL.createObjectURL = jest.fn();
    const viewTransaction = jest.fn()
    const handleRefund = jest.fn()
    let selected = []
    const setSelected = newSelected => selected = newSelected

    const firstTransaction = 'TRbiLuFNX3XFREN83oZDSEdm'

    const { getByText, queryAllByTestId } = render(
        <SystemTransactions
        transactions={transactions}
        viewTransaction={viewTransaction}
        handleRefund={handleRefund}
        selected={selected}
        setSelected={setSelected}
        sort={{}}
        />
    )

    expect(getByText(firstTransaction)).toBeInTheDocument();

    fireEvent.click(getByText(firstTransaction));
    expect(viewTransaction).toBeCalledTimes(1)

    fireEvent.click(queryAllByTestId('refund-action')[1])
    expect(handleRefund).toBeCalledTimes(1)
})

test('display SystemTransactions w/ working group action buttons', async() => {
    const viewTransaction = jest.fn()
    const handleRefund = jest.fn()
    global.URL.createObjectURL = jest.fn();
    let selected = [0, 1]
    const setSelected = newSelected => selected = newSelected

    const firstTransaction = 'TRbiLuFNX3XFREN83oZDSEdm'

    const { getByText, queryAllByTestId, queryByTestId } = render(
        <SystemTransactions
        transactions={transactions}
        viewTransaction={viewTransaction}
        handleRefund={handleRefund}
        selected={selected}
        setSelected={setSelected}
        sort={{}}
        />
    )


    fireEvent.click(queryAllByTestId('select-item')[0])

    expect(selected.length).toBe(1)
})
