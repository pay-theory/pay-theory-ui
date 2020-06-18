import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import { ModalSpinner, openModal, closeModal } from '../../common'

import ModalReceiptTransactions from '.'

import { transactions } from '../../test-data'

test('modal open and close', async () => {
    const { getByText } = render(
        <div className='spinner-wrapper'>
            <div className='modal-wrapper'>
                <div id='container' />
                <ModalReceiptTransactions
                    school='test-school'
                    account='test-account'
                    transactions={transactions}
                />
            </div>
            <ModalSpinner />
        </div>
    )

    expect(getByText(transactions[0].student_id)).toBeInTheDocument()
    expect(getByText(transactions[0].student_id)).not.toBeVisible()
    openModal()
    expect(getByText(transactions[0].student_id)).toBeVisible()
    closeModal()
    expect(getByText(transactions[0].student_id)).not.toBeVisible()
})
