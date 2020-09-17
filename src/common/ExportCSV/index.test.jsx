import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import ExportCSV from '.'

test('exportCSV button doesnt fire when array is empty', async() => {
    global.URL.createObjectURL = jest.fn();
    const csvArray = []
    const { queryByTestId } = render(
        <ExportCSV
            id="download-link"
            items={csvArray}
            fileName="my_exported_file.csv"
          />)

    fireEvent.click(queryByTestId('export-csv'))

    expect(global.URL.createObjectURL).not.toHaveBeenCalled()

})

test('exportCSV does fire when there is 1 object in the array', async() => {
    global.URL.createObjectURL = jest.fn();
    const csvArray = [{ test: "test" }]
    const { queryByTestId } = render(
        <ExportCSV
            id="download-link"
            items={csvArray}
            fileName="my_exported_file.csv"
          />)


    fireEvent.click(queryByTestId('export-csv'))

    expect(global.URL.createObjectURL).toHaveBeenCalled()
})
