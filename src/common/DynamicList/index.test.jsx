import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import DynamicList from '.'

test('display dynamic list', async () => {
    const items = ['one', 'two']
    const removalCallback = jest.fn()
    const { getByText, queryAllByTestId } = render(
        <DynamicList removalCallback={removalCallback} items={items} />
    )
    expect(getByText('one')).toBeInTheDocument()
    fireEvent.click(queryAllByTestId('dynamic-list-item-removal')[0])
})
