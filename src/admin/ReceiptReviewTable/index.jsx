/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

import { InnerTable, FormHead, Button } from '../../common'
import * as BooksHooks from '../../hooks'
import { StockTags } from '../../common/StatusMessage'
import { parse, formatFee } from './excelUtils'

const ReceiptReviewTable = (props) => {
    const districtHook = useContext(BooksHooks.Context.District)
    const receiptReview = useContext(BooksHooks.Context.ReceiptReview)

    const [statusMessage, setStatusMessage] = useState(<div />)
    const [schoolData, setSchoolData] = useState(<div />)
    const [totalFees, setTotalFees] = useState(0.0)
    const [totalReceipts, setTotalReceipts] = useState(0.0)
    const [loaded, setLoaded] = useState(false)

    const generateTableColumns = () => {
        return [{
                className: 'account-code',
                label: 'Account Code'
            },
            {
                className: 'receipts numeric',
                label: 'Receipts'
            },
            {
                className: 'fees numeric',
                label: 'Fees'
            }
        ]
    }
    const generateTableRows = (school) => {
        return Object.entries(school.submissions).map((submission, i) => {
            const account_code = submission[0]
            const receipts = submission[1].receipts.length
            const fees = submission[1].fees
            return {
                columns: [{
                        className: 'account-code',
                        content: account_code
                    },
                    {
                        className: 'receipts numeric',
                        content: receipts
                    },
                    {
                        className: 'fees numeric',
                        content: formatFee(fees)
                    }
                ],
                key: account_code,
                view: () =>
                    props.viewDetails(
                        account_code,
                        submission[1].receipts,
                        school
                    )
            }
        })
    }

    useEffect(() => {
        if (!loaded && receiptReview && districtHook.districtData) {
            setLoaded(true)
            const parsed = parse(receiptReview, districtHook.district)

            if (!parsed) {
                setError('file format is invalid')
                props.history.push({
                    pathname: props.goBackTo
                })
            }
            else {
                setTotalFees(parsed.total_fees)
                setTotalReceipts(parsed.total_receipts)

                setSchoolData(
                    parsed.schools.map((school, index) => {
                        return (
                            <div
                                className='tab-content'
                                key={`school.name-${index}`}
                            >
                                <FormHead text={school.name} />
                                <InnerTable
                                    columns={generateTableColumns()}
                                    hasActions
                                    key={`school.name-${index}`}
                                    rows={generateTableRows(school)}
                                />
                                <div
                                    className='inner-table inner'
                                    key={`${school.name}-total`}
                                >
                                    <div className='inner-table-row'>
                                        <span className='foot school-name'>
                                            {school.name.toLowerCase()} Total
                                        </span>
                                        <span className='foot receipts numeric'>
                                            {school.receipts}
                                        </span>
                                        <span className='foot fees numeric'>
                                            {formatFee(school.total)}
                                        </span>
                                        <span className='actions' />
                                    </div>
                                </div>
                                <br />
                            </div>
                        )
                    })
                )

                setSuccess('file read successfully')
            }
        }
    })

    const setError = (message) => {
        setStatusMessage(
            StockTags.error(message)
        )
    }

    const setSuccess = (message) => {
        setStatusMessage(
            StockTags.success(message)
        )
    }

    return (
        <div className='review-table card rounded'>
            {schoolData}
            <br />
            <div className='inner-table inner'>
                <div className='inner-table-row'>
                    <span className='totals account-code'>Grand Total</span>
                    <span className='totals receipts numeric'>
                        {totalReceipts}
                    </span>
                    <span className='totals fees numeric'>
                        {formatFee(totalFees)}
                    </span>
                    <span className='actions' />
                </div>
            </div>
            <br />
            {props.isPreview ? (
                <Button
                    color='primary'
                    name='upload-button'
                    onClick={() => props.onAccept()}
                    label='Accept & Send'
                    leadingIcon='paper-plane'
                />
            ) : (
                <div />
            )}
            {statusMessage}
            <style global='true' jsx='true'>
                {`
                    .review-table {
                        background-color: #fff;
                        flex-grow: 100;
                        height: auto;
                        margin: 32px 24px;
                    }
                    .review-table .primary-button {
                        margin: 16px 24px;
                    }
                    .foot {
                        font-size: 11pt;
                        font-weight: 600;
                        border-top: 1px solid #666666;
                    }
                    .totals {
                        font-size: 11pt;
                        font-weight: 600;
                        border-top: 2px solid double #666666;
                    }
                    .account-code {
                        width: 140px;
                        flex-grow: 1;
                    }
                    .school-name {
                        width: 140px;
                        flex-grow: 1;
                        text-transform: capitalize;
                    }
                    .details {
                        width: 47px;
                    }
                    .accept-send {
                        width: 260px;
                    }
                    .receipts {
                        width: 60px;
                        padding-right: 24px;
                    }
                    .fees {
                        width: 80px;
                        padding-right: 24px;
                    }
                    .student-id {
                        width: 120px;
                    }
                    .student-name {
                        width: 200px;
                    }
                    .payment-no {
                        width: 50px;
                    }
                    .description {
                        width: 300px;
                    }
                    .fee-type {
                        width: 75px;
                    }
                    .fee {
                        width: 75px;
                    }
                    .fee-date {
                        width: 140px;
                    }
                `}
            </style>
        </div>
    )
}

ReceiptReviewTable.parse = parse

ReceiptReviewTable.propTypes = {
    goBackTo: PropTypes.string,
    history: PropTypes.array,
    viewDetails: PropTypes.func,
    onAccept: PropTypes.func,
    isPreview: PropTypes.bool
}

export default ReceiptReviewTable
