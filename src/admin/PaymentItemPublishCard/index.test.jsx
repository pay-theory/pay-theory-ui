import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import PaymentItemPublishCard from './'
import * as BooksHooks from '../../hooks'
import { paymentItem } from '../../test-data'

test('display payment publish card', async () => {
    const onPreview = jest.fn()
    const onPublish = jest.fn()
    const onSave = jest.fn()
    // eslint-disable-next-line no-unused-vars
    const { getByText, queryByTestId } = render(
        <BooksHooks.Context.PaymentItem.Provider value={paymentItem}>
            <PaymentItemPublishCard
                onPreview={onPreview}
                onPublish={onPublish}
                onSave={onSave}
            />
        </BooksHooks.Context.PaymentItem.Provider>
    )
})

test('display inactive payment publish card', async () => {
    const payment = { ...paymentItem }
    payment.item_published = false
    payment.item_status = 'discontinued'
    const onPreview = jest.fn()
    const onPublish = jest.fn()
    const onSave = jest.fn()
    // eslint-disable-next-line no-unused-vars
    const { getByText, queryByTestId } = render(
        <BooksHooks.Context.PaymentItem.Provider value={payment}>
            <PaymentItemPublishCard
                onPreview={onPreview}
                onPublish={onPublish}
                onSave={onSave}
            />
        </BooksHooks.Context.PaymentItem.Provider>
    )
})
