/* eslint-disable react/forbid-component-props */
/* eslint-disable react/jsx-no-literals */
import React from 'react'
import PropTypes from 'prop-types'

import { CardRow, CardTable } from '../../common'

import { formatTimestamp } from '../../common/dateUtils'

import { formatPhone } from '../../common/generalUtils'

const TransactionDetails = ({ transaction }) => {
    const cards = ['VISA', 'DISCOVER', 'MASTERCARD', 'AMERICAN_EXPRESS']

    const cardLogoGenerator = (brand) => {
        if (cards.includes(brand)) {
            return (
                <span
                    className={`pay-theory-card-badge pay-theory-card-${brand
                        .toLowerCase()
                        .replace(/_/g, "-")}`}
            />
            );
        }
        else {
            return <i className="fal fa-credit-card" />;
        }
    };

    const createAccountDetail = (item) => {
        switch (item.card_brand) {
        case "CASH":
                return (
                <span className="payment-account-detail">
                        <i className="fal fa-money-bill-wave" />
                        Cash
                    </span>
            );
        case "ACH":
                return (
                <span className="payment-account-detail">
                    <i className="fal fa-money-check-alt" />
                        {item.last_four}
                    </span>
            );
        default:
                return (
                <span className="payment-account-detail">
                        {cardLogoGenerator(item.card_brand)}
                        XX{item.last_four}
                </span>
            );
        }
    };

    const formatFee = (fee) => {
        return fee < 0
            ? `-$${(Math.abs(fee) / 100).toFixed(2)}`
            : `$${(fee / 100).toFixed(2)}`
    }

    // const formatCardType = type => {
    //     const typeArray = type.split(/_/g)
    //     const result = typeArray.map(item => `${item[0]}${item.substring(1).toLowerCase()}`)
    //     return result.join(' ')
    // }

    return (
        <div className='transaction-details'>
            <div className='cardHead'>
                <h3>Order {transaction.transfer_id}</h3>
                <p className={`status-${transaction.state === "SUCCEEDED" ? "received" : transaction.state === 'APPROVED'? "pending" : transaction.state.toLowerCase()}`}>
                    { transaction.state === "SUCCEEDED" ? "RECEIVED" : transaction.state === 'APPROVED'? "PENDING" : transaction.state}
                </p>
            </div>
            <p className='subHeader'>{`Transaction Date: ${formatTimestamp(transaction.updated_at)} `}</p>
            <div className='cardContent'>
                <div className='col-1'>
                    <h5>Amount:</h5>
                    <div className='navy'>{formatFee(transaction.amount)}</div>
                    <h5>Account:</h5>
                    <div className='navy'>
                        {createAccountDetail(transaction)}
                    </div>
                </div>
                <div className='col-1'>
                    {transaction.name && transaction.name !== " " ? <span><h5 className='grey'>Name on the Account:</h5>
                            <div className='navy'>{transaction.name}</div>
                        </span>
                    ) : null}
                    {transaction.account_code ? (
                        <span>
                            <h5>Account Code:</h5>
                            <div className='navy'>{transaction.account_code}</div>
                        </span>
                    ) : null}
                    {transaction.reference ? (
                        <span>
                            <h5>Reference:</h5>
                            <div className='navy'>{transaction.reference}</div>
                        </span>
                    ) : null}
                </div>
                {transaction.email || transaction.phone || transaction.settlement?  <div className='col-1'>
                    {transaction.email ? (
                            <span>
                                <h5>Email:</h5>
                                <div className='navy'>{transaction.email}</div>
                            </span>
                        ) : null}
                    {transaction.phone ? (
                            <span>
                                {' '}
                                <h5>Phone Number:</h5>
                                <div className='navy'>
                                    {formatPhone(transaction.phone)}
                                </div>
                            </span>
                        ) : null}
                    {transaction.settlement ? (
                            <span>
                                <h5>Settlement ID:</h5>
                                <div className='navy'>
                                    {transaction.settlement}
                                </div>
                            </span>
                        ) : null}
                </div>
                ) : (
                    <div />
            </div>
            <style global='true' jsx='true'>
                {`
                    .transaction-details {
                        margin: 0px 24px;
                    }
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

                    .status-declined,
                    .status-pending,
                    .status-settled,
                    .status-received,
                    .status-reversed {
                        border-radius: 14px;
                        color: white;
                        height: 28px;
                        min-width: 100px;
                        justify-content: center;
                        align-items: center;
                        display: flex;
                        font-size: 16px;
                    }

                    .status-settled {
                        background: #5bc794;
                    }

                    .status-declined {
                        background: #ea4141;
                    }

                    .status-pending {
                        background: #f2f2f2;
                    }

                    .status-received {
                        background: #4098eb;
                    }

                    .status-reversed {
                        background: #f5bd42;
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
                              
                      .payment-account-detail i {
                        margin-right: 5px;
                        width: 45px;
                        font-size: 25px;
                        text-align: center;
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
                        align-items: center;
                      }
                `}
            </style>
        </div>
    )
}

TransactionDetails.propTypes = {
    transaction: PropTypes.object.isRequired
}

export default TransactionDetails
