import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import DynamicList from '.'

test('display dynamic list', async() => {
    const items = ['one', 'two']
    const removalCallback = jest.fn()
    const { getByText, queryAllByTestId } = render(
        <DynamicList removalCallback={removalCallback} items={items} />
    )

    expect(queryAllByTestId('dynamic-list-item-text')[0]).toBeTruthy()

    expect(getByText('one')).toBeInTheDocument()
    fireEvent.click(queryAllByTestId('dynamic-list-item-removal')[0])

    expect(removalCallback).toHaveBeenCalled()
})

test('display dynamic list with no items', async() => {
    const { getByText, queryAllByTestId } = render(
        <DynamicList />
    )
    expect(queryAllByTestId('dynamic-list-item-text')[0]).not.toBeTruthy()
})
