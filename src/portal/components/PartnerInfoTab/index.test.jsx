import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent, wait } from '@testing-library/react'

import PartnerInfoTab from './'
import ModalSpinner from '../ModalSpinner'
import * as BooksHooks from '../../../hooks'

import { partner } from '../../../test-data'

/*
PartnerInfoTab.propTypes = {
	apiPrefix: PropTypes.string.isRequired,
	addIp: PropTypes.func.isRequired,
	setStatusMessage: PropTypes.func.isRequired,
	ipRemovalCallback: PropTypes.func.isRequired,
	savePartner: PropTypes.func.isRequired,
}
 */

test('display partner tab', async() => {
	const addIp = jest.fn()
	const setStatusMessage = jest.fn()
	const ipRemovalCallback = jest.fn()
	const savePartner = jest.fn(() => Promise.resolve())
	const { getByText, queryByTestId } = render(
		<div className="spinner-wrapper">
			<div className="modal-wrapper">
				<div id="container">
					<BooksHooks.context.partner.Provider value={partner}>
						<PartnerInfoTab
							apiPrefix="testing"
							addIp={addIp}
							setStatusMessage={setStatusMessage}
							ipRemovalCallback={ipRemovalCallback}
							savePartner={savePartner}
						/>
					</BooksHooks.context.partner.Provider>
				</div>
			</div>
			<ModalSpinner />
		</div>
	)
	fireEvent.change(queryByTestId('partner_name'), {
		target: { value: 'something new' },
	})
	fireEvent.click(queryByTestId('save-partner-button'))
})

test('partner tab - generate api key', async() => {
	delete window.confirm
	window.confirm = () => true

	const addIp = jest.fn()
	const setStatusMessage = jest.fn()
	const ipRemovalCallback = jest.fn()
	const savePartner = jest.fn(() => Promise.resolve())
	const { getByText, queryByTestId } = render(
		<div className="spinner-wrapper">
			<div className="modal-wrapper">
				<div id="container">
					<BooksHooks.context.partner.Provider value={partner}>
						<PartnerInfoTab
							apiPrefix="testing"
							addIp={addIp}
							setStatusMessage={setStatusMessage}
							ipRemovalCallback={ipRemovalCallback}
							savePartner={savePartner}
						/>
					</BooksHooks.context.partner.Provider>
				</div>
			</div>
			<ModalSpinner />
		</div>
	)

	fireEvent.click(queryByTestId('generate-partner-apikey'))
	await wait(() => queryByTestId('success-content'))
	expect(savePartner).toHaveBeenCalledTimes(1)
})

test('partner tab - add valid ip address', async() => {
	const addIp = jest.fn()
	const setStatusMessage = jest.fn()
	const ipRemovalCallback = jest.fn()
	const savePartner = jest.fn(() => Promise.resolve())
	const { getByText, queryByTestId } = render(
		<div className="spinner-wrapper">
			<div className="modal-wrapper">
				<div id="container">
					<BooksHooks.context.partner.Provider value={partner}>
						<PartnerInfoTab
							apiPrefix="testing"
							addIp={addIp}
							setStatusMessage={setStatusMessage}
							ipRemovalCallback={ipRemovalCallback}
							savePartner={savePartner}
						/>
					</BooksHooks.context.partner.Provider>
				</div>
			</div>
			<ModalSpinner />
		</div>
	)

	fireEvent.change(queryByTestId('partner_ip'), {
		target: { value: '127.0.0.1/32' },
	})

	fireEvent.blur(queryByTestId('partner_ip'))
	fireEvent.click(queryByTestId('add-partner-ip'))
	await wait(() => queryByTestId('success-content'))
	expect(addIp).toHaveBeenCalledTimes(1)
})

test('partner tab - add invalid ip address', async() => {
	const partner = {
		partnerData: {
			partner_name: 'Degbugging',
			partner_ip_range: ['99.47.253.73/32', '127.0.0.0/24'],
			partner_apikey: '$2b$10$A8CVp3Y4zsKca4ko3yI6fOOz3JcIM/CTNxEqKoeiU7twVmH2L4wsq',
			UID: 'b3416bf7-d164-5f92-8497-179e7bccd382',
		},
		partner: 'b3416bf7-d164-5f92-8497-179e7bccd382',
		partnerName: 'Degbugging',
	}

	const addIp = jest.fn()
	const setStatusMessage = jest.fn()
	const ipRemovalCallback = jest.fn()
	const savePartner = jest.fn(() => Promise.resolve())
	const { getByText, queryByTestId } = render(
		<div className="spinner-wrapper">
			<div className="modal-wrapper">
				<div id="container">
					<BooksHooks.context.partner.Provider value={partner}>
						<PartnerInfoTab
							apiPrefix="testing"
							addIp={addIp}
							setStatusMessage={setStatusMessage}
							ipRemovalCallback={ipRemovalCallback}
							savePartner={savePartner}
						/>
					</BooksHooks.context.partner.Provider>
				</div>
			</div>
			<ModalSpinner />
		</div>
	)

	fireEvent.change(queryByTestId('partner_ip'), {
		target: { value: '12345' },
	})
	fireEvent.blur(queryByTestId('partner_ip'))

	fireEvent.click(queryByTestId('add-partner-ip'))
	await wait(() => queryByTestId('error-content'))
	expect(addIp).toHaveBeenCalledTimes(0)
})
