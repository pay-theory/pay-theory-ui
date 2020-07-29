import React from 'react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import { openModal, closeModal } from '../../common/ModalContent'
import ModalSpinner from '../../common/ModalSpinner'

import ModalCreateDistrict from '.'

test('modal create district success', async() => {
    const promise = Promise.resolve()
    const createNewDistrict = jest.fn(() => promise)

    const { queryByTestId } = render(
        <div className='spinner-wrapper'>
                <div className='modal-wrapper'>
                    <div id='container' />
                    <ModalCreateDistrict
                        createNewDistrict={createNewDistrict}
                    />
                </div>
                <ModalSpinner />
            </div>
    )
    expect(queryByTestId('district_name')).not.toBeVisible()
    openModal()
    expect(queryByTestId('district_name')).toBeVisible()

    fireEvent.change(queryByTestId('district_name'), {
        target: { value: 'name' }
    })
    fireEvent.submit(queryByTestId('create-district-form'))

    expect(createNewDistrict).toHaveBeenCalledTimes(1)

    closeModal()
    expect(queryByTestId('district_name')).not.toBeVisible()
    await act(() => promise)
})
