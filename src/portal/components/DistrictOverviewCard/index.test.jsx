import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import DistrictOverview from './'

import * as BooksHooks from '../../../hooks'
import { classicDistrict } from '../../../test-data'

test('display district overview card', async() => {
	const { getByText, queryByTestId } = render(
		<BooksHooks.context.district.Provider value={classicDistrict}>
			<div id="container">
				<DistrictOverview />
			</div>
		</BooksHooks.context.district.Provider>
	)
	expect(getByText(classicDistrict.districtData.UID)).toBeInTheDocument()
	expect(
		getByText(classicDistrict.districtData.district_name)
	).toBeInTheDocument()
	expect(
		getByText(classicDistrict.districtData.district_street)
	).toBeInTheDocument()
	expect(
		getByText(classicDistrict.districtData.district_email)
	).toBeInTheDocument()
	expect(
		getByText(classicDistrict.districtData.district_phone)
	).toBeInTheDocument()
})
