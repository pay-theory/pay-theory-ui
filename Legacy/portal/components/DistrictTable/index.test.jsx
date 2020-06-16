import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import DistrictTable from './'
import * as BooksHooks from '../../../hooks'
import { classicDistrict, redesignDistrict } from '../../../test-data'

const districts = [{
		key: classicDistrict.district,
		data: classicDistrict.districtData,
	},
	{
		key: redesignDistrict.district,
		data: redesignDistrict.districtData,
	},
]

test('display district table with content', async() => {
	const viewDistrict = jest.fn()
	const deleteDistrict = jest.fn()
	const { getByText, queryAllByTestId } = render(
		<BooksHooks.context.districts.Provider value={districts}>
			<DistrictTable
				viewDistrict={viewDistrict}
				deleteDistrict={deleteDistrict}
			/>
		</BooksHooks.context.districts.Provider>
	)

	fireEvent.click(queryAllByTestId('view-action')[0])
	expect(viewDistrict).toHaveBeenCalledTimes(1)

	fireEvent.click(queryAllByTestId('delete-action')[0])
	expect(deleteDistrict).toHaveBeenCalledTimes(1)
})

test('display district table without content', async() => {
	const viewDistrict = jest.fn()
	const deleteDistrict = jest.fn()
	const { getByText, queryAllByTestId } = render(
		<BooksHooks.context.districts.Provider value={[]}>
			<DistrictTable
				viewDistrict={viewDistrict}
				deleteDistrict={deleteDistrict}
			/>
		</BooksHooks.context.districts.Provider>
	)
})
