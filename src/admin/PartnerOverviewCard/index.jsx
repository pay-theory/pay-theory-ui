import React from 'react'
import * as BooksHooks from '../../hooks'

const PartnerOverviewCard = (props) => (
    <BooksHooks.Context.Partner.Consumer>
        {(partner) => {
            return (
                <div
                    className='overview card rounded'
                    data-testid='partnerOverviewCard'
                >
                    <div className='circle'>
                        <i className='fal fa-building fa-5x' />
                    </div>
                    <div className='proper-name'>{partner.merchantName}</div>
                    <div className='note'>{partner.UID}</div>
                    <hr />
                    <style jsx='true'>{`
                        .circle {
                            background-color: #e8ecef;
                            border-radius: 50%;
                            width: 180px;
                            height: 180px;
                            display: -webkit-flex;
                            display: flex;
                            -webkit-justify-content: center;
                            justify-content: center;
                            -webkit-align-items: center;
                            align-items: center;
                            margin: 16px auto 8px auto;
                        }

                        .circle i {
                            color: #6b7887;
                        }
                        .proper-name {
                            font-size: 24px;
                            font-weight: 600;
                            color: #000000;
                            text-align: center;
                            margin: 8px auto;
                        }

                        .note {
                            font-size: 12px;
                            text-align: center;
                            margin: 8px auto;
                        }
                    `}</style>
                </div>
            )
        }}
    </BooksHooks.Context.Partner.Consumer>
)

export default PartnerOverviewCard
