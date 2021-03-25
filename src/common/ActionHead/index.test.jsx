import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import ActionHead from '.'

test('display form head', async() => {
    let action = jest.fn()
    const { getByText, queryByTestId } = render(<ActionHead
                                    header='something'
                                    action={action}
                                    label='action'
                                    actionId='action'
                                />)

    expect(getByText('something')).toBeInTheDocument()

    fireEvent.click(queryByTestId('action'))
    expect(action).toHaveBeenCalledTimes(1)
})
