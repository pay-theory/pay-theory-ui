import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import RolesOverview from './'
import { roles } from '../../test-data'

test('display roles overview with content', async () => {
	const viewItem = jest.fn()
	const createItem = jest.fn()
	const deleteItem = jest.fn()
	const roleTypeChanged = jest.fn()
	const { queryAllByTestId, queryByTestId } = render(
		<RolesOverview
			systemRoles={roles.systemRoles}
			districtRoles={roles.districtRoles}
			partnerRoles={roles.partnerRoles}
			viewRole={viewItem}
			createRole={createItem}
			deleteRole={deleteItem}
			roleTypeChanged={roleTypeChanged}
		/>
	)

	fireEvent.click(queryAllByTestId('view-action')[0])
	expect(viewItem).toHaveBeenCalledTimes(1)

	fireEvent.click(queryAllByTestId('delete-action')[0])
	expect(deleteItem).toHaveBeenCalledTimes(0)

	fireEvent.click(queryAllByTestId('delete-action')[1])
	expect(deleteItem).toHaveBeenCalledTimes(1)

	fireEvent.click(queryByTestId('create-system-role-button'))
	expect(createItem).toHaveBeenCalledTimes(1)

	expect(queryByTestId('system-roles-menu')).toHaveClass('active-tab')
	expect(queryByTestId('district-roles-menu')).not.toHaveClass('active-tab')
	expect(queryByTestId('partner-roles-menu')).not.toHaveClass('active-tab')

	fireEvent.click(queryByTestId('district-roles-menu'))
	expect(queryByTestId('district-roles-menu')).toHaveClass('active-tab')
	expect(queryByTestId('partner-roles-menu')).not.toHaveClass('active-tab')

	expect(queryByTestId('partner-roles-menu')).not.toHaveClass('active-tab')

	fireEvent.click(queryByTestId('create-district-role-button'))
	expect(createItem).toHaveBeenCalledTimes(2)

	fireEvent.click(queryByTestId('partner-roles-menu'))
	expect(queryByTestId('partner-roles-menu')).toHaveClass('active-tab')
	expect(queryByTestId('district-roles-menu')).not.toHaveClass('active-tab')

	expect(queryByTestId('system-roles-menu')).not.toHaveClass('active-tab')

	fireEvent.click(queryByTestId('create-partner-role-button'))
	expect(createItem).toHaveBeenCalledTimes(3)

	fireEvent.click(queryByTestId('system-roles-menu'))
	expect(queryByTestId('partner-roles-menu')).not.toHaveClass('active-tab')
	expect(queryByTestId('district-roles-menu')).not.toHaveClass('active-tab')
	expect(queryByTestId('system-roles-menu')).toHaveClass('active-tab')
})

test('display roles overview without content', async () => {
	const viewItem = jest.fn()
	const { queryAllByTestId } = render(
		<RolesOverview
			systemRoles={[]}
			districtRoles={[]}
			partnerRoles={[]}
			viewRole={viewItem}
		/>
	)
	expect(queryAllByTestId('view-action')).toEqual([])
})
