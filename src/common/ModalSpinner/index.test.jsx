import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import ModalSpinner, { openSpinner, closeSpinner } from '.'

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

test('modal open and close', async () => {
	const { queryByTestId } = render(
		<div className='spinner-wrapper'>
			<div id='container' />
			<ModalSpinner />
		</div>
	)

	expect(queryByTestId('spinner-form')).not.toBeVisible()
	openSpinner()
	expect(queryByTestId('spinner-form')).toBeVisible()
	closeSpinner()
	expect(queryByTestId('spinner-form')).not.toBeVisible()
})

test('modal opened and closed', async () => {
	const { queryByTestId } = render(
		<div className='spinner-wrapper'>
			<div id='container' />
			<ModalSpinner on />
		</div>
	)

	expect(queryByTestId('spinner-form')).toBeVisible()
	closeSpinner()
	expect(queryByTestId('spinner-form')).not.toBeVisible()
})
