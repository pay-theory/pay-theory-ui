import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent, act, waitFor } from '@testing-library/react'

import { openModal, closeModal, ModalSpinner } from '../../common'

import ModalCreateRole from '.'

test('modal create role success', async() => {
    const promise = Promise.resolve()

    const createNewRole = jest.fn(() => promise)

    const { queryByTestId } = render(
        <div className='spinner-wrapper'>
                <div className='modal-wrapper'>
                    <div id='container' />
                    <ModalCreateRole
                        createNewRole={createNewRole}
                        roleType='System'
                    />
                </div>
                <ModalSpinner />
            </div>
    )
    expect(queryByTestId('role_title')).not.toBeVisible()
    openModal()
    expect(queryByTestId('role_title')).toBeVisible()

    fireEvent.change(queryByTestId('role_title'), {
        target: { value: 'name' }
    })
    fireEvent.submit(queryByTestId('create-role-form'))

    expect(createNewRole).toHaveBeenCalledTimes(1)

    closeModal()
    expect(queryByTestId('role_title')).not.toBeVisible()

    await act(() => promise)
})
