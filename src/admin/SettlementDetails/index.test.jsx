import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import SettlementDetails from '.'
import transactions from '../../test-data/transactions.json'

test('display SettlementDetails w/ working action buttons', async() => {
    const viewTransaction = jest.fn()
    const handleRefund = jest.fn()
    const exportCSV = jest.fn()
    const selected = []
    const setSelected = newSelected => {
        while (selected.length) {
            selected.pop();
        }
        newSelected.forEach(item => selected.push(item))
    }

    const firstTransaction = 'TRbiLuFNX3XFREN83oZDSEdm'

    const settlement = {
        settlement_id: "pt-settlement-00001a",
        date_settled: "2020-08-23T15:33:59.21Z",
        transactions: transactions
    };

    const { getByText, queryAllByTestId, queryByTestId } = render(
        <SettlementDetails
        settlement={settlement}
        viewTransaction={viewTransaction}
        handleRefund={handleRefund}
        exportCSV={exportCSV}
        total={10}
        sort={{}}
        setSort={() => {}}
        page={1}
        setPage={() => {}}
        selected={selected}
        setSelected={setSelected}
      />
    )

    expect(getByText('Settlement #pt-settlement-00001a')).toBeInTheDocument()

    expect(selected.length).toBe(0)

    fireEvent.click(queryByTestId('export-csv'))

    expect(exportCSV).not.toHaveBeenCalled()

    fireEvent.click(queryAllByTestId('select-item')[0])

    expect(selected.length).toBe(1)

    fireEvent.click(queryByTestId('export-csv'))

    expect(exportCSV).toHaveBeenCalled()

    expect(handleRefund).not.toHaveBeenCalled()

    expect(viewTransaction).not.toHaveBeenCalled()

    fireEvent.click(queryAllByTestId('refund-action')[0])

    fireEvent.click(getByText(firstTransaction))

    expect(handleRefund).toHaveBeenCalled()

    expect(viewTransaction).toHaveBeenCalled()

})
