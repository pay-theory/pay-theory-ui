import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import NativeAppIdTab from '.'

import { feeModes } from '../../test-data'

test('display NativeAppId tab', async() => {
    const { queryByTestId } = render(<NativeAppIdTab
                                addAction={() => {}}
                                android={[]}
                                deleteAction={() => {}}
                                ios={[]}
                                />)

    expect(queryByTestId('native-app-id-tab')).toBeInTheDocument()
})
