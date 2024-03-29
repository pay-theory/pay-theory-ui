import React, { useState, useContext, useEffect } from 'react'
import * as BooksHooks from '../../hooks'

const AccountOverviewCard = (props) => {
    const account = useContext(BooksHooks.Context.Member)

    return (
        <div
                        className='overview card rounded'
                        data-testid='AccountOverviewCard'
                    >
                        <div className='circle'>
                            <i className='fal fa-user fa-5x' />
                        </div>
                        <div className='proper-name' data-testid="proper">
                            {`${account.given_name} ${account.family_name}`}
                        </div>
                        <div className='role-contain'>
                            <div
                                className={`role ${account.app_metadata.role}`}
                            >
                                {account.app_metadata.role}
                            </div>
                        </div>
                        <div className='note'>{account.user_id}</div>
                        <hr />
                        <div className='link-row'>
                            <a href={`mailto:${account.email}`}>
                                <i className='fal fa-envelope' />
                                {account.email}
                            </a>
                        </div>
                        <style jsx='true'>{`
                            .link-row {
                                display: flex;
                                flex-direction: row;
                                justify-content: flex-start;
                                align-items: center;
                                padding: 0 32px;
                                height: 56px;
                                width: 100%;
                            }

                            .link-row a,
                            .link-row a:link,
                            .link-row a:visited,
                            .link-row a:active {
                                color: #09f;
                                text-decoration: none;
                                font-weight: 600;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }

                            .link-row a i,
                            .link-row a:link i,
                            .link-row a:visited i,
                            .link-row a:active i {
                                color: #6b7887;
                                margin-right: 12px;
                            }
                            .link-row span i {
                                margin-right: 12px;
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
                                display: flex;
                                justify-content: center;
                                align-content: center;
                            }
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

                            .role.full {
                                background-color: #0199ed;
                                border-radius: 50px;
                                color: white;
                            }
                            .role-contain {
                                width: 100%;
                                display: flex;
                                justify-content: center;
                            }
                            .role.limited {
                                background-color: #0bd8aa;
                                border-radius: 50px;
                                color: white;
                            }
                            .role {
                                min-width: 150px;
                                max-width: 150px;
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
                        `}</style>
                    </div>
    )
}

export default AccountOverviewCard
