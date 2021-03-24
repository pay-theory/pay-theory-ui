import React from 'react'
import PropTypes from 'prop-types'

import InnerTable from '../../common/InnerTable'
import * as BooksHooks from '../../hooks'

const formatFee = (fee) => {
    // normalize decimal value to cents
    var dollars = fee
    var cents = dollars * 100
    var roundedCents = Math.round(cents)
    var roundedPrice = roundedCents / 100

    // break into dollars and cents
    const parts = roundedPrice.toString().split('.')

    // format with ending zero and dollar sign
    let formatted = `$${roundedPrice}`

    /* istanbul ignore next */
    if (parts.length === 1) {
        formatted = `$${parts[0]}.00`
    } else if (parts[1].length === 1) {
        formatted = `$${parts[0]}.${parts[1]}0`
    }
    return formatted
}

const formatDate = (stamp) => {
    const dated = new Date(parseInt(stamp) * 1000)
    return `${dated.getMonth() + 1}/${dated.getDate()}/${dated.getFullYear()}`
}

const ReceiptsTable = (props) => {
    return (
        <BooksHooks.Context.Receipts.Consumer>
            {(receipts) => {
                const generateTableColumns = () => {
                    return [
                        { className: 'report-begin', label: 'Report Begins' },
                        { className: 'report-end', label: 'Report Ends' },
                        {
                            className: 'report-uploaded-by',
                            label: 'Uploaded By'
                        },
                        {
                            className: 'report-receipts numeric',
                            label: 'Receipts'
                        },
                        {
                            className: 'report-submissions numeric',
                            label: 'USAS Items'
                        },
                        {
                            className: 'report-fees numeric',
                            label: 'Total Fees'
                        }
                    ]
                }
                const generateTableRows = (reports) => {
                    return reports.map((item, i) => {
                        return {
                            columns: [
                                {
                                    className: 'report-begin',
                                    content: formatDate(item.data.report_begin)
                                },
                                {
                                    className: 'report-end',
                                    content: formatDate(item.data.report_end)
                                },
                                {
                                    className: 'report-uploaded-by',
                                    content: item.data.uploaded_by
                                },
                                {
                                    className: 'report-receipts numeric',
                                    content: item.data.report_receipts
                                },
                                {
                                    className: 'report-submissions numeric',
                                    content: item.data.report_submissions
                                },
                                {
                                    className: 'report-fees numeric',
                                    content: formatFee(item.data.report_fees)
                                }
                            ],
                            key: item.key,
                            view: () => props.viewUpload(item)
                        }
                    })
                }

                return (
                    <InnerTable
                        columns={generateTableColumns()}
                        hasActions
                        rows={generateTableRows(receipts)}
                    >
                        <style global='true' jsx='true'>
                            {`
                                .report-begin {
                                    width: 110px;
                                }
                                .report-end {
                                    width: 110px;
                                }
                                .report-uploaded-by {
                                    flex-grow: 1;
                                    min-width: 140px;
                                }
                                .report-receipts {
                                    width: 60px;
                                    margin-right: 16px;
                                }
                                .report-submissions {
                                    width: 80px;
                                    margin-right: 16px;
                                }
                                .report-fees {
                                    width: 70px;
                                    margin-right: 16px;
                                }
                            `}
                        </style>
                    </InnerTable>
                )
            }}
        </BooksHooks.Context.Receipts.Consumer>
    )
}

ReceiptsTable.propTypes = {
    viewUpload: PropTypes.func.isRequired
}

export default ReceiptsTable
