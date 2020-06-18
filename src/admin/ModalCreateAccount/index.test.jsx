import React from 'react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent, wait } from '@testing-library/react'

import { openModal, closeModal } from '../../common/ModalContent'
import ModalSpinner from '../../common/ModalSpinner'

import ModalCreateAccount from '.'

/*
ModalCreateAccount.propTypes = {
	roleLabel: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	createNewMember: PropTypes.func.isRequired,
	setStatusMessage: PropTypes.func.isRequired,
	partner: PropTypes.string,
	district: PropTypes.string,
}
*/

test('modal create account success', async () => {
    // await act(async () => {
    const createNewMember = jest.fn(() => Promise.resolve())
    const setStatusMessage = jest.fn()
    const { getByText, queryByTestId } = render(
        <div className='spinner-wrapper'>
            <div className='modal-wrapper'>
                <div id='container' />
                <ModalCreateAccount
                    roleLabel='tester'
                    role='test'
                    createNewMember={createNewMember}
                    setStatusMessage={setStatusMessage}
                    district='test-district'
                    partner='test-partner'
                />
            </div>
            <ModalSpinner />
        </div>
    )
    expect(queryByTestId('first_name')).not.toBeVisible()
    openModal()
    expect(queryByTestId('first_name')).toBeVisible()

    fireEvent.change(queryByTestId('first_name'), {
        target: { value: 'first' }
    })
    fireEvent.change(queryByTestId('last_name'), {
        target: { value: 'last' }
    })
    fireEvent.change(queryByTestId('email'), {
        target: { value: 'this@that.com' }
    })
    fireEvent.change(queryByTestId('phone_number'), {
        target: { value: '6143400823' }
    })
    fireEvent.change(queryByTestId('title'), {
        target: { value: 'title' }
    })
    fireEvent.submit(queryByTestId('create-account-form'))
    await wait(() => queryByTestId('success-content'))

    expect(createNewMember).toHaveBeenCalledTimes(1)

    closeModal()
    expect(queryByTestId('first_name')).not.toBeVisible()
    // })
})

test('modal create account invalid phone', async () => {
    await act(async () => {
        const createNewMember = jest.fn(() => Promise.resolve())
        const setStatusMessage = jest.fn()
        const { queryByTestId } = render(
            <div className='spinner-wrapper'>
                <div className='modal-wrapper'>
                    <div id='container' />
                    <ModalCreateAccount
                        roleLabel='tester'
                        role='test'
                        createNewMember={createNewMember}
                        setStatusMessage={setStatusMessage}
                    />
                </div>
                <ModalSpinner />
            </div>
        )
        expect(queryByTestId('first_name')).not.toBeVisible()
        openModal()
        expect(queryByTestId('first_name')).toBeVisible()

        fireEvent.change(queryByTestId('first_name'), {
            target: { value: 'first' }
        })
        fireEvent.change(queryByTestId('last_name'), {
            target: { value: 'last' }
        })
        fireEvent.change(queryByTestId('email'), {
            target: { value: 'this@that.com' }
        })
        fireEvent.change(queryByTestId('phone_number'), {
            target: { value: 'abc' }
        })
        fireEvent.change(queryByTestId('title'), {
            target: { value: 'title' }
        })
        fireEvent.submit(queryByTestId('create-account-form'))

        expect(setStatusMessage).toHaveBeenCalledTimes(1)

        closeModal()
        expect(queryByTestId('first_name')).not.toBeVisible()
    })
})

test('modal create account invalid email', async () => {
    const createNewMember = jest.fn(() => Promise.resolve())
    const setStatusMessage = jest.fn()

    await act(async () => {
        const { queryByTestId } = render(
            <div className='spinner-wrapper'>
                <div className='modal-wrapper'>
                    <div id='container' />
                    <ModalCreateAccount
                        roleLabel='tester'
                        role='test'
                        createNewMember={createNewMember}
                        setStatusMessage={setStatusMessage}
                    />
                </div>
                <ModalSpinner />
            </div>
        )
        expect(queryByTestId('first_name')).not.toBeVisible()
        openModal()
        expect(queryByTestId('first_name')).toBeVisible()

        fireEvent.change(queryByTestId('first_name'), {
            target: { value: 'first' }
        })
        fireEvent.change(queryByTestId('last_name'), {
            target: { value: 'last' }
        })
        fireEvent.change(queryByTestId('email'), {
            target: { value: 'invalid' }
        })
        fireEvent.change(queryByTestId('phone_number'), {
            target: { value: '6143400823' }
        })
        fireEvent.change(queryByTestId('title'), {
            target: { value: 'title' }
        })
        fireEvent.submit(queryByTestId('create-account-form'))

        expect(setStatusMessage).toHaveBeenCalledTimes(1)

        closeModal()
        expect(queryByTestId('first_name')).not.toBeVisible()
    })
})

test('modal create account fail', async () => {
    // eslint-disable-next-line prefer-promise-reject-errors
    const createNewMember = jest.fn(() => Promise.reject('failed'))
    const setStatusMessage = jest.fn()
    await act(async () => {
        const { queryByTestId } = render(
            <div className='spinner-wrapper'>
                <div className='modal-wrapper'>
                    <div id='container' />
                    <ModalCreateAccount
                        roleLabel='tester'
                        role='test'
                        createNewMember={createNewMember}
                        setStatusMessage={setStatusMessage}
                    />
                </div>
                <ModalSpinner />
            </div>
        )
        expect(queryByTestId('first_name')).not.toBeVisible()
        openModal()
        expect(queryByTestId('first_name')).toBeVisible()
        fireEvent.change(queryByTestId('first_name'), {
            target: { value: 'first' }
        })
        fireEvent.change(queryByTestId('last_name'), {
            target: { value: 'last' }
        })
        fireEvent.change(queryByTestId('email'), {
            target: { value: 'this@that.com' }
        })
        fireEvent.change(queryByTestId('phone_number'), {
            target: { value: '6143400823' }
        })
        fireEvent.change(queryByTestId('title'), {
            target: { value: 'title' }
        })
        fireEvent.submit(queryByTestId('create-account-form'))
        await wait(() => queryByTestId('error-content'))

        expect(setStatusMessage).toHaveBeenCalledTimes(1)
        await wait(() => queryByTestId('status-cleared'))
    })
})
