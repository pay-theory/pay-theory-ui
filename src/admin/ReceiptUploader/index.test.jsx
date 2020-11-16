/* eslint-disable camelcase */
import React from 'react'
import { JSDOM } from "jsdom"

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import { act } from 'react-dom/test-utils'

import ReceiptUploader from './'
import { receipt_excel } from '../../test-data'


const { window } = new JSDOM(`...`);
// or even
const { document } = (new JSDOM(`...`)).window;

global.window = window
global.document = document

test('display file uploader open', async() => {
    const callback = jest.fn()
    const { queryByTestId, findByTestId } = render(
        <ReceiptUploader callback={callback} visible />
    )
    expect(queryByTestId('upload-dropzone')).toBeVisible()

    // eslint-disable-next-line no-undef
    // act(() => {
    //     fireEvent.drop(queryByTestId('dropzone-input'), atob(receipt_excel))
    // });


    // findByTestId('files-dropped')
})

test('display file uploader closed', async() => {
    const callback = jest.fn()
    const { queryByTestId } = render(<ReceiptUploader callback={callback} />)

    expect(queryByTestId('upload-dropzone')).not.toBeVisible()
})
