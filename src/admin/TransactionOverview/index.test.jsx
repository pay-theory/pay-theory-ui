import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import TransactionOverview from './'
import * as BooksHooks from '../../hooks'
import { payment } from '../../test-data'

test('display transaction overview', async () => {
    // eslint-disable-next-line no-unused-vars
    const { getByText, queryByTestId } = render(
        <BooksHooks.context.payment.Provider value={payment}>
            <TransactionOverview />
        </BooksHooks.context.payment.Provider>
    )
})
test('display transaction overview anonymous payor', async () => {
    payment.payor.is_anonymous = true
    payment.transaction_history[0].new_payment_instrument = false
    // eslint-disable-next-line no-unused-vars
    const { getByText, queryByTestId } = render(
        <BooksHooks.context.payment.Provider value={payment}>
            <TransactionOverview />
        </BooksHooks.context.payment.Provider>
    )
})
