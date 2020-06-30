import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import PartnerTable from './'
import * as BooksHooks from '../../hooks'
import { partners } from '../../test-data'

test('display partner table', async () => {
	const viewPartner = jest.fn()
	const deletePartner = jest.fn()
	const { queryAllByTestId } = render(
		<BooksHooks.context.partners.Provider value={partners}>
			<PartnerTable viewPartner={viewPartner} deletePartner={deletePartner} />
		</BooksHooks.context.partners.Provider>
	)

	fireEvent.click(queryAllByTestId('view-action')[0])
	expect(viewPartner).toHaveBeenCalledTimes(1)

	fireEvent.click(queryAllByTestId('delete-action')[0])
	expect(deletePartner).toHaveBeenCalledTimes(1)
})
