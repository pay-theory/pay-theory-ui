import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import Pagination from '.'

test('Pagination displays with only 4 pages', async() => {
    let page = 1;
    const setPage = int => page = int;
    const { queryByText } = render(<Pagination page={page} setPage={setPage} total={4} />)

    expect(queryByText('4')).toBeInTheDocument()
    expect(queryByText('5')).not.toBeInTheDocument()
})

test('Pagination displays with 10 pages', async() => {
    let page = 1;
    const setPage = jest.fn();
    const { queryByText, queryByTestId } = render(<Pagination page={page} setPage={setPage} total={10} />)

    expect(queryByText('4')).toBeInTheDocument()
    expect(queryByText('7')).not.toBeInTheDocument()
    expect(queryByTestId('previous')).not.toBeInTheDocument()

    fireEvent.click(queryByTestId('jump-end'))

    expect(setPage).toHaveBeenCalledWith(10)

    fireEvent.click(queryByTestId('next'))

    expect(setPage).toHaveBeenCalledWith(2)
})

test('Pagination displays with 10 pages at end', async() => {
    let page = 10;
    const setPage = jest.fn();
    const { queryByText, queryByTestId } = render(<Pagination page={page} setPage={setPage} total={10} />)

    expect(queryByText('7')).toBeInTheDocument()
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(queryByTestId('next')).not.toBeInTheDocument()

    fireEvent.click(queryByTestId('jump-beginning'))

    expect(setPage).toHaveBeenCalledWith(1)

    fireEvent.click(queryByTestId('previous'))

    expect(setPage).toHaveBeenCalledWith(9)
})

test('Pagination displays with 10 pages in middle', async() => {
    let page = 5;
    const setPage = jest.fn();
    const { queryByText, queryByTestId, queryAllByTestId } = render(<Pagination page={page} setPage={setPage} total={10} />)

    expect(queryByText('7')).toBeInTheDocument()
    expect(queryByText('1')).not.toBeInTheDocument()
    expect(queryByTestId('next')).toBeInTheDocument()
    expect(queryByTestId('previous')).toBeInTheDocument()

    fireEvent.click(queryByTestId('jump-beginning'))

    expect(setPage).toHaveBeenCalledWith(1)

    fireEvent.click(queryByTestId('previous'))

    expect(setPage).toHaveBeenCalledWith(4)

    fireEvent.click(queryAllByTestId('number')[2])

    expect(setPage).toHaveBeenCalledWith(5)
})
