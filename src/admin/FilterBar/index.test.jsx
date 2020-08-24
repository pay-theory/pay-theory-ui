import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent, act } from '@testing-library/react'

import FilterBar from '.'

import { filterBarOptions } from '../../test-data'

test('display filterBar and add a filter', async() => {
    const setFilters = jest.fn()
    const { getByText, queryByTestId, getAllByTestId } = render(<FilterBar
        filterOptions={filterBarOptions}
        setFilterList={setFilters}
        filterList={[]}
      />)

    expect(queryByTestId('filter-bar')).toBeInTheDocument()

    expect(setFilters).toHaveBeenCalledTimes(0)

    fireEvent.click(queryByTestId('fb-add'))

    expect(setFilters).toHaveBeenCalledTimes(0)

    await fireEvent.change(queryByTestId('fb-select'), {
        target: { value: 'id' }
    })

    fireEvent.click(queryByTestId('fb-add'))

    expect(setFilters).toHaveBeenCalledTimes(0)

    await fireEvent.change(queryByTestId('fb-search'), {
        target: { value: 'search' }
    })

    await fireEvent.click(queryByTestId('fb-add'))

    expect(setFilters).toHaveBeenCalledTimes(1)

    expect(getAllByTestId('filter-tag').length).toBe(1);

})

test('display filterBar and remove a filter', async() => {
    let filterList = []
    const setFilters = filters => filterList = filters;
    const { getByText, queryByTestId, getAllByTestId } = render(<FilterBar
        filterOptions={filterBarOptions}
        setFilterList={setFilters}
        filterList={filterList}
      />)

    await fireEvent.change(queryByTestId('fb-select'), {
        target: { value: 'created_at' }
    })

    await fireEvent.change(queryByTestId('fb-search'), {
        target: { value: '10/10/2020' }
    })

    await fireEvent.click(queryByTestId('fb-add'))

    await fireEvent.change(queryByTestId('fb-select'), {
        target: { value: 'id' }
    })

    await fireEvent.change(queryByTestId('fb-search'), {
        target: { value: 'search' }
    })

    await fireEvent.click(queryByTestId('fb-add'))

    expect(getAllByTestId('filter-tag').length).toBe(2);
})

test('display filterBar and add a filter with return', async() => {
    let filterList = []
    const setFilters = filters => filterList = filters;
    const { queryAllByTestId, queryByTestId } = render(<FilterBar
        filterOptions={filterBarOptions}
        setFilterList={setFilters}
        filterList={filterList}
      />)

    expect(queryAllByTestId('filter-tag').length).not.toBeTruthy;

    await fireEvent.change(queryByTestId('fb-select'), {
        target: { value: 'created_at' }
    })

    await fireEvent.change(queryByTestId('fb-search'), {
        target: { value: '10/10/2020' }
    })

    await fireEvent.click(queryByTestId('fb-add'))

    await fireEvent.change(queryByTestId('fb-select'), {
        target: { value: 'id' }
    })

    await fireEvent.change(queryByTestId('fb-search'), {
        target: { value: 'search' }
    })

    await fireEvent.keyUp(window, { key: 'A', code: 'KeyA' })

    await fireEvent.keyUp(window, { key: 'Enter', code: 'Enter' })

    expect(queryAllByTestId('filter-tag').length).toBe(2);
})
