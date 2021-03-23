import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import ModalContent, { openModal, closeModal } from '.'

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

test('modal open and close', async() => {
    const { queryByTestId } = render(
        <div className='modal-wrapper'>
            <div id='container' />
            <ModalContent text='test modal'>
                <div data-testid='am-i-open' />
            </ModalContent>
        </div>
    )

    expect(queryByTestId('am-i-open')).not.toBeVisible()
    openModal()
    expect(queryByTestId('am-i-open')).toBeVisible()
    closeModal()
    expect(queryByTestId('am-i-open')).not.toBeVisible()
})

test('modal open and close with custom identifier', async() => {
    const { queryByTestId } = render(
        <div className='modal-wrapper'>
            <div id='container' />
            <ModalContent text='test modal' identifier='test'>
                <div data-testid='am-i-open' />
            </ModalContent>
        </div>
    )

    expect(queryByTestId('am-i-open')).not.toBeVisible()
    openModal('test')
    expect(queryByTestId('am-i-open')).toBeVisible()
    closeModal('test')
    expect(queryByTestId('am-i-open')).not.toBeVisible()
})
