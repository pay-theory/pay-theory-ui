import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material/react-button'

import * as BooksHooks from '../../hooks'

const PaymentItemPublishCard = (props) => {
    return (
        <BooksHooks.context.paymentItem.Consumer>
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
                                className='secondary-button'
                                onClick={props.onPreview}
                                data-testid='preview-payment-draft'
                            >
                                Preview
                            </Button>
                        </div>
                        <div className='publish-card-actions'>
                            <Button
                                className='secondary-button'
                                onClick={props.onSave}
                                data-testid='save-payment-draft'
                            >
                                Save Draft
                            </Button>
                            <Button
                                className='primary-button'
                                data-testid='publish-payment-draft'
                                onClick={props.onPublish}
                                disabled={paymentHook.item_status === 'active'}
                            >
                                Publish
                            </Button>
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
        </BooksHooks.context.paymentItem.Consumer>
    )
}

PaymentItemPublishCard.propTypes = {
    onPreview: PropTypes.func.isRequired,
    onPublish: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}

export default PaymentItemPublishCard
