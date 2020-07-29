import React from 'react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import { openModal, closeModal } from '../../common/ModalContent'
import ModalSpinner from '../../common/ModalSpinner'

import ModalPartnerDistrict from '.'

test('modal create partner success', async() => {
    const promise = Promise.resolve()
    const createNewPartner = jest.fn(() => promise)

    const { queryByTestId } = render(
        <div className='spinner-wrapper'>
                <div className='modal-wrapper'>
                    <div id='container' />
                    <ModalPartnerDistrict createNewPartner={createNewPartner} />
                </div>
                <ModalSpinner />
            </div>
    )
    expect(queryByTestId('partner_name')).not.toBeVisible()
    openModal()
    expect(queryByTestId('partner_name')).toBeVisible()

    fireEvent.change(queryByTestId('partner_name'), {
        target: { value: 'name' }
    })
    fireEvent.submit(queryByTestId('create-partner-form'))

    expect(createNewPartner).toHaveBeenCalledTimes(1)

    closeModal()
    expect(queryByTestId('partner_name')).not.toBeVisible()
    await act(() => promise)
})
