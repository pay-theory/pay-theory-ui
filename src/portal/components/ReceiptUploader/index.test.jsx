import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import {
	render,
	cleanup,
	fireEvent,
	waitForElement,
}
from '@testing-library/react'

import ReceiptUploader from './'
import * as BooksHooks from '../../../hooks'
import { receipt_excel } from '../../../test-data'

test('display file uploader open', async() => {
	const callback = jest.fn()
	const { getByText, getAllByText, queryByTestId } = render(
		<ReceiptUploader callback={callback} visible />
	)
	expect(queryByTestId('upload-dropzone')).toBeVisible()

	fireEvent.drop(queryByTestId('dropzone-input'), atob(receipt_excel))

	await waitForElement(() => queryByTestId('files-dropped'))
})

test('display file uploader closed', async() => {
	const callback = jest.fn()
	const { getByText, getAllByText, queryByTestId } = render(
		<ReceiptUploader callback={callback} />
	)

	expect(queryByTestId('upload-dropzone')).not.toBeVisible()
})
