import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import UtilityBar from '.'

test('display utility bar without button', async () => {
    const { getByText } = render(<UtilityBar>child</UtilityBar>)

    expect(getByText('child')).toBeInTheDocument()
})

test('display utility bar with button', async () => {
    const clickAction = jest.fn()
    const { getByText } = render(
        <UtilityBar addButton='add this' clickAction={clickAction}>
            child
        </UtilityBar>
    )

    expect(getByText('child')).toBeInTheDocument()
    expect(getByText('add this')).toBeInTheDocument()
})
