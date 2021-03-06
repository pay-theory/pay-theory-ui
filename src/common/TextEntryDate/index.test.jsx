import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import TextEntryDate from '.'

test('display date entry', async() => {
    const onChange = jest.fn()
    const { getByText, queryByTestId } = render(
        <TextEntryDate
            name='test-name'
            label='test-label'
            value='100'
            onChange={onChange}
        />
    )

    expect(getByText('test-label')).toBeInTheDocument()

    fireEvent.change(queryByTestId('test-name'), { target: { value: 999 } })
    expect(onChange).toHaveBeenCalledTimes(1)

    fireEvent.change(queryByTestId('test-name'), { target: { value: "01/01/2020" } })
    expect(onChange).toHaveBeenCalledTimes(2)
})
