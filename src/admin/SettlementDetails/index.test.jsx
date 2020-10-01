import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import SettlementDetails from '.'
import { settlement } from '../../test-data'

test('display SettlementDetails w/ working action buttons', async() => {
    const viewTransaction = jest.fn()
    global.URL.createObjectURL = jest.fn();

    const firstTransaction = "pt-aron-00002q"


    const { getByText, queryAllByTestId, queryByTestId } = render(
        <SettlementDetails
        settlement={settlement}
        csvArray={[]}
        viewTransaction={viewTransaction}
        total={1}
        sort={{}}
        setSort={() => {}}
        page={1}
        setPage={() => {}}
      />
    )

    expect(getByText('Settlement #15')).toBeInTheDocument()

    fireEvent.click(queryByTestId('export-csv'))

    expect(global.URL.createObjectURL).not.toHaveBeenCalled()


    expect(viewTransaction).not.toHaveBeenCalled()


    fireEvent.click(getByText(firstTransaction))

    expect(viewTransaction).toHaveBeenCalled()

})

test('display SettlementDetails w/ working action buttons', async() => {
    const viewTransaction = jest.fn()
    global.URL.createObjectURL = jest.fn();

    const firstTransaction = "pt-aron-00002q"


    const { getByText, queryAllByTestId, queryByTestId } = render(
        <SettlementDetails
        csvArray={[{test:"test"}]}
        settlement={settlement}
        viewTransaction={viewTransaction}
        total={10}
        sort={{}}
        setSort={() => {}}
        page={3}
        setPage={() => {}}
      />
    )

    fireEvent.click(queryByTestId('export-csv'))

    expect(global.URL.createObjectURL).toHaveBeenCalled()

})
