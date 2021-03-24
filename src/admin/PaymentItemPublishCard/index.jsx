import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../../common/'

import * as BooksHooks from '../../hooks'

const PaymentItemPublishCard = (props) => {
    return (
        <BooksHooks.Context.PaymentItem.Consumer>
            {(paymentHook) => {
                return (
                    <div
                        data-testid='paymentHookPublishCard'
                        className='publish-overview card rounded'
                    >
                        <div className='publish-card-actions'>
                            <div>
                                <i className='fal fa-eye' />
                                Status: <b>{paymentHook.item_status}</b>
                            </div>
                            <Button
                                color='primary-2'
                                onClick={props.onPreview}
                                name='preview-payment-draft'
                                label='Preview'
                            />
                        </div>
                        <div className='publish-card-actions'>
                            <Button
                                color='primary-2'
                                onClick={props.onSave}
                                name='save-payment-draft'
                                label='Save Draft'
                            />
                            <Button
                                color='primary'
                                name='publish-payment-draft'
                                onClick={props.onPublish}
                                disabled={paymentHook.item_status === 'active'}
                                label='Publish'
                            />
                        </div>
                        <style jsx='true'>{`
                            :root {
                                --mdc-theme-secondary: #0199ed;
                            }

                            .publish-card-actions {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: space-between;
                                margin: 18px 16px;
                            }
                            .publish-card-actions div,
                            .publish-card-actions button {
                                min-width: 106px;
                            }
                            .publish-card-status-date {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: flex-start;
                                margin: 18px 24px;
                            }

                            .publish-card-actions div i {
                                margin: 0 6px 0 0;
                            }

                            .publish-card-status-date b {
                                margin: 0 0 0 4px;
                                color: #101822;
                            }
                            .publish-overview {
                                justify-content: center;
                                align-items: center;
                                margin: 0px 24px 24px 8px;
                                width: 320px;
                            }
                        `}</style>
                    </div>
                )
            }}
        </BooksHooks.Context.PaymentItem.Consumer>
    )
}

PaymentItemPublishCard.propTypes = {
    onPreview: PropTypes.func.isRequired,
    onPublish: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}

export default PaymentItemPublishCard
