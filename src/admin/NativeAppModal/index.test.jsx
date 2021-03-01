import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import { openModal, closeModal } from '../../common'

import NativeAppModal from '.'

test('modal add ios credentials success', async() => {
    const add = jest.fn()

    const { queryByText, queryByTestId } = render(
        <div className='spinner-wrapper'>
                <div className='modal-wrapper'>
                    <div id='container' />
                    <NativeAppModal
                        action={() => {
                            add()
                            closeModal('native-credentials')
                        }}
                    />
                </div>
            </div>
    )
    expect(queryByText('Add Native App Credentials')).not.toBeVisible()
    openModal('native-credentials')
    expect(queryByText('Add Native App Credentials')).toBeVisible()

    fireEvent.click(queryByTestId('add-button'))

    expect(add).toHaveBeenCalledTimes(0)
    expect(queryByTestId('bundle-id')).not.toBeInTheDocument()

    fireEvent.change(queryByTestId('platforms'), { target: { value: 'ios' } })

    expect(queryByTestId('bundle-id')).toBeInTheDocument()

    fireEvent.change(queryByTestId('bundle-id'), { target: { value: 'ios' } })
    fireEvent.change(queryByTestId('team-id'), { target: { value: 'ios' } })

    fireEvent.click(queryByTestId('add-button'))

    expect(add).toHaveBeenCalledTimes(1)

    expect(queryByText('Add Native App Credentials')).not.toBeVisible()
})

test('modal add android credentials success', async() => {
    const add = jest.fn()

    const { queryByText, queryByTestId } = render(
        <div className='spinner-wrapper'>
                <div className='modal-wrapper'>
                    <div id='container' />
                    <NativeAppModal
                        action={() => {
                            add()
                        }}
                    />
                </div>
            </div>
    )
    expect(queryByText('Add Native App Credentials')).not.toBeVisible()
    openModal('native-credentials')
    expect(queryByText('Add Native App Credentials')).toBeVisible()

    fireEvent.click(queryByTestId('add-button'))

    expect(add).toHaveBeenCalledTimes(0)
    expect(queryByTestId('prod-digest')).not.toBeInTheDocument()

    fireEvent.change(queryByTestId('platforms'), { target: { value: 'android' } })

    expect(queryByTestId('prod-digest')).toBeInTheDocument()

    fireEvent.change(queryByTestId('prod-digest'), { target: { value: 'ios' } })
    fireEvent.change(queryByTestId('debug-digest'), { target: { value: 'ios' } })
    fireEvent.change(queryByTestId('apk-package'), { target: { value: 'ios' } })

    fireEvent.click(queryByTestId('add-button'))

    expect(add).toHaveBeenCalledTimes(1)

    fireEvent.click(queryByTestId('cancel-button'))

    expect(queryByText('Add Native App Credentials')).not.toBeVisible()
})
