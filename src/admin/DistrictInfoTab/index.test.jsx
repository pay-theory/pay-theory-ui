import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import DistrictInfoTab from './'
import ModalSpinner from '../../common/ModalSpinner'

import * as BooksHooks from '../../hooks'
import { classicDistrict } from '../../test-data'

test('display district info tab', async () => {
	const saveDistrict = jest.fn()
	const setStatusMessage = jest.fn()
	const { queryByTestId } = render(
		<BooksHooks.context.district.Provider value={classicDistrict}>
			<div id='container'>
				<DistrictInfoTab
					saveDistrict={saveDistrict}
					setStatusMessage={setStatusMessage}
				/>
				<ModalSpinner />
			</div>
		</BooksHooks.context.district.Provider>
	)
	fireEvent.change(queryByTestId('district_phone'), {
		target: { value: '614-596-8965' }
	})
	fireEvent.change(queryByTestId('district_email'), {
		target: { value: 'test@test.com' }
	})
	fireEvent.click(queryByTestId('save-district-button'))
	expect(saveDistrict).toHaveBeenCalledTimes(1)
})

test('save invalid district info phone', async () => {
	const invalidPhoneDistrict = Object.assign({}, classicDistrict)
	invalidPhoneDistrict.districtData.district_phone = 'invalid'
	const saveDistrict = jest.fn()
	const setStatusMessage = jest.fn()
	const { queryByTestId } = render(
		<BooksHooks.context.district.Provider value={invalidPhoneDistrict}>
			<div id='container'>
				<DistrictInfoTab
					saveDistrict={saveDistrict}
					setStatusMessage={setStatusMessage}
				/>
				<ModalSpinner />
			</div>
		</BooksHooks.context.district.Provider>
	)
	fireEvent.click(queryByTestId('save-district-button'))

	expect(setStatusMessage).toHaveBeenCalledTimes(1)
})

test('save invalid district info email', async () => {
	const invalidEmailDistrict = Object.assign({}, classicDistrict)
	invalidEmailDistrict.districtData.district_email = 'invalid'
	invalidEmailDistrict.districtData.district_phone = '614-596-8965'
	const saveDistrict = jest.fn()
	const setStatusMessage = jest.fn()
	const { queryByTestId } = render(
		<BooksHooks.context.district.Provider value={invalidEmailDistrict}>
			<div id='container'>
				<DistrictInfoTab
					saveDistrict={saveDistrict}
					setStatusMessage={setStatusMessage}
				/>
				<ModalSpinner />
			</div>
		</BooksHooks.context.district.Provider>
	)
	fireEvent.click(queryByTestId('save-district-button'))

	expect(setStatusMessage).toHaveBeenCalledTimes(1)
})
