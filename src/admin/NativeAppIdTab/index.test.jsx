import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import NativeAppIdTab from '.'

import { nativeCredentials } from '../../test-data'

test('display NativeAppId tab', async() => {
    const add = jest.fn()
    const { queryByTestId, queryByText } = render(
        <div className='spinner-wrapper'>
                                <div className='modal-wrapper'>
                                    <div id='container' />
                                    <NativeAppIdTab
                                    addAction={add}
                                    android={nativeCredentials.android}
                                    deleteAction={() => {}}
                                    ios={nativeCredentials.ios}
                                    />
                                    </div>
                                    </div>
    )

    expect(queryByTestId('native-app-id-tab')).toBeInTheDocument()

    expect(queryByText('Add Native App Credentials')).not.toBeVisible()

    fireEvent.click(queryByTestId('add-ios'))

    expect(queryByText('Add Native App Credentials')).toBeVisible()

    fireEvent.change(queryByTestId('platforms'), { target: { value: 'ios' } })

    expect(queryByTestId('bundle-id')).toBeInTheDocument()

    fireEvent.change(queryByTestId('bundle-id'), { target: { value: 'ios' } })
    fireEvent.change(queryByTestId('team-id'), { target: { value: 'ios' } })

    fireEvent.click(queryByTestId('add-button'))

    expect(add).toHaveBeenCalledTimes(1)
})
