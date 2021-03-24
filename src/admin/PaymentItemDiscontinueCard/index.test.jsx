import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import PaymentItemDiscontinueCard from './'
import * as BooksHooks from '../../hooks'
import { paymentItem } from '../../test-data'

test('display payment discontinue card', async () => {
    const onDiscontinue = jest.fn()
    const copyLink = jest.fn()
    const { queryByTestId } = render(
        <BooksHooks.Context.PaymentItem.Provider value={paymentItem}>
            <PaymentItemDiscontinueCard
                onDiscontinue={onDiscontinue}
                copyLink={copyLink}
            />
        </BooksHooks.Context.PaymentItem.Provider>
    )
    expect(queryByTestId('discontinue-payment-publication')).toBeInTheDocument()
    fireEvent.click(queryByTestId('discontinue-payment-publication'))
    expect(onDiscontinue).toHaveBeenCalledTimes(1)
    fireEvent.click(queryByTestId('copy-published-link'))
    expect(copyLink).toHaveBeenCalledTimes(1)
})

test('hide unpublished payment discontinue card', async () => {
    const payment = { ...paymentItem }
    payment.item_published = false
    payment.item_status = 'discontinued'
    const onDiscontinue = jest.fn()
    const copyLink = jest.fn()
    const { queryByTestId } = render(
        <BooksHooks.Context.PaymentItem.Provider value={payment}>
            <PaymentItemDiscontinueCard
                onDiscontinue={onDiscontinue}
                copyLink={copyLink}
            />
        </BooksHooks.Context.PaymentItem.Provider>
    )
    expect(
        queryByTestId('discontinue-payment-publication')
    ).not.toBeInTheDocument()
})
