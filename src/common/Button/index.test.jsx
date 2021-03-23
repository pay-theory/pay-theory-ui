import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import Button from '.'

test('display button', async() => {
    const click = jest.fn()
    const { getByText, queryByTestId } = render(<Button label='test' onClick={click} name='pt-button' />)

    expect(getByText('test')).toBeInTheDocument()
    expect(queryByTestId('pt-button').type).toBe('button')

    expect(click).toHaveBeenCalledTimes(0)
    fireEvent.click(queryByTestId('pt-button'))
    expect(click).toHaveBeenCalledTimes(1)

})

test('display disabled button', async() => {
    const click = jest.fn()
    const { queryByTestId } = render(<Button label='test' onClick={click} disabled name='pt-button' />)

    expect(queryByTestId('pt-button').disabled).toBeTruthy()

})

test('display leadingIcon button', async() => {
    const click = jest.fn()
    const { queryByTestId } = render(<Button label='test' onClick={click} leadingIcon='arrow' name='pt-button' />)

    expect(queryByTestId('button-leading')).toBeInTheDocument()

})

test('display trailingIcon button', async() => {
    const click = jest.fn()
    const { queryByTestId } = render(<Button label='test' onClick={click} trailingIcon='arrow' name='pt-button' />)

    expect(queryByTestId('button-trailing')).toBeInTheDocument()

})

test('display type reset button', async() => {
    const click = jest.fn()
    const { queryByTestId } = render(<Button label='test' onClick={click} type="reset" name='pt-button' />)

    expect(queryByTestId('pt-button').type).toBe('reset')

})

test('display type submit button', async() => {
    const click = jest.fn()
    const { queryByTestId } = render(<Button label='test' onClick={click} type="submit" name='pt-button' />)

    expect(queryByTestId('pt-button').type).toBe('submit')

})
