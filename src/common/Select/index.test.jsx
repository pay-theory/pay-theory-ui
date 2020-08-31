import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import Select from '.'

import { filterBarOptions } from '../../test-data'

test('display select', async() => {
    const change = jest.fn()
    const { getByText } = render(<Select label='test' onChange={change} options={filterBarOptions} name='pt-select' value="" />)

    expect(getByText('test')).toBeInTheDocument()

})

test('display select without empty value', async() => {
    const change = jest.fn()
    const value = 'test'
    const { getByText } = render(<Select label='test' onChange={change} options={filterBarOptions} value={value} name='pt-select' />)

    expect(getByText('test')).toBeInTheDocument()

})
