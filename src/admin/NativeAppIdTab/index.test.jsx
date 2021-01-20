import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import NativeAppIdTab from '.'

import { feeModes } from '../../test-data'

// test('display feeModes tab', async () => {
//     const { queryByTestId } = render(<NativeAppIdTab />)

//     expect(queryByTestId('native-app-id-tab')).toBeInTheDocument()
// })
