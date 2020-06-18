import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent, act } from '@testing-library/react'

import RoleInfoTab from './'

import * as BooksHooks from '../../hooks'
import { roles } from '../../test-data'

/* global jest */
/* global expect */

test('display role info tab (locked)', async () => {
    const saveRole = jest.fn()
    const { queryByTestId } = render(
        <BooksHooks.context.role.Provider value={roles.systemRoles[0]}>
            <RoleInfoTab setStatusMessage={() => {}} saveRole={saveRole} />
        </BooksHooks.context.role.Provider>
    )

    fireEvent.click(queryByTestId('save-role-button'))
    expect(saveRole).toHaveBeenCalledTimes(0)
})

test('display role info tab (unlocked)', async () => {
    const promise = Promise.resolve()
    const saveRole = jest.fn()
    const { queryByTestId } = render(
        <BooksHooks.context.role.Provider value={roles.systemRoles[1]}>
            <RoleInfoTab setStatusMessage={() => {}} saveRole={saveRole} />
        </BooksHooks.context.role.Provider>
    )

    fireEvent.click(queryByTestId('manage-districts'))

    fireEvent.click(queryByTestId('read-only-manage-districts'))

    fireEvent.click(queryByTestId('district-information'))

    fireEvent.change(queryByTestId('role_title'), {
        target: { value: 'something else' }
    })

    fireEvent.click(queryByTestId('save-role-button'))
    expect(saveRole).toHaveBeenCalledTimes(1)

    expect(queryByTestId('page-permissions')).toBeVisible()

    fireEvent.click(queryByTestId('full-access-radio'))

    expect(queryByTestId('page-permissions')).not.toBeVisible()

    fireEvent.click(queryByTestId('limited-access-radio'))

    await act(() => promise)

    expect(queryByTestId('page-permissions')).toBeVisible()
})
