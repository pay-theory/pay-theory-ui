/* eslint-disable react/forbid-component-props */
/* eslint-disable react/jsx-no-literals */
import React from 'react'
import PropTypes from 'prop-types'

import { CardRow, CardTable } from '../../common'

import { formatDate } from '../../common/dateUtils'

const TransactionDetails = (props) => {
    const buildMessages = () => {
        if (transaction.messages) {
            if (transaction.messages[0]) {
                return (
                    <div className='col-1'>
                    <h5>Messages:</h5>
                    {transaction.messages.map((message, index) => (
                        <div className='navy' key={index}>
                            {message}
                        </div>
                    ))}
                </div>
                )
            }
        }
        return (
            <div className='col-1'>
                    <h5>Messages:</h5>
                    <div className='navy'>No Messages</div>
                </div>
        )
    }

    const { transaction } = props

    return (
        <CardTable className='details-card'>
            <CardRow>
                <div className='cardHead'>
                    <h3>Order {transaction.transfer_id}</h3>
                    <p className={`status-${transaction.state.toLowerCase()}`}>
                        {transaction.state}
                    </p>
                </div>
                <p className='subHeader'>{`Payment via ${transaction.statement_descriptor}.`}</p>
                <div className='cardContent'>
                    <div className='col-1'>
                        <h5 className='grey'>Create Date:</h5>
                        <div className='navy'>
                            {formatDate(transaction.created_at)}
                        </div>
                        <h5 className='grey'>Name on the Account:</h5>
                        <div className='navy'>{transaction.name}</div>
                        <h5 className='grey'>Source ID:</h5>
                        <div className='navy'>{transaction.source}</div>
                    </div>
                    <div className='col-1'>
                        <h5>Amount:</h5>
                        <div className='navy'>${transaction.amount / 100}</div>
                        <h5>Transaction Type:</h5>
                        <div className='navy'>{transaction.type}</div>
                        <h5>Account:</h5>
                        <div className='navy'>
                            {`${transaction.card_brand} card ending in ${transaction.last_four}`}
                        </div>
                    </div>
                    {buildMessages()}
                </div>
                <style global='true' jsx='true'>
                    {`
                        .cardHead {
                            display: flex;
                            margin: 18px 18px 9px;
                            width: 100%;
                            flex-direction: row;
                        }

                        .subHeader {
                            width: 100%;
                            margin-left: 18px;
                            margin-bottom: 18px;
                            font-size: 18px;
                        }

                        .cardHead h3 {
                            margin-right: 10px;
                        }
                        .cardContent {
                            margin: 9px 0 18px;
                            width: 100%;
                        }
                        .details-card {
                            flex-grow: 1;
                        }
                        .col-1 div {
                            margin: 0 0 16px;
                        }

                        .details-card {
                            flex-grow: 1;
                            width: 100%;
                        }

                        .navy {
                            color: #253243 !important;
                        }

                        .col-1 {
                            float: left;
                            margin-top: 0%;
                            margin-bottom: 15px;
                            margin-left: 2%;
                            margin-right: 2%;
                            min-height: 0.125rem;
                        }

                        .status-canceled,
                        .status-pending,
                        .status-succeeded {
                            border-radius: 14px;
                            color: white;
                            height: 28px;
                            min-width: 100px;
                            justify-content: center;
                            align-items: center;
                            display: flex;
                            font-size: 16px;
                        }

                        .status-succeeded {
                            background: #0bd8aa;
                        }

                        .status-canceled {
                            background: #ed454c;
                        }

                        .status-pending {
                            background: #cad3dd;
                        }
                    `}
                </style>
            </CardRow>
        </CardTable>
    )
}

TransactionDetails.propTypes = {
    transaction: PropTypes.object.isRequired
}

export default TransactionDetails
