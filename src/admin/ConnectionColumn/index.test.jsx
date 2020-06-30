import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import ConnectionColumn from '.'

test('display coming soon', async () => {
	const callback = jest.fn()
	const { getByText } = render(
		<ConnectionColumn
			title='test-title'
			description='test-description'
			logo='test-logo'
			callback={callback}
			comingSoon
		/>
	)

	expect(getByText('test-title')).toBeInTheDocument()
	expect(getByText('test-description')).toBeInTheDocument()
	expect(getByText('Coming Soon!')).toBeInTheDocument()

	expect(getByText('Setup')).toBeInTheDocument()

	fireEvent.click(getByText('Setup'))
	expect(callback).toHaveBeenCalledTimes(0)
})

test('display setup', async () => {
	const callback = jest.fn()
	const { getByText } = render(
		<ConnectionColumn
			title='test-title'
			description='test-description'
			logo='test-logo'
			callback={callback}
		/>
	)

	expect(getByText('test-title')).toBeInTheDocument()
	expect(getByText('test-description')).toBeInTheDocument()
	expect(getByText('Setup')).toBeInTheDocument()

	fireEvent.click(getByText('Setup'))
	expect(callback).toHaveBeenCalledTimes(1)
})

test('display connected', async () => {
	const callback = jest.fn()
	const { getByText } = render(
		<ConnectionColumn
			title='test-title'
			description='test-description'
			logo='test-logo'
			callback={callback}
			connected
		/>
	)

	expect(getByText('test-title')).toBeInTheDocument()
	expect(getByText('test-description')).toBeInTheDocument()
	expect(getByText('Connected')).toBeInTheDocument()

	fireEvent.click(getByText('Connected'))
	expect(callback).toHaveBeenCalledTimes(1)
})
