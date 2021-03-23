import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import AccountsTab from '.'

import ModalCreateAccount from '../ModalCreateAccount'

import * as BooksHooks from '../../hooks'

import { accounts } from '../../test-data'

const viewAccount = jest.fn()
const deleteAccount = jest.fn()

test('display accounts tab', async() => {
    const { queryAllByTestId, queryByTestId } = render(
        <div className='spinner-wrapper'>
            <div className='modal-wrapper'>
                <div id='container' />
                    <BooksHooks.context.accounts.Provider value={accounts}>
                        <AccountsTab
                            id='test-id'
                            visibility='visible'
                            deleteAccount={deleteAccount}
                        />
                        <ModalCreateAccount
                                roleLabel='tester'
                                role='test'
                                createNewMember={() => {}}
                                setStatusMessage={() => {}}
                                merchant='test-district'
                            />
                    </BooksHooks.context.accounts.Provider>
            </div>
        </div>
    )

    fireEvent.click(queryAllByTestId('delete-action')[0])
    expect(deleteAccount).toHaveBeenCalledTimes(1)

    fireEvent.click(queryByTestId('add-account-button'))
    expect(queryByTestId('modal-form')).toBeVisible()
})
