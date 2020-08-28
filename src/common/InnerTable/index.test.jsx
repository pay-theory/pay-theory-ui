import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import InnerTable from '.'

const mockView = jest.fn()

const mockDelete = jest.fn()

const mockCopy = jest.fn()

const itemsArray = [
    { name: 'test-one', description: 'this is the first test row' },
    { name: 'test-two', description: 'this is the second test row' }
]

const generateTableColumns = () => {
    return [
        { className: 'item-name', label: 'name' },
        { className: 'item-description', label: 'description' }
    ]
}

const generateTableRows = (items) => {
    return items.map((item, i) => {
        return {
            columns: [{
                    className: 'name',
                    content: item.name
                },
                {
                    className: 'description',
                    content: item.description
                }
            ],
            key: `test-key-${i}`
        }
    })
}

const generateViewTableRows = (items) => {
    return items.map((item, i) => {
        return {
            columns: [{
                    className: 'name',
                    content: item.name
                },
                {
                    className: 'description',
                    content: item.description
                }
            ],
            key: `test-key-${i}`,
            view: mockView
        }
    })
}

const generateViewDeleteTableRows = (items) => {
    return items.map((item, i) => {
        return {
            columns: [{
                    className: 'name',
                    content: item.name
                },
                {
                    className: 'description',
                    content: item.description
                }
            ],
            key: `test-key-${i}`,
            view: mockView,
            delete: mockDelete
        }
    })
}

const generateCopyOnlyTableRows = (items) => {
    return items.map((item, i) => {
        return {
            columns: [{
                    className: 'name',
                    content: item.name
                },
                {
                    className: 'description',
                    content: item.description
                }
            ],
            key: `test-key-${i}`,
            copyCallback: mockCopy,
            copyText: 'copy me'
        }
    })
}

test('display district list without actions', async() => {
    const { getByText, queryByTestId } = render(
        <Router>
            <InnerTable
                columns={generateTableColumns()}
                rows={generateTableRows(itemsArray)}
            />
        </Router>
    )

    expect(getByText(itemsArray[1].description)).toBeInTheDocument()
    expect(queryByTestId('view-action')).not.toBeInTheDocument()
    expect(queryByTestId('linked-column')).not.toBeInTheDocument()
    expect(queryByTestId('delete-action')).not.toBeInTheDocument()
})

test('display district list with view', async() => {
    const tableRows = generateViewTableRows(itemsArray)

    const { getByText, queryAllByTestId } = render(
        <Router>
            <InnerTable
                columns={generateTableColumns()}
                rows={tableRows}
                canView
                hasActions
            />
        </Router>
    )

    expect(getByText(itemsArray[1].description)).toBeInTheDocument()
    expect(queryAllByTestId('view-action')).toHaveLength(tableRows.length)
    expect(queryAllByTestId('linked-column')).toHaveLength(tableRows.length)
    expect(queryAllByTestId('delete-action')).toHaveLength(0)
})

test('display district list with view and delete', async() => {
    const tableRows = generateViewDeleteTableRows(itemsArray)

    const { getByText, queryAllByTestId } = render(
        <Router>
            <InnerTable
                columns={generateTableColumns()}
                rows={tableRows}
                canDelete
                hasActions
            />
        </Router>
    )

    expect(getByText(itemsArray[1].description)).toBeInTheDocument()
    expect(queryAllByTestId('view-action')).toHaveLength(tableRows.length)
    expect(queryAllByTestId('linked-column')).toHaveLength(tableRows.length)
    expect(queryAllByTestId('delete-action')).toHaveLength(tableRows.length)
})

test('display district list with copy only', async() => {
    Object.defineProperty(
        document,
        'execCommand',
        jest.fn().mockImplementation(() => {})
    )

    const tableRows = generateCopyOnlyTableRows(itemsArray)

    const { getByText, queryAllByTestId } = render(
        <Router>
            <InnerTable
                columns={generateTableColumns()}
                rows={tableRows}
                copyOnly
                hasActions
            />
        </Router>
    )

    expect(getByText(itemsArray[1].description)).toBeInTheDocument()
    expect(queryAllByTestId('view-action')).toHaveLength(0)
    expect(queryAllByTestId('linked-column')).toHaveLength(0)
    expect(queryAllByTestId('delete-action')).toHaveLength(0)
    expect(queryAllByTestId('copy-action')).toHaveLength(tableRows.length)

    fireEvent.click(queryAllByTestId('copy-action')[0])
    expect(mockCopy).toHaveBeenCalledTimes(1)
})

test('display district list with checkboxes to select columns', async() => {
    let selected = []
    const setSelected = newArray => selected = newArray
    const { getByText, queryByTestId, queryAllByTestId } = render(
        <Router>
            <InnerTable
                columns={generateTableColumns()}
                rows={generateTableRows(itemsArray)}
                selected={selected}
                setSelected={setSelected}
            />
        </Router>
    )

    expect(getByText(itemsArray[1].description)).toBeInTheDocument()
    expect(queryByTestId('view-action')).not.toBeInTheDocument()
    expect(queryByTestId('linked-column')).not.toBeInTheDocument()
    expect(queryByTestId('delete-action')).not.toBeInTheDocument()
    expect(queryAllByTestId('select-item')).toBeTruthy()

    await expect(selected.length).toBe(0)

    await fireEvent.click(queryAllByTestId('select-item')[1])

    await expect(selected.length).toBe(1)
})

test('display district list with checkboxes to select columns', async() => {
    let selected = []
    const setSelected = newArray => selected = newArray
    const { getByText, queryByTestId, queryAllByTestId } = render(
        <Router>
            <InnerTable
                columns={generateTableColumns()}
                rows={generateTableRows(itemsArray)}
                selected={selected}
                setSelected={setSelected}
            />
        </Router>
    )

    expect(selected.length).toBe(0)

    fireEvent.click(queryByTestId('header-select-item'))

    expect(selected.length).toBe(2)
})
