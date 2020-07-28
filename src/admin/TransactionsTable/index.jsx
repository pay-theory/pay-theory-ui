import React from 'react'
import PropTypes from 'prop-types'

import { InnerTable, CardTable } from '../../common'

import { formatDate } from '../../common/dateUtils'

const formatFee = (fee) => {
    return `$${fee / 100}`
}

const formatString = (string) => {
    return string[0] + string.substring(1).toLowerCase()
}

const TransactionsTable = (props) => {
    const { transactions, viewTransaction } = props

    const generateTableColumns = () => {
        return [
            { className: 'transaction-id', label: 'Transaction ID' },
            { className: 'create-date', label: 'Create Date' },
            { className: 'customer-name', label: 'Customer Name' },
            { className: 'transaction-type', label: 'Transaction Type' },
            { className: 'amount numeric', label: 'Amount' },
            { className: 'status', label: 'Status' }
        ]
    }
    const generateTableRows = (reports) => {
        return reports.map((item, i) => {
            return {
                columns: [
                    {
                        className: 'transaction-id',
                        content: item.id
                    },
                    {
                        className: 'create-date',
                        content: formatDate(item.created_at)
                    },
                    {
                        className: 'customer-name',
                        content: item.tags.name
                    },
                    {
                        className: 'transaction-type',
                        content: item.tags.type
                    },
                    {
                        className: 'amount numeric',
                        content: formatFee(item.amount)
                    },
                    {
                        className: `status ${item.state.toLowerCase()}`,
                        content: formatString(item.state)
                    }
                ],
                key: item.id,
                view: () => viewTransaction(item),
                item: item
            }
        })
    }

    const handleRefund = (object) => {
        console.log(`Order ${object.id} was refunded`)
    }

    const handleResendingEmail = (object) => {
        console.log(`Order ${object.id} had the email resent`)
    }

    const handleVoid = (object) => {
        console.log(`Order ${object.id} was voided`)
    }

    const otherActions = [
        {
            action: handleRefund,
            label: 'Refund',
            icon: 'fa-undo'
        },
        {
            action: handleResendingEmail,
            label: 'Resend Email',
            icon: 'fa-envelope'
        },
        {
            action: handleVoid,
            label: 'Void',
            icon: 'fa-times-circle'
        }
    ]

    return (
        <CardTable>
            <InnerTable
                columns={generateTableColumns()}
                hasActions
                otherActions={otherActions}
                rows={generateTableRows(transactions)}
            >
                <style global='true' jsx='true'>
                    {`
                        .transaction-id {
                            width: 220px;
                        }
                        .create-date {
                            width: 110px;
                        }
                        .status {
                            min-width: 120px;
                        }
                        .amount {
                            width: 60px;
                        }
                        .transaction-type {
                            width: 120px;
                        }
                        .customer-name {
                            width: 120px;
                        }
                        .actions {
                            width: 120px !important;
                        }

                        .canceled p,
                        .pending p,
                        .succeeded p {
                            border-radius: 14px;
                            color: white;
                            height: 28px;
                            min-width: auto;
                            justify-content: center;
                            align-items: center;
                            display: flex;
                            font-size: 16px;
                        }

                        .succeeded p {
                            background: #0bd8aa;
                        }

                        .canceled p {
                            background: #ed454c;
                        }

                        .pending p {
                            background: #cad3dd;
                        }
                    `}
                </style>
            </InnerTable>
        </CardTable>
    )
}

TransactionsTable.propTypes = {
    transactions: PropTypes.array.isRequired,
    viewTransaction: PropTypes.func.isRequired
}

export default TransactionsTable
