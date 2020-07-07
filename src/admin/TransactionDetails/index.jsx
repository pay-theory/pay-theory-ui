import React from 'react'
import PropTypes from 'prop-types'

import { CardRow, CardTable } from '../../common'

import { formatDateAndTime } from '../../common/dateUtils'

const TransactionDetails = (props) => {
    const formatDate = (stamp) => {
        const dated = new Date(stamp)
        return formatDateAndTime(dated)
    }

    const buildMessages = () => {
        if (props.transaction.messages[0]) {
            return (
                <div className='col-1'>
                    <h5>Messages:</h5>
                    {props.transaction.messages.map((message, index) => (
                        <div className='navy' key={index}>
                            {message}
                        </div>
                    ))}
                </div>
            )
        } else {
            return (
                <div className='col-1'>
                    <h5>Messages:</h5>
                    <div className='navy'>No Messages</div>
                </div>
            )
        }
    }

    return (
        <CardTable className='details-card'>
            <CardRow>
                <div className='cardHead'>
                    <h3>Transaction Details</h3>
                </div>
                <div className='cardContent'>
                    <div className='col-1'>
                        <h5>Transaction ID:</h5>
                        <div className='navy'>{props.transaction.id}</div>
                        <h5 className='grey'>Create Date:</h5>
                        <div className='navy'>
                            {formatDate(props.transaction.created_at)}
                        </div>
                        <h5 className='grey'>Update Date:</h5>
                        <div className='navy'>
                            {formatDate(props.transaction.updated_at)}
                        </div>
                    </div>
                    <div className='col-1'>
                        <h5>Status:</h5>
                        <div className='navy'>{props.transaction.state}</div>
                        <h5>Amount:</h5>
                        <div className='navy'>
                            ${props.transaction.amount / 100}
                        </div>
                        <h5 className='grey'>Source ID:</h5>
                        <div className='navy'>{props.transaction.source}</div>
                    </div>
                    {buildMessages()}
                </div>
                <style global='true' jsx='true'>
                    {`
                        .cardHead {
                            margin: 18px 18px 9px;
                            width: 100%;
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
