/* eslint-disable camelcase */
import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import ReceiptUploader from './'
import { receipt_excel } from '../../test-data'

test('display file uploader open', async () => {
	const callback = jest.fn()
	const { queryByTestId, findByTestId } = render(
		<ReceiptUploader callback={callback} visible />
	)
	expect(queryByTestId('upload-dropzone')).toBeVisible()

	// eslint-disable-next-line no-undef
	fireEvent.drop(queryByTestId('dropzone-input'), atob(receipt_excel))

	findByTestId('files-dropped')
})

test('display file uploader closed', async () => {
	const callback = jest.fn()
	const { queryByTestId } = render(<ReceiptUploader callback={callback} />)

	expect(queryByTestId('upload-dropzone')).not.toBeVisible()
})
