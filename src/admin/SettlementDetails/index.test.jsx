import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import SettlementDetails from '.'
import { settlement } from '../../test-data'

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

    const firstTransaction = "pt-aron-00002q"


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

    expect(getByText('Settlement #15')).toBeInTheDocument()

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
