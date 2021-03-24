import React from 'react'
import PropTypes from 'prop-types'

import { CardTable, InnerTable } from '../../common'
import * as BooksHooks from '../../hooks'

const PaymentItemTable = (props) => {
    return (
        <BooksHooks.Context.PaymentItems.Consumer>
            {(paymentItems) => {
                const generateTableColumns = () => {
                    return [
                        { className: 'payment-item-name', label: 'name' },
                        {
                            className: 'payment-item-account-code',
                            label: 'account code'
                        },
                        { className: 'payment-item-status', label: 'status' }
                    ]
                }
                const generateTableRows = (paymentItems) => {
                    return paymentItems.map((item, i) => {
                        return {
                            columns: [
                                {
                                    className: 'payment-item-name',
                                    content: item.data.item_title
                                },
                                {
                                    className: 'payment-item-account-code',
                                    content: item.data.item_account_code
                                },
                                {
                                    className: `payment-item-status ${item.data.item_status}`,
                                    content: item.data.item_status
                                }
                            ],
                            key: item.key,
                            view: () =>
                                props.viewPaymentItem(
                                    item.data,
                                    item.data.item_title
                                ),
                            delete: () =>
                                props.deletePaymentItem(
                                    item.key,
                                    item.data.item_title
                                )
                        }
                    })
                }
                return (
                    <CardTable>
                        <InnerTable
                            columns={generateTableColumns()}
                            rows={generateTableRows(paymentItems)}
                            hasActions
                            canDelete
                        />
                        <style jsx='true' global='true'>{`
                            .payment-item-name {
                                min-width: 200px;
                                max-width: 200px;
                            }

                            .payment-item-account-code {
                                min-width: 200px;
                                max-width: 200px;
                            }

                            .payment-item-status {
                                min-width: 200px;
                                max-width: 200px;
                                text-align: center;
                                display: inline-block;
                                max-height: 28px;
                                border-radius: 14px;
                                font-size: 16px;
                                line-height: 20px;
                                font-weight: 400;
                                letter-spacing: 0;
                                padding: 4px 14px;
                                margin: 2px;
                            }

                            .payment-item-status.modified {
                                background-color: #0199ed;
                                border-radius: 50px;
                                color: white;
                            }
                            .payment-item-status.draft {
                                background-color: #0199ed;
                                border-radius: 50px;
                                color: white;
                            }

                            .payment-item-status.active {
                                background-color: #0bd8aa;
                                border-radius: 50px;
                                color: white;
                            }

                            .payment-item-status.discontinued {
                                background-color: #ed454c;
                                border-radius: 50px;
                                color: white;
                            }

                            .payment-item-status.expired {
                                background-color: #ef5a22;
                                border-radius: 50px;
                                color: white;
                            }
                        `}</style>
                    </CardTable>
                )
            }}
        </BooksHooks.Context.PaymentItems.Consumer>
    )
}

PaymentItemTable.propTypes = {
    viewPaymentItem: PropTypes.func.isRequired,
    deletePaymentItem: PropTypes.func.isRequired
}

export default PaymentItemTable
