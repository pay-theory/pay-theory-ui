import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { BasicInfo, PaymentOptions, PublicationOptions } from './sub'

import { StockTags } from '../../common/StatusMessage'

const DonationItemEntry = (props) => {
    const [statusMessage, setStatusMessage] = useState(<div />)
    const titleFocus = () => {
        setStatusMessage(
            StockTags.warn('titles cannot be edited', () => {
                return setStatusMessage(<div data-testid='status-cleared' />)
            })
        )
    }
    return (
        <div className='payment-item-detail'>
            <BasicInfo
                titleFocus={titleFocus}
                changePayment={props.changePayment}
            />
            <PaymentOptions changePayment={props.changePayment} />
            {props.children}
            <PublicationOptions changePayment={props.changePayment} />
            {statusMessage}
            <style jsx='true'>{`
                .payment-item-detail {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    flex-grow: 1;
                }
            `}</style>
        </div>
    )
}

DonationItemEntry.propTypes = {
    changePayment: PropTypes.func.isRequired
}

export default DonationItemEntry
