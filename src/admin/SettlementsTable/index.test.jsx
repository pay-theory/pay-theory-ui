import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import SettlementsTable from '.'
import { settlements } from '../../test-data'


test('display SettlementsTable w/ working action buttons', async() => {
    const viewSettlement = jest.fn()
    global.URL.createObjectURL = jest.fn();
    let selected = []
    const setSelected = newSelected => {
        while (selected.length) {
            selected.pop();
        }
        newSelected.forEach(item => selected.push(item))
    }

    const { queryByTestId, queryAllByTestId, getByText } = render(
        <SettlementsTable
        settlements={settlements}
        sort={{}}
        setSort={() => {}}
        viewSettlement={viewSettlement}
        selected={selected}
        setSelected={setSelected}
        page={1}
        setPage={() => {}}
        total={1}
      />
    )

    fireEvent.click(queryByTestId('export-csv'))

    expect(global.URL.createObjectURL).not.toHaveBeenCalled()

    fireEvent.click(queryAllByTestId('select-item')[0])

    expect(selected.length).toBe(1)

    expect(viewSettlement).not.toHaveBeenCalled()

    fireEvent.click(getByText('pt-settlement-00001a'))

    expect(viewSettlement).toHaveBeenCalled()

})

test('display SettlementsTable w/ working export csv button', async() => {
    const viewSettlement = jest.fn()
    global.URL.createObjectURL = jest.fn();
    let selected = [1]
    const setSelected = newSelected => {
        while (selected.length) {
            selected.pop();
        }
        newSelected.forEach(item => selected.push(item))
    }

    const { queryByTestId, queryAllByTestId, getByText } = render(
        <SettlementsTable
        settlements={settlements}
        sort={{}}
        setSort={() => {}}
        viewSettlement={viewSettlement}
        selected={selected}
        setSelected={setSelected}
        page={1}
        setPage={() => {}}
        total={3}
      />
    )

    fireEvent.click(queryByTestId('export-csv'))

    expect(global.URL.createObjectURL).toHaveBeenCalled()

})
