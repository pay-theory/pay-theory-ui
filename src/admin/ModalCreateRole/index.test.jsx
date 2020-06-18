import React from 'react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import { openModal, closeModal, ModalSpinner } from '../../common'

import ModalCreateRole from '.'

test('modal create role success', async () => {
    act(() => {
        const createNewRole = jest.fn(() => Promise.resolve())

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
    })
})
