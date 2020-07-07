import React from 'react'
import PropTypes from 'prop-types'

import { InnerTable, CardTable } from '../../common'

const formatFee = (fee) => {
    return `$${fee / 100}`
}

const formatDate = (stamp) => {
    const dated = new Date(stamp)
    return `${dated.getMonth() + 1}/${dated.getDate()}/${dated.getFullYear()}`
}

const TransactionsTable = (props) => {
    const generateTableColumns = () => {
        return [
            { className: 'transaction-id', label: 'Transaction ID' },
            { className: 'create-date', label: 'Create Date' },
            { className: 'status', label: 'Status' },
            { className: 'amount numeric', label: 'Amount' }
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
                        className: 'status',
                        content: item.state
                    },
                    {
                        className: 'amount numeric',
                        content: formatFee(item.amount)
                    }
                ],
                key: item.id,
                view: () => props.viewTransaction(item)
            }
        })
    }

    return (
        <CardTable>
            <InnerTable
                columns={generateTableColumns()}
                rows={generateTableRows(props.transactions)}
            >
                <style global='true' jsx='true'>
                    {`
                        .transaction-id {
                            width: 210px;
                        }
                        .create-date {
                            width: 110px;
                        }
                        .status {
                            min-width: 140px;
                        }
                        .amount {
                            width: 60px;
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
