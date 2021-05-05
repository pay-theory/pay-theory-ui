import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { InnerTable, CardTable, Pagination, ExportCSV } from '../../common'

import { formatDate } from '../../common/dateUtils'

import { parseAddress } from '../../common/generalUtils'

const formatFee = (fee) => {
    return fee < 0 ?
        `-$${(Math.abs(fee) / 100).toFixed(2)}` :
        `$${(fee / 100).toFixed(2)}`
}

const formatString = (string) => {
    return string ? string[0] + string.substring(1).toLowerCase() : ''
}

const TransactionsTable = (props) => {
    const {
        transactions,
        viewTransaction,
        handleRefund,
        selected,
        setSelected,
        sort,
        setSort,
        viewSettlement,
        total,
        page,
        setPage
    } = props

    const [csvArray, setCsvArray] = useState([])

    const generateTableColumns = () => {
        return [{
                className: 'transaction-id',
                label: 'Transaction ID',
                sortable: true
            },
            { className: 'update-date', label: 'Update Date', sortable: true },
            {
                className: 'customer-name',
                label: 'Customer Name',
                sortable: true
            },
            {
                className: 'payment-account',
                label: 'Payment Account',
                sortable: true
            },
            {
                className: 'settlement numeric',
                label: 'Settlement',
                sortable: true
            },
            { className: 'status', label: 'Status', sortable: true },
            { className: 'amount numeric', label: 'Amount', sortable: true },
            { className: 'refund', label: 'Refund', sortable: false }
        ]
    }

    const generateTableRows = (reports) => {
        return reports.map((item, i) => {
            return {
                columns: [{
                        className: 'transaction-id',
                        content: item.transfer_id
                    },
                    {
                        className: 'update-date',
                        content: formatDate(item.updated_at)
                    },
                    {
                        className: 'customer-name',
                        content: item.name
                    },
                    {
                        className: 'payment-account',
                        content: (
                            <span className='payment-account-detail'>
                                <span
                                    className={`pay-theory-card-badge pay-theory-card-${
                                        item.card_brand
                                            ? item.card_brand
                                                  .toLowerCase()
                                                  .replace(/_/g, '-')
                                            : 'unknown'
                                    }`}
                                />
                                ending in {item.last_four}
                            </span>
                        )
                    },
                    {
                        className: 'settlement numeric',
                        content: item.settlement ? (
                            <span
                                className='settlement-number link-column'
                                onClick={() => viewSettlement(item.settlement)}
                            >
                                {item.settlement}
                            </span>
                        ) : (
                            ''
                        )
                    },
                    {
                        className: `status ${
                            item.state === 'SUCCEEDED'
                                ? 'received'
                                : item.state === 'APPROVED'
                                ? 'pending'
                                : item.state.toLowerCase()
                        }`,
                        content: item.state === 'SUCCEEDED' ?
                            'Received' : item.state === 'APPROVED' ?
                            'Pending' : formatString(item.state)
                    },
                    {
                        className: 'amount numeric',
                        content: formatFee(item.amount)
                    },
                    {
                        className: 'refund',
                        content: item.state === 'SETTLED' || item.state === 'RECEIVED' || item.state === 'SUCCEEDED' ? (
                            <span
                                    className='action other'
                                    data-testid='refund-action'
                                    onClick={() => handleRefund(item)}
                                    title='refund'
                                >
                                    <span>
                                        <i className='fal fa-undo' />
                                    </span>
                                </span>
                        ) : (
                            <span />
                        )
                    }
                ],
                key: `${item.transfer_id}-row`,
                view: () => viewTransaction(item),
                item: item
            }
        })
    }

    useEffect(() => {
        const newArray = []
        selected.forEach((item) => newArray.push(transactions[item]))
        setCsvArray(parseAddress(newArray))
    }, [selected])

    return (
        <div className="transactions-table">
            <InnerTable
                columns={generateTableColumns()}
                rows={generateTableRows(transactions)}
                selected={selected}
                setSelected={setSelected}
                setSort={setSort}
                sort={sort}
            />
            <div className='table-footer'>
                <ExportCSV
                    fileName={`PT-Payments-${formatDate(new Date())}.csv`}
                    id='download-link'
                    items={csvArray}
                />
                {total > 1 ? (
                    <Pagination page={page} setPage={setPage} total={total} />
                ) : null}
            </div>
            <style global='true' jsx='true'>
                {`
                .transactions-table {
                  margin: 0px 24px;
                }
            .transaction-id {
              width: 140px;
            }
            .transaction-id p {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .update-date {
              width: 105px;
            }
            .status {
              min-width: 110px;
            }
            .amount {
              width: 70px;
            }
            .payment-account {
              width: 150px;
            }
            .customer-name {
              width: 130px;
            }
            .actions {
              width: 70px !important;
            }
            .settlement {
              width: 100px;
            }
            .refund {
              width: 50px !important;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .settlement .settlement-number {
              color: #0099ff,
              cursor: pointer
            }

            .declined p,
            .pending p,
            .settled p,
            .received p,
            .reversed p{
              border-radius: 14px;
              color: white;
              height: 28px;
              min-width: auto;
              justify-content: center;
              align-items: center;
              display: flex;
              font-size: 16px;
            }

            .settled p {
              background: #5BC794;
            }

            .declined p {
              background: #EA4141;
            }

            .pending p {
              background: #F5BD42;
            }

            .received p {
              background: #4098EB;
            }

            .reversed p {
              background: #DB367D;
            }

            .pay-theory-card-badge {
              background-repeat: no-repeat;
              background-size: 100%;
              background-position: 50%;
              height: 40px;
              width: 45px;
              align-self: center;
              margin-right: 5px;
            }

            .pay-theory-card-visa {
              background-image: url(https://assets.paytheory.com/visa-badge-icon.svg);
            }

            .pay-theory-card-mastercard {
              background-image: url(https://assets.paytheory.com/mastercard-badge-icon.svg);
            }

            .pay-theory-card-american-express {
              background-image: url(https://assets.paytheory.com/amex-badge-icon.svg);
            }

            .pay-theory-card-discover {
              background-image: url(https://assets.paytheory.com/discover-badge-icon.svg);
            }

            .payment-account-detail {
              display: flex;
            }

            .table-footer {
            height: 40px;
            margin: 10px 24px;
            width: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
           .export-csv {
            position: absolute;
            left: 0px;
          }

          `}
            </style>
        </div>
    )
}

TransactionsTable.propTypes = {
    transactions: PropTypes.array.isRequired,
    viewTransaction: PropTypes.func.isRequired,
    handleRefund: PropTypes.func.isRequired,
    selected: PropTypes.array.isRequired,
    setSelected: PropTypes.func.isRequired,
    setSort: PropTypes.func,
    sort: PropTypes.object.isRequired
}

export default TransactionsTable
