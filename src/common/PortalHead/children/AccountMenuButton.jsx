import React from 'react'
import * as BooksHooks from '../../../hooks'

const AccountMenuButton = (props) => {
    return (
        <BooksHooks.Context.Account.Consumer>
            {(accountHook) => {
                return (
                    <div
                        className='portal-head-account-menu-button'
                        data-testid='account-label'
                        tabIndex='0'
                    >
                        {accountHook.nickname}
                        <i className='far fa-angle-down' />
                        <style global='true' jsx='true'>
                            {`
                                .portal-head-account-menu-button {
                                    color: #fff;
                                    display: flex;
                                    font-weight: 600;
                                    border: none;
                                    border-radius: 3px;
                                    padding: 2px 12px;
                                    font-size: 11pt;
                                    flex-direction: row;
                                    justify-content: flex-start;
                                    align-items: center;
                                    height: 33px;
                                    margin-top: auto;
                                    margin-bottom: auto;
                                    line-height: 30px;
                                    -webkit-touch-callout: none;
                                    -webkit-user-select: none;
                                    -khtml-user-select: none;
                                    -moz-user-select: none;
                                    -ms-user-select: none;
                                    user-select: none;
                                }

                                .portal-head-account-menu-button i {
                                    margin: 3px 0px 0px 8px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                }

                                .portal-head-account-menu-button:hover
                                    + .portal-head-account-menu-items,
                                .portal-head-account-menu-button:focus
                                    + .portal-head-account-menu-items,
                                .portal-head-account-menu-items:focus-within,
                                .portal-head-account-menu-items:hover {
                                    opacity: 100;
                                    display: block;
                                    -webkit-touch-callout: none;
                                    -webkit-user-select: none;
                                    -khtml-user-select: none;
                                    -moz-user-select: none;
                                    -ms-user-select: none;
                                    user-select: none;
                                }
                            `}
                        </style>
                    </div>
                )
            }}
        </BooksHooks.Context.Account.Consumer>
    )
}

export default AccountMenuButton
