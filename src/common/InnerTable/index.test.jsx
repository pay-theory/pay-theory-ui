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
        { className: 'item-name', label: 'name', sortable: true },
        { className: 'item-description', label: 'description', sortable: true }
    ]
}

const generateTableRows = (items) => {
    return items.map((item, i) => {
        return {
            columns: [{
                    className: 'item-name',
                    content: item.name
                },
                {
                    className: 'item-description',
                    content: item.description
                }
            ],
            key: `test-key-${i}`,
            item: item
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

    fireEvent.click(queryByTestId('item-name-0'))
})

test('display district list with checkboxes to select columns', async() => {
    let sort = {}
    const setSort = async(newSort) => {
        sort.descending = newSort.descending
        sort.ascending = newSort.ascending
    }

    const { queryByTestId } = render(
        <Router>
            <InnerTable
                columns={generateTableColumns()}
                rows={generateTableRows(itemsArray)}
                sort={sort}
                setSort={setSort}
            />
        </Router>
    )

    expect(sort.descending).toBe(undefined)
    expect(sort.ascending).toBe(undefined)

    fireEvent.click(queryByTestId('item-name-0'))

    expect(sort.descending).toBe('')
    expect(sort.ascending).toBe('item-name')

    await fireEvent.click(queryByTestId('item-name-0'))

    await expect(sort.descending).toBe('item-name')
    await expect(sort.ascending).toBe('')

    fireEvent.click(queryByTestId('item-name-0'))

    expect(sort.descending).toBe('')
    expect(sort.ascending).toBe('')

    fireEvent.click(queryByTestId('item-name-0'))

    expect(sort.descending).toBe('')
    expect(sort.ascending).toBe('item-name')

    fireEvent.click(queryByTestId('item-description-1'))

    expect(sort.descending).toBe('')
    expect(sort.ascending).toBe('item-description')
})

test('display district list with checkboxes to select columns', async() => {
    const actionOne = jest.fn()
    const actionTwo = jest.fn()
    const otherActions = [{
            action: actionOne,
            label: "Action One",
            icon: "fa-envelope"
        },
        {
            action: actionTwo,
            label: "Action 2",
            icon: "fa-envelope"
        }
    ]

    const { queryByTestId, queryAllByTestId } = render(
        <Router>
            <InnerTable
                columns={generateTableColumns()}
                rows={generateTableRows(itemsArray)}
                hasActions
                otherActions={otherActions}
            />
        </Router>
    )

    expect(queryAllByTestId('action-one-action').length).toBe(2)

    fireEvent.click(queryAllByTestId('action-one-action')[0])

    expect(actionOne).toHaveBeenCalledTimes(1)

})
