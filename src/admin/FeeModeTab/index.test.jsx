import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import FeeModeTab from '.'

import { feeModes } from '../../test-data'

test('display feeModes tab', async () => {
    const { queryByTestId } = render(<FeeModeTab feeModes={feeModes} />)

    expect(queryByTestId('service-fee')).toBeInTheDocument()
})
