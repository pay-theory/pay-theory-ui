import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import { openModal, closeModal } from '../../common/ModalContent'
import ModalSpinner from '../../common/ModalSpinner'

import ModalCreatePaymentItem from '.'

test('modal create payment item success', async () => {
    const createPaymentItem = jest.fn(() => Promise.resolve())

    const { queryByTestId } = render(
        <div className='spinner-wrapper'>
            <div className='modal-wrapper'>
                <div id='container' />
                <ModalCreatePaymentItem
                    createPaymentItem={createPaymentItem}
                    itemType='donation'
                />
            </div>
            <ModalSpinner />
        </div>
    )
    expect(queryByTestId('item_title')).not.toBeVisible()
    openModal()
    expect(queryByTestId('item_title')).toBeVisible()

    fireEvent.change(queryByTestId('item_title'), {
        target: { value: 'name' }
    })
    fireEvent.blur(queryByTestId('item_title'))
    fireEvent.change(queryByTestId('item_account_code'), {
        target: { value: '001' }
    })
    fireEvent.blur(queryByTestId('item_account_code'))
    fireEvent.submit(queryByTestId('create-payment-item-form'))

    expect(createPaymentItem).toHaveBeenCalledTimes(1)

    closeModal()
    expect(queryByTestId('item_title')).not.toBeVisible()
})
