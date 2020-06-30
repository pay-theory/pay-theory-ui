import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import TabPage from '.'

test('display TabPage', async () => {
    const { getByText, getByTestId } = render(
        <TabPage id='test' visibility='gone'>
            Test
        </TabPage>
    )

    expect(getByText('Test')).toBeInTheDocument()
    expect(getByTestId('tab-page')).toBeInTheDocument()
})
