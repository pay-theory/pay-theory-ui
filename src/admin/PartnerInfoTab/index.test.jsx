import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import PartnerInfoTab from './'
import ModalSpinner from '../../common/ModalSpinner'
import * as BooksHooks from '../../hooks'

import { partner } from '../../test-data'

/*
PartnerInfoTab.propTypes = {
    apiPrefix: PropTypes.string.isRequired,
    addIp: PropTypes.func.isRequired,
    setStatusMessage: PropTypes.func.isRequired,
    ipRemovalCallback: PropTypes.func.isRequired,
    savePartner: PropTypes.func.isRequired,
}
 */

test('display partner tab', async() => {
    const setStatusMessage = jest.fn()
    const savePartner = jest.fn(() => Promise.resolve())
    const apiGenerator = jest.fn()
    const { queryByTestId } = render(
        <div className='spinner-wrapper'>
            <div className='modal-wrapper'>
                <div id='container'>
                    <BooksHooks.context.partner.Provider value={partner}>
                        <PartnerInfoTab
                            apiPrefix='testing'
                            setStatusMessage={setStatusMessage}
                            savePartner={savePartner}
                            onGenerateApiKey={apiGenerator}
                        />
                    </BooksHooks.context.partner.Provider>
                </div>
            </div>
            <ModalSpinner />
        </div>
    )

    fireEvent.click(queryByTestId("generate-partner-apikey"))
    expect(apiGenerator).toBeCalledTimes(1)

})
